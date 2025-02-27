

const WebDevelopmentPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Introduction Section */}
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Web Development Services</h1>
        <p className="text-lg text-gray-700">
          We specialize in offering top-notch web development services tailored to meet your business needs.
        </p>
      </section>

      <section className="bg-gray-100 rounded-lg shadow-lg p-8 my-12">
  {/* Container */}
  <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
    {/* Image */}
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <img
        src="https://avatars.mds.yandex.net/i?id=7e8dd57012f70d39e0ce8be9357b0a14-5722855-images-thumbs&n=13" // Replace with your image URL
        alt="Web Development"
        className="w-full h-auto rounded-lg"
      />
    </div>

    {/* Text and Button */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl font-semibold mb-4">Web Applications</h2>
      <p className="text-lg text-gray-700 mb-6">
        Our web development services will help you build a modern, user-friendly website that is optimized for performance and growth. Take your business to the next level with our custom solutions tailored to your specific needs.
      </p>
      <button className="bg-bluecustom text-white px-6 py-3 rounded-lg hover:bg-bluecustomhover">
        Get Started
      </button>
    </div>
  </div>
</section>


      {/* Technologies Section */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Technologies We Use</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">PHP</h3>
          </div>
          <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">ASP.NET</h3>
          </div>
          <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">AWS</h3>
          </div>
          <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">MS Azure</h3>
          </div>
          <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Node JS</h3>
          </div>
          <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">MERN</h3>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Web Development Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Custom Web Development</h3>
            <p className="text-gray-600">
              We create custom websites tailored to your specific needs, offering full-stack development with modern tools and frameworks.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">E-commerce Solutions</h3>
            <p className="text-gray-600">
              Our team specializes in creating scalable e-commerce platforms with secure payment gateways and seamless user experiences.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Responsive Web Design</h3>
            <p className="text-gray-600">
              We ensure that your website looks great and functions smoothly on all devices, providing a responsive design for better user engagement.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">CMS Development</h3>
            <p className="text-gray-600">
              We provide CMS solutions like WordPress and Drupal, allowing you to manage your website content with ease.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">API Integration</h3>
            <p className="text-gray-600">
              Our team excels in integrating third-party APIs into your website to extend functionality and improve performance.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Web App Development</h3>
            <p className="text-gray-600">
              We develop powerful and scalable web applications using the latest technologies, ensuring robust performance.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-8 bg-bluecustom text-white">
        <h2 className="text-3xl font-semibold mb-4">Get Started with Your Project Today</h2>
        <p className="text-lg mb-6">
          Ready to bring your idea to life? Contact us to start building your next big project with our expert web development team.
        </p>
        <button className="bg-white text-bluecustom px-6 py-3 rounded-lg">Contact Us</button>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;

