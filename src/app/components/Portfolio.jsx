import Image from 'next/image';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Our Portfolio</h2>
        <div className="flex flex-wrap mt-8">
          <div className="w-full md:w-1/3 p-4">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/pexels-gorma-kuma-1606065-3251362.jpg" // Replace with actual path
                alt="Project 1"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/pexels-cup-of-couple-6177635.jpg" // Replace with actual path
                alt="Project 2"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 p-4">
            <div className="relative w-full h-64 md:h-80">
              <Image
                src="/pexels-krislucas90-3385662.jpg" // Replace with actual path
                alt="Project 3"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
