import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
      <form className="max-w-md mx-auto">
        <input className="w-full p-2 mb-4 border" type="text" placeholder="Your Name" />
        <input className="w-full p-2 mb-4 border" type="email" placeholder="Your Email" />
        <textarea className="w-full p-2 mb-4 border" placeholder="Your Message" rows="5"></textarea>
        <button className="bg-blue-500 text-white py-2 px-4 w-full">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
