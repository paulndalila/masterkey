const ContactUs = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 lg:px-32">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Partner With Us
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          <strong>
            Join Us in Empowering Kenya’s Youth through Mentorship
          </strong>
          <br />
          Masterkey Mentorship Society is dedicated to equipping young people
          with guidance, hope, and opportunities in the face of unemployment,
          corruption, and other societal challenges. Inspired by{" "}
          <span className="italic">Malachi 4:6</span>, we aim to bridge the gap
          between generations and safeguard our nation's future.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Mentorship Commitment</h3>
          <p className="text-gray-600">
            Dedicate time to guide young people in schools, religious spaces, or
            your community to inspire positive change.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Partnerships</h3>
          <p className="text-gray-600">
            Collaborate with us to strengthen programs, host events, and
            increase collective impact.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Technical Support</h3>
          <p className="text-gray-600">
            Offer expertise in leadership, technology, entrepreneurship, and
            community development.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Financial Support</h3>
          <p className="text-gray-600">
            Help us organize impactful sessions, create resources, and reach
            more youth.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-3">Spread the Word</h3>
          <p className="text-gray-600">
            Share our mission with friends, colleagues, and peers to grow this
            transformative movement.
          </p>
        </div>
      </div>

      {/* Closing Statement */}
      <div className="mt-16 text-center max-w-4xl mx-auto">
        <p className="text-xl font-medium text-gray-800 mb-6">
          This is more than a program—it’s a movement to transform Kenya’s
          future.
        </p>
        <p className="text-gray-600 mb-8">
          Together, we can heed the message of Malachi 4:6, turn hearts toward
          hope and purpose, and protect our nation from the dangers of inaction.
        </p>
        <a
          href="mailto:masterkeyinitiatives@gmail.com"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
        <p className="mt-4 text-gray-600">
          Email: masterkeyinitiatives@gmail.com |
          masterkeymentorshipsociety@gmail.com
          <br />
          WhatsApp:{" "}
          <a
            href="https://wa.me/254720943352"
            className="text-blue-600 hover:underline"
          >
            +254 720 943 352
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
