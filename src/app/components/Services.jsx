export default function Services() {
    return (
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Our Services</h2>
          <div className="flex flex-wrap mt-8">
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold">Residential Construction</h3>
                <p className="mt-2 text-gray-600">We provide comprehensive residential construction services, from new builds to renovations...</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold">Commercial Construction</h3>
                <p className="mt-2 text-gray-600">Our commercial projects are designed to meet the highest standards of quality and efficiency...</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold">Remodeling Services</h3>
                <p className="mt-2 text-gray-600">We specialize in transforming existing spaces to better suit your needs and style...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  