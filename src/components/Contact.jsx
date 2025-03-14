import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .send(
        "service_427c0ak", // Thay bằng Service ID
        "template_kvi4r95", // Thay bằng Template ID
        form,
        "Kq3mOk1ek9S0Y4Tdk" // Thay bằng Public Key
      )
      .then(() => {
        setIsSent(true);
        setForm({ name: "", email: "", message: "" }); // Reset form
      })
      .catch((error) => console.error("Email send error:", error));
  };

  return (
    <div className="flex justify-center mx-25 rounded-3xl items-center h-screen bg-gray-900">
      <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-5xl font-bold text-white text-center mb-6">Contact Me</h2>

        {isSent && <p className="text-green-400 text-center">✅ Email sent successfully!</p>}

        <form onSubmit={sendEmail} className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 mb-3 rounded-md bg-gray-700 text-white"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 mb-3 rounded-md bg-gray-700 text-white"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="p-3 mb-3 rounded-md bg-gray-700 text-white"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-bold transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
