export default function Testimonials() {
    return (
      <section id="testimonials" className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Client Testimonials</h2>
          <div className="flex flex-wrap mt-8">
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-600">"We had an amazing experience working with this company. Our home renovation project was completed on time and exceeded our expectations!"</p>
                <p className="mt-4 text-yellow-500 font-semibold">- John Doe</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-600">"Their attention to detail and commitment to quality made our commercial project a success. Highly recommend!"</p>
                <p className="mt-4 text-yellow-500 font-semibold">- Jane Smith</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  