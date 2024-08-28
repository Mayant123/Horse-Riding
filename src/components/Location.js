import React from "react";

const Location = () => {
  return (
    <section className="mt-10 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 p-6">
        <h2 className="text-[2.75rem] leading-[3rem] font-bold text-gray-800 mb-4">
          Get in touch with us
        </h2>
        <p className="mb-6">
          Our mission is to enhance the equestrian experience through
          exceptional products, unparalleled customer service, and a passion for
          excellence.
        </p>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Location</label>
          <p>
            P.O. Box 1519, Post code 122, AL Mabela Muscat, Sultanate of Oman
          </p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Email</label>
          <p>contact@thktrade.com</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Phone</label>
          <p>+968 7909 8800 (Oman)</p>
          <p>+91 9760 66 44 22 (India)</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3655.5013650600267!2d58.107192975331955!3d23.622209478758137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDM3JzIwLjAiTiA1OMKwMDYnMzUuMiJF!5e0!3m2!1sen!2sin!4v1724674069556!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ borderRadius: "10px" }}
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;
