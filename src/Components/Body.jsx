import React , {useEffect} from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { addUser, deleteUser } from "../Utils/userSlice";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../Utils/firebase";


const Body = () => {
  let auth = getAuth(app);
  let dispatch = useDispatch();
 
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/browse",
      element: <Browse></Browse>,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , displayName , email } = user;
        dispatch(addUser({uid : uid , displayName : displayName , email : email}));
        
      } else {  
        dispatch(deleteUser(null));
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
