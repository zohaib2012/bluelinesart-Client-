
// import { useState } from "react";
// import { useLoginuserMutation } from "../Redux/commonslice";
// // import { Navigate } from "react-router-dom";
// // import { useLoginuserMutation } from "../api/commonapi"; // Adjust path if needed

// const Login = () => {
//   const [loginUser, { isLoading, error }] = useLoginuserMutation();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

 

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  


    
//     try {
//       const response = await loginUser(formData).unwrap();
  
//       if (response.message === "User login successfully") {
//         console.log("Login successful:", response);
//         alert("Login successful!");
//         localStorage.setItem("Token", response.logintoken)
//         // localStorage.setItem("token", response.logintoken);
//         // localStorage.setItem("userName", response.email);
//         // Navigate("/");
//       } else {
//         console.error("Unexpected response:", response);
//         alert("Unexpected response from server");
//       }
//     } catch (err) {
//       console.error("Login failed:", err);
//       alert(err.data?.message || "Login failed. Please check your credentials.");
//     }
//   };
  
//   return (
//     <div>
// <div className="py-20">
//   <div className="flex h-full items-center justify-center">
//     <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-900 flex-col flex h-full items-center justify-center sm:px-4">
//       <div className="flex h-full flex-col justify-center gap-4 p-6">
//         <div className="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">


// <form className="flex flex-col gap-4 pb-4" onSubmit={handleSubmit}>
// <h1 className="mb-4 text-2xl font-bold dark:text-white">Login</h1>

// {/* Email Input */}
// <div>
//   <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="email">Email:</label>
//   <input
//     className="block w-full border bg-gray-50 border-gray-300 text-gray-900 p-2.5 text-sm rounded-lg"
//     id="email"
//     type="email"
//     name="email"
//     placeholder="email@example.com"
//     value={formData.email}
//     onChange={handleChange}
//     required
//   />
// </div>

// {/* Password Input */}
// <div>
//   <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="password">Password:</label>
//   <input
//     className="block w-full border bg-gray-50 border-gray-300 text-gray-900 p-2.5 text-sm rounded-lg"
//     id="password"
//     type="password"
//     name="password"
//     value={formData.password}
//     onChange={handleChange}
//     required
//   />
// </div>

// {/* Error Message */}
// {error && <p className="text-red-500">Login failed. Please try again.</p>}

// {/* Submit Button */}
// <button
//   type="submit"
//   className="border transition-colors p-2 bg-bluecustom hover:bg-bluecustomhover text-white rounded-lg"
//   disabled={isLoading}
// >
//   {isLoading ? "Logging in..." : "Login"}
// </button>
// </form>



//            <div className="min-w-[270px]">
//              <div className="mt-4 text-center dark:text-gray-200">New user?
//                <a className="text-bluecustom underline hover:text-bluecustomhover" href="/register">Create account
//                  here</a>
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  </div>


    

//      </div>
//   )
// }

// export default Login
import { useState } from "react";
import { useLoginUserMutation } from "../Redux/commonslice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginUser, { isLoading, error }] = useLoginUserMutation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(formData).unwrap();
      localStorage.setItem("Token", response.token); // Store token in localStorage
      alert("Login successful!");
      navigate("/contact"); // Redirect after login
    } catch (err) {
      alert("Login failed! Please check credentials.");
      console.log(err)
    }
  };

  return (
    // <form onSubmit={handleSubmit}>
    //   <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
    //   <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
    //   <button type="submit" disabled={isLoading}>Login</button>
    //   {error && <p>{error.data?.message || "Login failed"}</p>}
    // </form>


<div>
<div className="py-20">
  <div className="flex h-full items-center justify-center">
    <div className="rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-900 flex-col flex h-full items-center justify-center sm:px-4">
      <div className="flex h-full flex-col justify-center gap-4 p-6">
        <div className="left-0 right-0 inline-block border-gray-200 px-2 py-2.5 sm:px-4">


<form className="flex flex-col gap-4 pb-4" onSubmit={handleSubmit}>
<h1 className="mb-4 text-2xl font-bold dark:text-white">Login</h1>

{/* Email Input */}
<div>
  <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="email">Email:</label>
  <input
    className="block w-full border bg-gray-50 border-gray-300 text-gray-900 p-2.5 text-sm rounded-lg"
    id="email"
    type="email"
    name="email"
    placeholder="email@example.com"
    value={formData.email}
    onChange={handleChange}
    required
  />
</div>

{/* Password Input */}
<div>
  <label className="text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="password">Password:</label>
  <input
    className="block w-full border bg-gray-50 border-gray-300 text-gray-900 p-2.5 text-sm rounded-lg"
    id="password"
    type="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    required
  />
</div>

{/* Error Message */}
{error && <p className="text-red-500">Login failed. Please try again.</p>}

{/* Submit Button */}
<button
  type="submit"
  className="border transition-colors p-2 bg-bluecustom hover:bg-bluecustomhover text-white rounded-lg"
  disabled={isLoading}
>
  {isLoading ? "Logging in..." : "Login"}
</button>
</form>



           <div className="min-w-[270px]">
             <div className="mt-4 text-center dark:text-gray-200">New user?
               <a className="text-bluecustom underline hover:text-bluecustomhover" href="/register">Create account
                 here</a>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>


    

     </div>

  );
};

export default Login;
