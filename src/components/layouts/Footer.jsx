export default function Footer() {
  return (
    <footer className="bg-[#46433f] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-sm">
            We are a nonprofit organization committed to making a positive
            impact in our community through sustainable projects and
            initiatives.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="/donate" className="hover:underline">
                Donate
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">123 Charity Lane, Kind City, Earth</p>
          <p className="text-sm">Email: contact@ngo.org</p>
          <p className="text-sm">Phone: +123 456 7890</p>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Stay updated with our latest news and events.
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-md text-gray-800"
            />
            <button
              type="submit"
              className="mt-2 bg-[#f3a529] text-white px-4 py-2 rounded-md hover:bg-[#6c6a66]"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} HopeBridge. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
