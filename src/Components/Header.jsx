import React from "react";
import netflixLogo from "../../public/assets/netflixlogo.png";
import netflixUser from "../../public/assets/netflixUser.jpg";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../Utils/userSlice";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        dispatch(deleteUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="w-full h-20 bg-gradient-to-b from-black absolute flex justify-between items-center px-4 sm:px-8">
      <img
        className="h-10 sm:h-14 md:h-16 lg:h-18 xl:h-20"
        src={netflixLogo}
        alt="Netflix Logo"
      />
      {user ? (
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full"
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
