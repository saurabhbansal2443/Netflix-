import React, { useEffect } from "react";
import netflixLogo from "../../public/assets/netflixlogo.png";
import netflixUser from "../../public/assets/netflixUser.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, signOut ,  onAuthStateChanged } from "firebase/auth";
import { app } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { addUser, deleteUser } from "../Utils/userSlice";
import { toggleGptSearchView } from "../Utils/GptSlice";


const Header = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  let handleGptClick = () => {
    dispatch(toggleGptSearchView());
  } 

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(deleteUser());
       
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    let unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        dispatch(deleteUser(null));
        navigate("/");
      }
    });

    return ()=> unsubscribed();
  }, []);

  return (
    <div className="w-full h-20 bg-gradient-to-b from-black absolute flex justify-between items-center px-4 sm:px-8 z-40">
      <img
        className="h-10 sm:h-14 md:h-16 lg:h-18 xl:h-20"
        src={netflixLogo}
        alt="Netflix Logo"
      />
      {user ? (
        <div className="flex items-center">
          <p className='bg-purple-600 text-white p-2 text-xl  mx-4 rounded-lg font-bold ' onClick={handleGptClick}>  GPT Search </p>
          <img
            className="h-10 w-10 "
            src={netflixUser}
            alt="user"
          />
          <p className="text-white ml-2">{user?.displayName}</p>
          <p
            className="text-white font-bold px-2 cursor-pointer ml-4"
            onClick={handleSignout}
          >
            Signout
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
