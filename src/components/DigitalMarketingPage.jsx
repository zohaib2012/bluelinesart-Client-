import React from 'react';

const DigitalMarketingPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Introduction Section */}
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Digital Marketing Services</h1>
        <p className="text-lg text-gray-700">
          Enhance your online presence and generate more leads through our comprehensive digital marketing strategies.
        </p>
      </section>
      <section className="bg-gray-100 rounded-lg shadow-lg p-8 my-12">
  {/* Container */}
  <div className="flex flex-col md:flex-row items-center md:items-start">
    {/* Image */}
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <img
        src="https://avatars.mds.yandex.net/i?id=72b72fd6b20b0438aa9052c67f4aaf90d5291a2e-4080502-images-thumbs&n=13" // Replace with your image URL for E-commerce
        alt="E-Commerce"
        className="w-full h-auto rounded-lg"
      />
    </div>

    {/* Text and Button */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl font-semibold mb-4">Digital Marketing</h2>
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

      {/* Digital Marketing Services Section */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Digital Marketing Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">SEO (Search Engine Optimization)</h3>
            <p className="text-gray-600">
              We optimize your website for search engines to increase visibility, organic traffic, and improve rankings.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">PPC (Pay-Per-Click)</h3>
            <p className="text-gray-600">
              Our PPC campaigns help you generate targeted traffic with optimized ad spend across platforms like Google Ads.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Email Marketing</h3>
            <p className="text-gray-600">
              We create and send personalized email campaigns to increase engagement, drive conversions, and grow your audience.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Affiliate Marketing</h3>
            <p className="text-gray-600">
              Our affiliate marketing services connect your brand with influencers to drive sales and increase brand reach.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Content Marketing</h3>
            <p className="text-gray-600">
              We craft compelling content to help your business attract and engage customers through blogs, videos, and infographics.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-8 bg-bluecustom text-white">
        <h2 className="text-3xl font-semibold mb-4">Take Your Digital Presence to the Next Level</h2>
        <p className="text-lg mb-6">
          Contact us today to discuss how our digital marketing strategies can help you grow your business and drive more conversions.
        </p>
        <button className="bg-white text-bluecustom px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;
