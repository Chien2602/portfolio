function Contact() {
    return (
      <div className="flex justify-center items-center flex-col mb-10 px-4">
        <h1 className="text-center text-5xl text-white font-bold mb-6">CONTACT US</h1>
        
        <form className="w-full max-w-xl bg-white rounded-lg p-6 shadow-lg">
          {/* Name Field */}
          <div className="mb-4">
            <label className="text-xl font-medium text-gray-700">Name</label>
            <input 
              className="w-full h-12 px-3 mt-1 border border-blue-500 rounded-md outline-none focus:ring-2 focus:ring-blue-400 transition duration-200" 
              type="text" 
              placeholder="Enter your name"
            />
          </div>
  
          {/* Email Field */}
          <div className="mb-4">
            <label className="text-xl font-medium text-gray-700">Email</label>
            <input 
              className="w-full h-12 px-3 mt-1 border border-blue-500 rounded-md outline-none focus:ring-2 focus:ring-blue-400 transition duration-200" 
              type="email" 
              placeholder="Enter your email"
            />
          </div>
  
          {/* Message Field */}
          <div className="mb-4">
            <label className="text-xl font-medium text-gray-700">Message</label>
            <textarea 
              className="w-full h-32 px-3 mt-1 border border-blue-500 rounded-md outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 resize-none" 
              placeholder="Write your message here..."
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
      </div>
    );
  }
  
  export default Contact;
  