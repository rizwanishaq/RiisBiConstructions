import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">About Us</h2>
        <div className="flex flex-wrap mt-8">
          <div className="w-full md:w-1/2 p-4 flex justify-center">
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <Image
                src="/pexels-njeromin-12314551.jpg" // Ensure this path is correct
                alt="Our Team"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-2xl font-semibold">Our Story</h3>
            <p className="mt-4 text-gray-600">
              Our company has been building exceptional structures for over a decade. With a dedicated team of professionals, we bring dreams to reality...
            </p>
            <p className="mt-4 text-gray-600">
              Our mission is to deliver top-notch construction services that exceed client expectations while maintaining safety and sustainability standards...
            </p>
            <Link href="/portfolio">
              <span className="mt-4 inline-block text-yellow-500 font-semibold hover:underline cursor-pointer">View Our Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
