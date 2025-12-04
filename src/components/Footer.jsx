const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-6">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 p-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-white">
              Visit Us Today!
            </h2>
            <ul className="text-gray-400 font-medium text-xs">
              <li className="mb-4">
                <a href="#">MasterKey Initiatives.,</a>
              </li>
              <li className="mb-4">
                <a href="#">P.O. BOX 333 Maseno,</a>
              </li>
              <li className="mb-4">
                <a href="mailto:masterkeyinitiatives@gmail.com">
                  info@masterkeyinitiatives.org
                </a>
              </li>
              <li className="mb-4">
                <a href="tel:+254720943352" className="hover:underline">
                  Whatsapp Us on +254 720943352
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              Contact Us
            </h2>
            <ul className="text-gray-400 font-medium text-xs">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="tel:+254720943352" className="hover:underline">
                  Whatsapp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              External Links
            </h2>
            <ul className="text-gray-400 font-medium text-xs">
              <li className="mb-4">
                <a
                  href="https://maseno.ac.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Maseno University
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://mental360.or.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Mental 360
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://www.health.go.ke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Ministry of Health (MOH)
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://missiontogether.org.uk/calendar/together-in-kenya/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Mission Together
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase text-white">
              DISCLAIMER
            </h2>
            <ul className="text-gray-400 font-medium text-sm text-justify">
              <span>
                If you experienced any issues with our services with any of our
                staffs, kindly reach out to{" "}
                <a href="tel:+254720943352" className="underline">
                  +254720943352
                </a>
                . We will review it promptly.
              </span>
            </ul>
          </div>
        </div>
        <div className="p-4 bg-gray-800 flex items-center text-center">
          <span className="text-xs text-gray-300 text-center w-full">
            Copyright © 2025 MasterKey Initiatives™ | All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
