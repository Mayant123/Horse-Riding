import React from "react";

const Location = () => {
  return (
    <section className="mt-10 flex flex-col lg:flex-row">    
      <div className="w-full lg:w-1/2 p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Get in touch with us
        </h2>
        <p className="mb-6">Horse Equipment</p>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Location</label>
          <p>123 Main Street, City, Country</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Email</label>
          <p>info@example.com</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Phone</label>
          <p>+123 456 7890</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14017.813747378159!2d77.0999623!3d28.5561437!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b85fc2a2d89%3A0xbef376182c43ed9d!2sIndira%20Gandhi%20International%20Airport!5e0!3m2!1sen!2sin!4v1724567543423!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
