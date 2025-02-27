

const MobileAppDevelopmentPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Introduction Section */}
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Mobile Application Development Services</h1>
        <p className="text-lg text-gray-700">
          Our mobile app development services are tailored to help businesses provide exceptional mobile experiences to their users. We specialize in both **native** and **cross-platform** applications.
        </p>
      </section>
       {/* New Content Box Section with Image and Heading/Text */}
       <section className="bg-gray-100 rounded-lg shadow-lg p-8 my-12">
  {/* Container */}
  <div className="flex flex-col md:flex-row items-center md:items-start">
    {/* Image */}
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <img
        src="https://www.karliisfikirleri.com/wp-content/uploads/2023/10/mobil-uygulama-gelistirme-sanati.jpg" // Replace with your image URL
        alt="Web Development"
        className="w-full h-auto rounded-lg"
      />
    </div>

    {/* Text and Button */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl font-semibold mb-4">Mobile Applications</h2>
      <p className="text-lg text-gray-700 mb-6">
        Our web development services will help you build a modern, user-friendly website that is optimized for performance and growth.
        Take your business to the next level with our custom solutions tailored to your specific needs.
      </p>
      <div>
        <button className="bg-bluecustom text-white px-6 py-3 rounded-lg hover:bg-bluecustomhover">
          Get Started
        </button>
      </div>
    </div>
  </div>
</section>

      {/* Mobile App Technologies Section */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Technologies We Use for Mobile Apps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">React Native</h3>
            <p className="text-gray-600">
              Build fast and reliable mobile applications with React Native. Our team creates scalable apps for both iOS and Android from a single codebase.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Flutter</h3>
            <p className="text-gray-600">
              Flutter enables rapid development with expressive and flexible UI. We develop high-quality, natively compiled applications for mobile, web, and desktop.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Swift (iOS)</h3>
            <p className="text-gray-600">
              For premium iOS experiences, we build high-performance mobile apps using Swift, providing smooth performance and a native feel.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Kotlin (Android)</h3>
            <p className="text-gray-600">
              Kotlin is the preferred language for Android development, allowing us to create feature-rich, fast, and secure mobile applications.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Xamarin</h3>
            <p className="text-gray-600">
              Xamarin lets us create cross-platform mobile apps with a shared C# codebase, ensuring maximum performance across both Android and iOS.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile App Development Services Section */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Mobile App Development Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Custom Mobile App Development</h3>
            <p className="text-gray-600">
              We develop custom mobile apps tailored to your business needs. Whether it's a simple app or complex enterprise solutions, we’ve got you covered.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">E-commerce Mobile Apps</h3>
            <p className="text-gray-600">
              We create engaging and responsive e-commerce apps that deliver seamless shopping experiences to your customers on both Android and iOS.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Mobile App UI/UX Design</h3>
            <p className="text-gray-600">
              A great user interface is essential for success. Our design team specializes in creating intuitive and engaging designs for mobile applications.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">App Integration Services</h3>
            <p className="text-gray-600">
              We provide integration services to help your app connect seamlessly with APIs, payment systems, social media, and third-party services.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Mobile App Testing</h3>
            <p className="text-gray-600">
              We ensure that your mobile app performs flawlessly with rigorous testing to check compatibility, security, and user experience.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">App Maintenance & Support</h3>
            <p className="text-gray-600">
              Our services go beyond development. We offer post-launch support and maintenance to ensure your app stays updated and bug-free.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-8 bg-bluecustom text-white">
        <h2 className="text-3xl font-semibold mb-4">Start Your Mobile App Development Journey Today</h2>
        <p className="text-lg mb-6">
          Have an idea for a mobile app? Let us help you bring it to life with top-tier technologies. Reach out to us for more details.
        </p>
        <button className="bg-white text-bluecustom px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default MobileAppDevelopmentPage;
