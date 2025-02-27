// import React from 'react';

const SocialMediaMarketingPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Introduction Section */}
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Social Media Marketing Services</h1>
        <p className="text-lg text-gray-700">
          We help businesses enhance their online presence and engage with their target audience through tailored social media strategies.
        </p>
      </section>

      {/* New Content Box Section with Image and Heading/Text */}
      <section className="bg-gray-100 rounded-lg shadow-lg p-8 my-12">
  {/* Container */}
  <div className="flex flex-col md:flex-row items-center md:items-start">
    {/* Image */}
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <img
        src="https://avatars.mds.yandex.net/i?id=ecd28ddd10d8f1a2783ce9f0840ccde6-5870180-images-thumbs&n=13" // Replace with your image URL for Social Media Marketing
        alt="Social Media Marketing"
        className="w-full h-auto rounded-lg transition-transform duration-300 transform hover:scale-105"
      />
    </div>

    {/* Text and Button */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl font-semibold mb-4">Boost Your Brand with Social Media</h2>
      <p className="text-lg text-gray-700 mb-6">
        Our team helps you build and execute a personalized social media strategy that drives engagement, growth, and brand loyalty.
      </p>
      <div>
        <button className="bg-bluecustom text-white px-6 py-3 rounded-lg hover:bg-bluecustomhover transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  </div>
</section>


      {/* Social Media Marketing Services Section */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Social Media Marketing Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Social Media Strategy</h3>
            <p className="text-gray-600">
              We create tailored social media strategies based on your business goals, target audience, and industry trends to increase brand awareness and engagement.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Content Creation</h3>
            <p className="text-gray-600">
              Our team crafts compelling content that resonates with your audience, including graphics, videos, posts, and stories tailored to each platform.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Campaign Management</h3>
            <p className="text-gray-600">
              We manage paid campaigns across all major social platforms (Facebook, Instagram, Twitter) to drive traffic and conversions with optimized budgets.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Analytics and Reporting</h3>
            <p className="text-gray-600">
              We monitor key metrics and provide in-depth analytics to measure performance, optimize strategies, and increase ROI.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Brand Monitoring</h3>
            <p className="text-gray-600">
              We monitor your brand's online reputation, track mentions, and help manage any negative sentiment to protect your brand’s image.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Influencer Marketing</h3>
            <p className="text-gray-600">
              We partner with influential social media personalities to promote your brand, increasing reach and building credibility.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-8 bg-bluecustom text-white">
        <h2 className="text-3xl font-semibold mb-4">Start Growing Your Social Presence Today</h2>
        <p className="text-lg mb-6">
          Ready to take your business to the next level with social media? Contact us to create a custom strategy that works for you.
        </p>
        <button className="bg-white text-bluecustom px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default SocialMediaMarketingPage;
