// // import React from 'react';
// // import { useHistory } from 'react-router-dom'; // For redirecting

// const Logout = () => {
// //   const history = useHistory();

//   // Logout handler function
//   const handleLogout = () => {
//     // Clear the token from localStorage
//     localStorage.removeItem('logintoken');

//     // Redirect to login page or home page
//     // history.push('/login');  // You can redirect to any page after logout
//   };

//   return (
//     <nav>
//       <button onClick={handleLogout}>Logout</button>
//     </nav>
//   );
// };

// export default Logout;
import { useLogoutUserMutation } from "../Redux/commonslice";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const [logoutUser] = useLogoutUserMutation();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      localStorage.removeItem("Token");
      alert("Logged out successfully");
      navigate("/login");
    } catch (error) {
      alert("Logout failed!");
      console.log(error)
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
