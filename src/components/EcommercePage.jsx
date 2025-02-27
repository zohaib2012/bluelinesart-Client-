// import React from 'react';

const EcommercePage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Introduction Section */}
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">E-Commerce Development Services</h1>
        <p className="text-lg text-gray-700">
          We specialize in creating high-performance e-commerce solutions, from stores to web apps, integrated with secure payment systems.
        </p>
      </section>

      {/* New Content Box Section with Image and Heading/Text */}
      <section className="bg-gray-100 rounded-lg shadow-lg p-8 my-12">
  {/* Container */}
  <div className="flex flex-col md:flex-row items-center md:items-start">
    {/* Image */}
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <img
        src="https://avatars.mds.yandex.net/i?id=bddd9804c3f4382fd6eaf352d9cc7367696b3706-9181986-images-thumbs&n=13" // Replace with your image URL for E-commerce
        alt="E-Commerce"
        className="w-full h-auto rounded-lg"
      />
    </div>

    {/* Text and Button */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl font-semibold mb-4">E-Commerce Solutions</h2>
      <p className="text-lg text-gray-700 mb-6">
        Whether you're launching a new online store, enhancing your existing one, or creating an entire e-commerce ecosystem, we have the expertise to bring your vision to life.
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
            <h3 className="text-2xl font-semibold">Stripe Payment</h3>
          </div>
          <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">E-commerce Stores</h3>
          </div>
          <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Web & Mobile Apps</h3>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Our E-Commerce Development Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Custom E-Commerce Store</h3>
            <p className="text-gray-600">
              We build custom e-commerce websites, tailored to your unique needs, with secure payment gateways and optimized performance.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">E-Commerce Web & Mobile Apps</h3>
            <p className="text-gray-600">
              Our team specializes in creating high-performing e-commerce applications that work seamlessly across web and mobile platforms.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Stripe Payment Integration</h3>
            <p className="text-gray-600">
              We integrate Stripe for a secure and seamless payment experience for your customers, enhancing the transaction process.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">E-Commerce Platform Development</h3>
            <p className="text-gray-600">
              We develop scalable e-commerce platforms tailored to your business needs, ensuring security, usability, and performance.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Multi-Store Solutions</h3>
            <p className="text-gray-600">
              We create multi-store solutions, ideal for shopping mall websites or multi-vendor platforms.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Customer Experience Optimization</h3>
            <p className="text-gray-600">
              We optimize your e-commerce store's design and UX/UI to ensure an engaging and hassle-free shopping experience for customers.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-8 bg-bluecustom text-white">
        <h2 className="text-3xl font-semibold mb-4">Launch Your E-Commerce Store Today</h2>
        <p className="text-lg mb-6">
          Ready to start your e-commerce journey? Contact us now and let’s turn your vision into a reality.
        </p>
        <button className="bg-white text-bluecustom px-6 py-3 rounded-lg">Contact Us</button>
      </section>
    </div>
  );
};

export default EcommercePage;
