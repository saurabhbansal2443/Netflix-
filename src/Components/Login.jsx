import React , {useState } from 'react';
import Header from './Header';

const Login = () => {
  let [isSignup , setIsSignup] = useState(true);

  return (
    <div className="h-screen bg-netflix-bg bg-cover bg-center shadow-inner">
      <Header />
      <div className="w-full h-full flex justify-center items-center shadow-inner opacity-85 px-4 sm:px-6 lg:px-8">
        <form className='flex flex-col bg-black w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[30%] gap-8 rounded-sm p-6 sm:p-8 ' action="">
          <p className='w-full text-2xl sm:text-3xl md:text-4xl text-white mx-auto mt-10 md:mt-20 font-extrabold text-center'>{isSignup? " Sign In" : "Log In "}</p>
         {isSignup?  <input className='w-full p-3 text-white rounded-sm bg-transparent outline-none border-2 border-gray-700' type="text" placeholder='Username' /> : null }
          <input className='w-full p-3 text-white rounded-sm bg-transparent outline-none border-2 border-gray-700' type="text" placeholder='Email' />
          <input className='w-full p-3 text-white rounded-sm bg-transparent outline-none border-2 border-gray-700' type="password" placeholder='Password' />

          <button className='w-full p-3 bg-red-600 text-white text-opacity-100 rounded-sm' type="submit">{isSignup? " Sign In" : "Log In "}</button>

          <p className='w-full text-sm sm:text-base md:text-lg text-white mx-auto mb-10 md:mb-20 text-center'>{isSignup ? "New to Netflix?" : "Already have account" }<span className='text-blue-600 cursor-pointer' onClick={()=> {setIsSignup(!isSignup)}}>{ isSignup ?  "Sign Up" : "Login"}</span></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
