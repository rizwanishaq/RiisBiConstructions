import Link from 'next/link';

const Hero = () => {
  return (
    <header
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('pexels-caleboquendo-7707259.jpg')" }}
    >
      <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold">Building Your Dreams</h1>
          <p className="text-xl mt-4">Quality Construction Services</p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-yellow-500 text-white py-2 px-6 rounded-full hover:bg-yellow-600"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
