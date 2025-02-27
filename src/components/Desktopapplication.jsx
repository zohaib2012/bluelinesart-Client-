const DesktopDevelopmentPage = () => {
    return (
      <div className="container mx-auto p-4">
        {/* Introduction Section */}
        <section className="text-center py-8">
          <h1 className="text-4xl font-bold mb-4">Desktop Application Development</h1>
          <p className="text-lg text-gray-700">
            We provide cutting-edge desktop application development services, ensuring robust and efficient software solutions for your business.
          </p>
        </section>
  
        {/* New Content Box Section with Image and Heading/Text */}
        <section className="bg-gray-100 rounded-lg shadow-lg p-8 my-12">
  {/* Container */}
  <div className="flex flex-col md:flex-row items-center md:items-start">
    {/* Image */}
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <img
        src="https://avatars.mds.yandex.net/i?id=ac6345d0fc7babab615916c8db6c15c13b9566d8-5233272-images-thumbs&n=13" // Replace with your image URL
        alt="Desktop Development"
        className="w-full h-auto rounded-lg"
      />
    </div>

    {/* Text and Button */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl font-semibold mb-4">Custom Desktop Applications</h2>
      <p className="text-lg text-gray-700 mb-6">
        We build powerful and scalable desktop applications tailored to your business needs, ensuring high performance and usability.
      </p>
      <div>
        <button className="bg-bluecustom text-white px-6 py-3 rounded-lg hover:bg-bluecustomhover">
          Get Started
        </button>
      </div>
    </div>
  </div>
</section>

  
        {/* Technologies Section */}
        <section className="my-12">
          <h2 className="text-3xl font-semibold text-center mb-6">Technologies We Use</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">.NET</h3>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Electron.js</h3>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Java</h3>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">C#</h3>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Python</h3>
            </div>
            <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold">Qt</h3>
            </div>
          </div>
        </section>
  
        {/* Call to Action Section */}
        <section className="text-center py-8 bg-bluecustom text-white">
          <h2 className="text-3xl font-semibold mb-4">Start Your Desktop App Project Today</h2>
          <p className="text-lg mb-6">
            Contact us to develop high-performance and scalable desktop applications for your business.
          </p>
          <button className="bg-white text-bluecustom px-6 py-3 rounded-lg">Contact Us</button>
        </section>
      </div>
    );
  };
  
  export default DesktopDevelopmentPage;
  