// import { Link, useLocation, useNavigate } from 'react-router-dom'
// import { FcGoogle } from 'react-icons/fc'
// import useAuth from '../../hooks/useAuth'
// import toast from 'react-hot-toast';
// import { TbFidgetSpinner } from "react-icons/tb";
// import { useState } from 'react';

// const Login = () => {
//   const location = useLocation()
//   const from = location?.state || '/'
//   const navigate = useNavigate();
//   const {  signInWithGoogle, signIn,  loading, setLoading, resetPassword } = useAuth();
//   const [email, setEmail] = useState('');

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const form = e.target
//     const email = form.email.value
//     const password = form.password.value

//     try{
//       setLoading(true);
//       // 1. sign in user
//       await signIn(email, password);
//       navigate(from)
//       toast.success('Sign Up Successfully!')

//     } catch(err){
//       console.log(err)
//       toast.error(err.message)
//       setLoading(false);
//     }

//   }

//   const handleResetPassword = async () => {
//     if(!email) return  toast.error('Please write your email first!')
//     try{
//       await resetPassword(email)
//       toast.success('Request Success! Check your email for further process...')
//       setLoading(false);
//     }catch(err) {
//       console.log(err)
//       toast.error(err.message)
//       setLoading(false);
//     }
//     console.log(email)
//   }

//     // handle google login
//     const handleGoogleSignIn = async () =>{
//       try{
//         await signInWithGoogle();
//         navigate(from)
//         toast.success('Sign Up Successfully!')

//       } catch(err){
//         console.log(err)
//         toast.error(err.message)
//       }
//     }

//   return (
//     <div className='flex justify-center items-center min-h-screen'>
//       <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
//         <div className='mb-8 text-center'>
//           <h1 className='my-3 text-4xl font-bold'>Log In</h1>
//           <p className='text-sm text-gray-400'>
//             Sign in to access your account
//           </p>
//         </div>
//         <form
//          onSubmit={handleSubmit}
//           className='space-y-6 ng-untouched ng-pristine ng-valid'
//         >
//           <div className='space-y-4'>
//             <div>
//               <label htmlFor='email' className='block mb-2 text-sm'>
//                 Email address
//               </label>
//               <input
//                 type='email'
//                 name='email'
//                 onBlur={e => setEmail(e.target.value)}
//                 id='email'
//                 required
//                 placeholder='Enter Your Email Here'
//                 className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
//                 data-temp-mail-org='0'
//               />
//             </div>
//             <div>
//               <div className='flex justify-between'>
//                 <label htmlFor='password' className='text-sm mb-2'>
//                   Password
//                 </label>
//               </div>
//               <input
//                 type='password'
//                 name='password'
//                 autoComplete='current-password'
//                 id='password'
//                 required
//                 placeholder='*******'
//                 className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
//               />
//             </div>
//           </div>

//           <div>
//           <button
//             disabled={loading}
//               type='submit'
//               className='bg-rose-500 w-full rounded-md py-3 text-white'
//             >
//              { loading ? <TbFidgetSpinner className='animate-spin m-auto'/> : 'Sign In' }
//             </button>
//           </div>
//         </form>

//         <div className='space-y-1'>
//           <button
//           onClick={handleResetPassword}
//           className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
//             Forgot password?
//           </button>
//         </div>

//         <div className='flex items-center pt-4 space-x-1'>
//           <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
//           <p className='px-3 text-sm dark:text-gray-400'>
//             Login with social accounts
//           </p>
//           <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
//         </div>

//         <button
//         disabled={loading}
//         onClick={handleGoogleSignIn}
//         className='disabled:cursor-not-allowed flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
//           <FcGoogle size={32} />

//           <p>Continue with Google</p>
//         </button>

//         <p className='px-6 text-sm text-center text-gray-400'>
//           Don&apos;t have an account yet?{' '}
//           <Link
//             to='/signup'
//             className='hover:underline hover:text-rose-500 text-gray-600'
//           >
//             Sign up
//           </Link>
//           .
//         </p>
//       </div>
//     </div>
//   )
// }

// export default Login

import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";
import { useState } from "react";

const Login = () => {
  const location = useLocation();
  const from = location?.state || "/";
  const navigate = useNavigate();
  const {
    signInWithGoogle,
    signIn,
    loading,
    setLoading,
    resetPassword,
  } = useAuth();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      setLoading(true);
      await signIn(email, password);
      toast.success("Logged in successfully!");
      navigate(from);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    if (!email) return toast.error("Please write your email first!");
    try {
      await resetPassword(email);
      toast.success("Check your email for reset instructions!");
      setLoading(false);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      toast.success("Logged in with Google!");
      navigate(from);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const handleDemoLogin = async (role) => {
    let credentials = {};
    if (role === "admin") {
      credentials = {
        email: "stayvistaadmin@gmail.com",
        password: "@stayVistaAdmin1",
      };
    } else if (role === "host") {
      credentials = {
        email: "alokroy2410@gmail.com",
        password: "@stayVistaHost1",
      };
    } else {
      credentials = {
        email: "stayvistauser@gmail.com",
        password: "@stayVistaUser1",
      };
    }

    try {
      setLoading(true);
      await signIn(credentials.email, credentials.password);
      toast.success(`Logged in as ${role}!`);
      navigate(from);
    } catch (err) {
      toast.error(err.message);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 p-4">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-lg shadow-2xl rounded-3xl border border-gray-200 px-8 py-10 transition-transform duration-300 hover:shadow-purple-200 hover:-translate-y-1">
        <h2 className="text-4xl font-extrabold text-center text-purple-600 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Log in to access your Mozzo Bazar account
        </p>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              onBlur={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="*******"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleResetPassword}
              className="text-xs text-purple-600 hover:underline"
            >
              Forgot password?
            </button>
          </div>

          <button
            disabled={loading}
            type="submit"
            className="w-full py-3 font-semibold text-white bg-purple-600 hover:bg-purple-700 rounded-xl shadow-md transition"
          >
            {loading ? (
              <TbFidgetSpinner className="animate-spin m-auto" />
            ) : (
              "Sign In"
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-3 text-sm text-gray-400">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Sign-In */}
        <button
          disabled={loading}
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center gap-2 w-full border border-gray-300 py-2.5 rounded-xl hover:bg-gray-50 transition"
        >
          <FcGoogle size={22} /> Continue with Google
        </button>

        {/* Demo Login Buttons */}
        <div className="mt-8">
          <p className="text-center text-sm text-gray-500 mb-3">
            Demo Accounts
          </p>
          <div className="flex flex-col gap-3">
            <button
              onClick={() => handleDemoLogin("admin")}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white py-2 rounded-xl shadow hover:shadow-lg transition"
            >
              👑 Login as Admin
            </button>
            <button
              onClick={() => handleDemoLogin("host")}
              className="bg-gradient-to-r from-emerald-500 to-green-600 text-white py-2 rounded-xl shadow hover:shadow-lg transition"
            >
              🏡 Login as Host
            </button>
            <button
              onClick={() => handleDemoLogin("user")}
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-xl shadow hover:shadow-lg transition"
            >
              🙋 Login as User
            </button>
          </div>
        </div>

        {/* SignUp Redirect */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-purple-600 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
