
const GraphicDesigningPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Introduction Section */}
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold mb-4">Graphic Designing Services</h1>
        <p className="text-lg text-gray-700">
          Bring your ideas to life with our creative and innovative graphic design services tailored to meet your brand needs.
        </p>
      </section>

      <section className="bg-gray-100 rounded-lg shadow-lg p-8 my-12">
  {/* Container */}
  <div className="flex flex-col md:flex-row items-center md:items-start">
    {/* Image */}
    <div className="w-full md:w-1/2 mb-8 md:mb-0">
      <img
        src="https://3.bp.blogspot.com/-6q6HNv1EUxc/V1PakbacJaI/AAAAAAAAD64/Wks7NgffEbAUailUvTjw4emStO3aSVVKQCLcB/w700-h400-p-k-no-nu/Bittarget-Graphic-Design-Services.jpg" // Replace with your image URL for E-commerce
        alt="E-Commerce"
        className="w-full h-auto rounded-lg"
      />
    </div>

    {/* Text and Button */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h2 className="text-3xl font-semibold mb-4">Graphics Designing</h2>
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


      {/* Graphic Designing Services Section */}
      <section className="my-12">
        <h2 className="text-3xl font-semibold text-center mb-6">Our Graphic Designing Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Logo Design</h3>
            <p className="text-gray-600">
              We design unique, memorable logos that reflect your brand identity and leave a lasting impression.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Brand Identity</h3>
            <p className="text-gray-600">
              We help you create a cohesive brand identity with logos, typography, color schemes, and more.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Brochure Design</h3>
            <p className="text-gray-600">
              Design brochures and promotional materials that effectively communicate your brand message to your audience.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Web Design</h3>
            <p className="text-gray-600">
              Create visually stunning and functional websites that enhance user experience and drive conversions.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Packaging Design</h3>
            <p className="text-gray-600">
              Design packaging that resonates with your target audience and represents your product’s value and aesthetics.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-8 bg-bluecustom text-white">
        <h2 className="text-3xl font-semibold mb-4">Create Your Brand with Stunning Designs</h2>
        <p className="text-lg mb-6">
          Let's work together to create captivating designs that elevate your brand. Get in touch with us to start your project.
        </p>
        <button className="bg-white text-bluecustom px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default GraphicDesigningPage;
