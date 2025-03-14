import React, { forwardRef, useRef } from "react";

const Contact = forwardRef((props, ref) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${nameRef.current.value}\nEmail: ${emailRef.current.value}\nMessage: ${messageRef.current.value}`);
    // Reset form fields
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <section ref={ref} className="flex justify-center items-center flex-col mb-10 px-4">
      <h1 className="text-center text-5xl text-white font-bold mb-6">CONTACT US</h1>

      <form 
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-lg p-6 shadow-lg"
      >
        {/* Name Field */}
        <div className="mb-4">
          <label className="text-xl font-medium text-gray-700">Name</label>
          <input 
            ref={nameRef}
            className="w-full h-12 px-3 mt-1 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400 transition duration-200" 
            type="text" 
            placeholder="Enter your name"
            required
            aria-label="Enter your name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="text-xl font-medium text-gray-700">Email</label>
          <input 
            ref={emailRef}
            className="w-full h-12 px-3 mt-1 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400 transition duration-200" 
            type="email" 
            placeholder="Enter your email"
            required
            aria-label="Enter your email"
          />
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label className="text-xl font-medium text-gray-700">Message</label>
          <textarea 
            ref={messageRef}
            className="w-full h-32 px-3 mt-1 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 resize-none" 
            placeholder="Write your message here..."
            required
            aria-label="Write your message"
          />
        </div>

        {/* Submit Button */}
        <button 
          className="w-full bg-blue-500 text-white py-3 text-lg font-semibold rounded-md hover:bg-blue-600 transition duration-200"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </section>
  );
});

export default Contact;
