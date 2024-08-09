export default function Contact() {
    return (
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          <div className="flex flex-wrap mt-8">
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
              <p className="mt-4 text-gray-600">We'd love to hear about your upcoming project. Contact us today to schedule a consultation.</p>
              <p className="mt-4 text-gray-600">Phone: (123) 456-7890</p>
              <p className="mt-2 text-gray-600">Email: info@yourcompany.com</p>
              <p className="mt-2 text-gray-600">Address: 123 Main Street, Anytown, USA</p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <form action="#" method="POST" className="bg-gray-100 rounded-lg shadow-lg p-6">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700">Name</label>
                  <input type="text" id="name" name="name" className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input type="email" id="email" name="email" className="w-full mt-2 p-2 border border-gray-300 rounded-lg" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700">Message</label>
                  <textarea id="message" name="message" rows="4" className="w-full mt-2 p-2 border border-gray-300 rounded-lg"></textarea>
                </div>
                <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-yellow-600">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
  