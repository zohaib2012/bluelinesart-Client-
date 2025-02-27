// import React from 'react'

import  { useState } from 'react';
import { useSendMessagesMutation } from '../Redux/commonslice';
// import { useSendmessagesMutation } from '../Redux/commonslice';
// import { useSendMessagesMutation } from '../Redux/commonslice';
// import { useSendmessagesMutation } from '../Redux/commonslice';

const Contact = () => {



    const [sendmessages, { isLoading, isError, isSuccess }] = useSendMessagesMutation(); // RTK Mutation Hook
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      // Send form data to API
      await sendmessages(formData).unwrap();
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', number: '', message: '' }); // Reset form fields
    } catch (error) {
      alert('Error sending message!');
      console.error('Error:', error);
    }
  };


  return (
    <div>

<div>
   
<img className="w-full h-full" src="https://centreforproductivity.org/images/ceprod-banners/contact-us.jpg" alt="" />
<div className="max-w-7xl mx-auto p-4 md:p-8">
  <div className="grid md:grid-cols-2 gap-8 items-start">
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-3xl font-bold bluecustom mb-4">Get in touch</h2>
      <p className="text-gray-600 mb-8 text-sm">Feel free to contact us and we will get back to you as soon as possible</p>
 

      
<form onSubmit={handleSubmit} className="space-y-4">
             <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
            />
            <input
              type="text"
              name="number"
              placeholder="Phone Number"
              value={formData.number}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full text-sm bg-bluecustom hover:bg-bluecustomhover text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Submit'}
            </button>
            {isSuccess && <p className="text-green-600 text-sm">Message sent successfully!</p>}
            {isError && <p className="text-red-600 text-sm">Failed to send message. Try again!</p>}
          </form>



{/* form */}
    </div>
    <div className="space-y-8">
      <div className="bg-white rounded-lg p-6 shadow">
        <h3 className="text-xl font-semibold bluecustom mb-6">Contact Information</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-indigo-900" viewBox="0 0 64 64">
              <path d="M32 0A24.032 24.032 0 0 0 8 24c0 17.23 22.36 38.81 23.31 39.72a.99.99 0 0 0 1.38 0C33.64 62.81 56 41.23 56 24A24.032 24.032 0 0 0 32 0zm0 35a11 11 0 1 1 11-11 11.007 11.007 0 0 1-11 11z" data-original="#000000" />
            </svg>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Our Location</h4>
              <p className="text-gray-600 text-sm">123 Business Street</p>
              <p className="text-gray-600 text-sm">New York, NY 10001</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-indigo-900" viewBox="0 0 513.64 513.64">
              <path d="m499.66 376.96-71.68-71.68c-25.6-25.6-69.12-15.359-79.36 17.92-7.68 23.041-33.28 35.841-56.32 30.72-51.2-12.8-120.32-79.36-133.12-133.12-7.68-23.041 7.68-48.641 30.72-56.32 33.28-10.24 43.52-53.76 17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12 0L18.38 62.08c-48.64 51.2 5.12 186.88 125.44 307.2s256 176.641 307.2 125.44l48.64-48.64c17.921-20.48 17.921-51.2 0-69.12z" data-original="#000000" />
            </svg>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Phone Number</h4>
              <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-indigo-900" viewBox="0 0 512 512">
              <path d="M298.789 313.693c-12.738 8.492-27.534 12.981-42.789 12.981-15.254 0-30.05-4.489-42.788-12.981L3.409 173.82A76.269 76.269 0 0 1 0 171.403V400.6c0 26.278 21.325 47.133 47.133 47.133h417.733c26.278 0 47.133-21.325 47.133-47.133V171.402a75.21 75.21 0 0 1-3.416 2.422z" data-original="#000000" />
              <path d="m20.05 148.858 209.803 139.874c7.942 5.295 17.044 7.942 26.146 7.942 9.103 0 18.206-2.648 26.148-7.942L491.95 148.858c12.555-8.365 20.05-22.365 20.05-37.475 0-25.981-21.137-47.117-47.117-47.117H47.117C21.137 64.267 0 85.403 0 111.408a44.912 44.912 0 0 0 20.05 37.45z" data-original="#000000" />
            </svg>
            <div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">Email Address</h4>
              <p className="text-gray-600 text-sm">contact@business.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-6 shadow">
        <h3 className="text-xl font-semibold bluecustom mb-6">Hours of Operation</h3>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm">Monday - Friday</span>
            <span className="text-gray-800 text-sm">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm">Saturday</span>
            <span className="text-gray-800 text-sm">10:00 AM - 4:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 text-sm">Sunday</span>
            <span className="text-gray-800 text-sm">Closed</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


</div>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10890.418841389304!2d74.22133639239704!3d31.467070034315857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015694c6f93b%3A0x4e67fc4b92b77587!2sThokar%20Niaz%20Baig%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1707362321234!5m2!1sen!2s" width="100%" height={400} style={{border: 0}} allowFullScreen loading="lazy">
</iframe>



    </div>
  )
}

export default Contact
// import  { useState } from 'react';
// import { useSendmessagesMutation } from '../Redux/commonslice';
// // import { useSendmessagesMutation } from './api'; // Import RTK Query mutation

// const Contact = () => {
//   const [sendmessages, { isLoading, isError, isSuccess }] = useSendmessagesMutation(); // RTK Mutation Hook

//   // State for form inputs
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     number: '',
//     message: '',
//   });

//   // Handle input change
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await sendmessages(formData).unwrap();
//       alert('Message sent successfully!');
//       setFormData({ name: '', email: '', number: '', message: '' }); // Reset form
//     } catch (error) {
//       alert('Error sending message!');
//       console.log(error)
//     }
//   }
  
  

//   return (
//     <div>
//       <img
//         className="w-full h-full"
//         src="https://centreforproductivity.org/images/ceprod-banners/contact-us.jpg"
//         alt="Contact Us"
//       />
//       <div className="max-w-7xl mx-auto p-4 md:p-8">
//         <div className="grid md:grid-cols-2 gap-8 items-start">
//           <div className="bg-gray-50 rounded-lg p-6">
//             <h2 className="text-3xl font-bold bluecustom mb-4">Get in touch</h2>
//             <p className="text-gray-600 mb-8 text-sm">
//               Feel free to contact us and we will get back to you as soon as possible
//             </p>
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="E-mail"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
//               />
//               <input
//                 type="text"
//                 name="number"
//                 placeholder="Phone Number"
//                 value={formData.number}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
//               />
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 rows="4"
//                 value={formData.message}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none"
//               />
//               <button
//                 type="submit"
//                 className="w-full text-sm bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
//                 disabled={isLoading}
//               >
//                 {isLoading ? 'Sending...' : 'Submit'}
//               </button>
//               {isSuccess && <p className="text-green-600 text-sm">Message sent successfully!</p>}
//               {isError && <p className="text-red-600 text-sm">Failed to send message. Try again!</p>}
//             </form>
//           </div>
//         </div>
//       </div>
//       <iframe
//         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10890.418841389304!2d74.22133639239704!3d31.467070034315857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919015694c6f93b%3A0x4e67fc4b92b77587!2sThokar%20Niaz%20Baig%2C%20Lahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1707362321234!5m2!1sen!2s"
//         width="100%"
//         height={400}
//         style={{ border: 0 }}
//         allowFullScreen
//         loading="lazy"
//       ></iframe>
//     </div>
//   );
// };

// export default Contact;

// import  { useState } from 'react';
// import { useSendmessagesMutation } from '../Redux/commonslice'; // Redux RTK Query mutation hook

// const Contact = () => {
//   const [sendmessages, { isLoading, isError, isSuccess }] = useSendmessagesMutation(); // RTK Mutation Hook
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     number: '',
//     message: '',
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent default form submission behavior
//     try {
//       // Send form data to API
//       await sendmessages(formData).unwrap();
//       alert('Message sent successfully!');
//       setFormData({ name: '', email: '', number: '', message: '' }); // Reset form fields
//     } catch (error) {
//       alert('Error sending message!');
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-4 md:p-8">
//       <div className="grid md:grid-cols-2 gap-8 items-start">
//         <div className="bg-gray-50 rounded-lg p-6">
//           <h2 className="text-3xl font-bold bluecustom mb-4">Get in touch</h2>
//           <p className="text-gray-600 mb-8 text-sm">
//             Feel free to contact us, and we will get back to you as soon as possible
//           </p>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="E-mail"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
//             />
//             <input
//               type="text"
//               name="number"
//               placeholder="Phone Number"
//               value={formData.number}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none"
//             />
//             <textarea
//               name="message"
//               placeholder="Message"
//               rows="4"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="w-full p-3 rounded-lg bg-white border text-sm border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none"
//             />
//             <button
//               type="submit"
//               className="w-full text-sm bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
//               disabled={isLoading}
//             >
//               {isLoading ? 'Sending...' : 'Submit'}
//             </button>
//             {isSuccess && <p className="text-green-600 text-sm">Message sent successfully!</p>}
//             {isError && <p className="text-red-600 text-sm">Failed to send message. Try again!</p>}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;




