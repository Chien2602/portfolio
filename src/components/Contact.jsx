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
    <div className="flex items-center flex-col justify-center rounded-3xl h-auto py-10 bg-gray-900 px-4 mx-2">
      <h2 className="text-5xl sm:text-5xl font-bold text-white text-center mb-6">
          Contact Me
        </h2>
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-lg shadow-lg">

        {isSent && (
          <p className="text-green-400 text-center mb-4">
            ✅ Email sent successfully!
          </p>
        )}

        <form onSubmit={sendEmail} className="flex flex-col">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="p-3 mb-4 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="p-3 mb-4 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="p-3 mb-4 rounded-md bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
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
