import React, { useState } from "react";
import Header from "./Header";
import { useFormik } from "formik";
import { LoginSchema, SignupSchema } from "../Utils/validations";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../Utils/firebase";
import { addUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  let [isSignup, setIsSignup] = useState(true);
  let [errorMsg, setErrorMsg] = useState(null);

  let dispatch = useDispatch();

  const auth = getAuth(app);

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validationSchema: isSignup ? SignupSchema : LoginSchema,
    onSubmit: (values, action) => {
      setErrorMsg(null);

      if (isSignup) {
        createUserWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: values.userName,
            })
              .then(() => {
                let { displayName, email, uid } = auth.currentUser;

                dispatch(
                  addUser({ displayName: displayName, email: email, uid: uid })
                );
              })
              .catch((error) => {
                setErrorMsg(error);
              });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorCode, errorMessage);
            setErrorMsg(errorCode + "  " + errorMessage);
          });
      } else {
        signInWithEmailAndPassword(auth, values.email, values.password)
          .then((userCredential) => {
            const user = userCredential.user;
            // console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorCode, errorMessage);
            setErrorMsg(errorCode + "  " + errorMessage);
          });
      }

      action.resetForm();
    },
  });

  let handleToggle = () => {
    setIsSignup((prev) => !prev);
    formik.resetForm({
      values: {
        userName: "",
        email: "",
        password: "",
      },
      errors: {},
      touched: {},
    });
  };

  return (
    <div className="h-screen bg-netflix-bg bg-cover bg-center shadow-inner">
      <Header />
      <div className="w-full h-full flex justify-center items-center shadow-inner opacity-85 px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col bg-black w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[30%] gap-8 rounded-sm p-6 sm:p-8 "
          action=""
        >
          <p className="w-full text-2xl sm:text-3xl md:text-4xl text-white mx-auto mt-10 md:mt-20 font-extrabold text-center">
            {isSignup ? " Sign Up" : "Log In "}
          </p>
          {isSignup ? (
            <input
              name="userName"
              onChange={formik.handleChange}
              className="w-full p-3 text-white rounded-sm bg-transparent outline-none border-2 border-gray-700"
              type="text"
              placeholder="Username"
              value={formik.values.userName}
              onBlur={formik.handleBlur}
            />
          ) : null}
          {formik.errors.userName && formik.touched.userName ? (
            <div className="text-red-600">{formik.errors.userName}</div>
          ) : null}
          <input
            name="email"
            onChange={formik.handleChange}
            className="w-full p-3 text-white rounded-sm bg-transparent outline-none border-2 border-gray-700"
            type="text"
            placeholder="Email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <div className="text-red-600">{formik.errors.email}</div>
          ) : null}
          <input
            name="password"
            onChange={formik.handleChange}
            className="w-full p-3 text-white rounded-sm bg-transparent outline-none border-2 border-gray-700"
            type="password"
            placeholder="Password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <div className="text-red-600">{formik.errors.password}</div>
          ) : null}

          <button
            className="w-full p-3 bg-red-600 text-white text-opacity-100 rounded-sm"
            type="submit"
          >
            {isSignup ? " Sign up " : "Log In "}
          </button>

          <p className="w-full text-sm sm:text-base md:text-lg text-white mx-auto mb-10 md:mb-20 text-center">
            {isSignup ? "Already have account ? " : "New to Netflix?"}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={handleToggle}
            >
              {isSignup ? "  LogIn " : " Signup "}
            </span>
          </p>
          <p className="text-red-600"> {errorMsg != null ? errorMsg : null}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
