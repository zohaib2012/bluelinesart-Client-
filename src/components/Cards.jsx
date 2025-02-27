import { useState } from "react";
import { useSendMessagesMutation } from "../Redux/commonslice";
// import { useSendmessagesMutation } from "../Redux/commonslice";
// import { useSendmessagesMutation } from "../Redux/commonslice";

const Cards = () => {

  const cardData = [
    // cardssetup
    {
      title: "Web Development",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      image: "https://avatars.mds.yandex.net/i?id=a11092d1d1d46e7842e1fa97beb4d05cf423b452-12529607-images-thumbs&n=13",
      link: "/contact",
    },
    {
      title: "Desktop Applications",
      description: "AI is transforming the tech industry with new innovations every day.",
      image: "https://avatars.mds.yandex.net/i?id=d23bccf3444940342ad5aab1e25781b4-5647863-images-thumbs&n=13",
      link: "/contact",
    },
    {
      title: "Mobile Applications",
      description: "Top cybersecurity threats and how companies are handling them.",
      image: "https://avatars.mds.yandex.net/i?id=2a4a69152e2f4c6025b5ba4592c207be878e72a0-8491910-images-thumbs&n=13",
      link: "/contact",
    },
    {
      title: "Digital marketing",
      description: "Top cybersecurity threats and how companies are handling them.",
      image: "https://avatars.mds.yandex.net/i?id=4e93ed87bc34d94b756c157f0ed1f2fa-3695599-images-thumbs&n=13",
      link: "/contact",
    },
    {
      title: "Graphic Designing",
      description: "Top cybersecurity threats and how companies are handling them.",
      image: "https://avatars.mds.yandex.net/i?id=44f34871deb6f5e08ad7b460631e7f6dbfac882d-10401675-images-thumbs&n=13",
      link: "/contact",
    },
    {
      title: "E-Commerce",
      description: "Top cybersecurity threats and how companies are handling them.",
      image: "https://avatars.mds.yandex.net/i?id=583668a0bd407a59b7146135b51b1923-4547856-images-thumbs&n=13",
      link: "/contact",
    },
  ];

// formsetup
  
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

{/* cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 m-10 mt-16">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <a href={card.link}>
              <img className="rounded-t-lg w-full h-44 object-cover" src={card.image} alt={card.title} />
            </a>
            <div className="p-5">
              <a href={card.link}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {card.title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.description}</p>
              <a
                href={card.link}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-bluecustom rounded-lg hover:bg-bluecustomhover focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-700 transition-colors"
              >
                Get services
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>

{/* our expertise container */}
      <div className="px-2 bg-slate-50 py-20 w-full flex justify-center">
  <div className="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
    <div className="lg:w-1/2">
      <div className="lg:scale-110 h-80 bg-cover lg:h-full rounded-b-none border lg:rounded-lg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97")'}}>
      </div>
    </div>
    <div className="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
      <h2 className="text-3xl text-gray-800 font-bold">
      Our Expertise in Digital Solutions
        <span className="text-bluecustom">Choices</span>
      </h2>
      <p className="mt-4 text-gray-600">
      
      In fast-paced digital world, having a strong online presence is essential for success.
       We specialize in a wide range of cutting-edge services tailored to meet your business needs.
        From Web Development that builds dynamic and responsive websites to Mobile Application Development
         for seamless user experiences, we ensure high-quality solutions. Our E-commerce Development services 
         help businesses establish powerful online stores, while Desktop Applications offer customized software
          solutions. Additionally, our Digital Marketing strategies enhance brand visibility, and Graphic Designing creates visually stunning content to
           engage your audience. Let us bring your ideas to life with our expert digital services!
      </p>
      <div className="mt-8">
        <a href="/contact" className="bg-bluecustom text-gray-100 hover:bg-bluecustomhover hover:translate-x-1 px-5 py-3 font-semibold rounded">Start Now</a>
      </div>
    </div>
  </div>
</div>


<div className="w-full  flex justify-center items-center bg-slate-50">
  {/* <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:items-stretch md:space-x-12 bg-cyan-700 w-full max-w-4xl p-8 sm:px-12 sm:py-10 rounded-xl shadow-lg text-white overflow-hidden"> */}
    
    
  <div
  className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:items-stretch md:space-x-12 w-full max-w-4xl p-8 sm:px-12 sm:py-10 rounded-xl shadow-lg text-white overflow-hidden"
  style={{ backgroundImage: "url('https://avatars.mds.yandex.net/i?id=489ab6152e0873fc59c0563ebb55ebfd-3610079-images-thumbs&n=13')", backgroundSize: "cover", backgroundPosition: "center" }}
>

    <div className="md:py-4 flex-grow flex flex-col space-y-8 md:justify-between">
      <div className>
        <h1 className="TitleDesgin font-bold text-4xl tracking-wide">Heading</h1>
        <p className=" text-sm pt-2 text-white">nothing</p>
      </div>
      <div className="flex flex-col space-y-6">
        <div className="inline-flex space-x-2 items-center">
          <i className="bi bi-telephone-fill text-teal-300 text-xl" />
          <span className="select-all">+(123) 456 7890</span>
        </div>
        <div className="inline-flex space-x-2 items-center">
          <i className="bi bi-envelope-at-fill text-teal-300 text-xl" />
          <span className="select-all">contact@xyzwebsite.com</span>
        </div>
        <div className="inline-flex space-x-2 items-center">
          <i className="bi bi-geo-alt-fill text-teal-300 text-xl" />
          <span className="select-all">11, Street 342, Abcd Fgh</span>
        </div>
      </div>
      <div className="flex space-x-4 text-lg">
        <a href="#" className="hover:text-teal-300"><i className="bi bi-facebook" /></a>
        <a href="#" className="hover:text-teal-300"><i className="bi bi-instagram" /></a>
        <a href="#" className="hover:text-teal-300"> <i className="bi bi-linkedin" /></a>
        <a href="#" className="hover:text-teal-300"> <i className="bi bi-youtube" /></a>
      </div>
    </div>
    <div className="relative z-10">
      <div className="absolute -top-28 -right-28 z-0 bg-teal-400 w-40 h-40 rounded-full" />
      <div className="absolute -bottom-16 -left-28 z-0 bg-teal-400 w-40 h-40 rounded-full" />
      <div className="relative z-10 w-full md:w-80 h-full bg-white p-7 text-gray-600 rounded-xl shadow-lg" style={{minHeight: 300}}>
     
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
              className="w-full text-sm bg-slate-500 hover:bg-slate-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Submit'}
            </button>
            {isSuccess && <p className="text-green-600 text-sm">Message sent successfully!</p>}
            {isError && <p className="text-red-600 text-sm">Failed to send message. Try again!</p>}
          </form>

      </div>
    </div>
  </div>
</div>


    </div>
  );
};

export default Cards;