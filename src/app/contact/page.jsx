import Head from 'next/head';

export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Contact Us - OpeBridge</title>
      </Head>
      <div className="max-w-7xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-[#f3a529] mb-8">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-[#f3a529] mb-4">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-b-2 border-gray-300 focus:border-[#f3a529] outline-none p-2"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-b-2 border-gray-300 focus:border-[#f3a529] outline-none p-2"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full border-b-2 border-gray-300 focus:border-[#f3a529] outline-none p-2"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#f3a529] text-white py-2 px-4 rounded-md hover:bg-[#d98f22] transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-[#fef3e0] p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-[#f3a529] mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Feel free to reach out to us through any of the methods below.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-gray-800 font-medium">Phone:</h3>
                <p className="text-gray-600">+234 812 345 6789</p>
              </div>
              <div>
                <h3 className="text-gray-800 font-medium">Email:</h3>
                <p className="text-gray-600">support@opebridge.org</p>
              </div>
              <div>
                <h3 className="text-gray-800 font-medium">Address:</h3>
                <p className="text-gray-600">
                  123 Charity Lane, Bridge City, Lagos, Nigeria
                </p>
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="text-[#f3a529] hover:text-[#d98f22] transition"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 19h.01M16 19h.01M12 19v-6M5.21 13a2.4 2.4 0 01.5-2.22A9.96 9.96 0 0112 6c2.36 0 4.53.8 6.22 2.13a2.4 2.4 0 01.5 2.22m-3.56-1.63A5.53 5.53 0 0112 8.44a5.53 5.53 0 01-3.66 1.93m5.32 3.92h3.68M5.7 12.9H2m18-4.25l-3 3m0 0l3 3m-3-3h.01" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#f3a529] hover:text-[#d98f22] transition"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M3 3v18M3 21h18M21 21V3M9 15l6-6" />
                </svg>
              </a>
              <a
                href="#"
                className="text-[#f3a529] hover:text-[#d98f22] transition"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 00-12 0v12M12 12v4m4-4v4m0 0H8" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
