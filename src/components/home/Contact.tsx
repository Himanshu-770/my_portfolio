"use client";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert("Please fill all fields.");
      return;
    }

    setLoading(true);
    console.log({
      service: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      template: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    });
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: name,
          from_email: email,
          subject,
          message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section
      id="contact"
      className={`py-24 ${darkMode ? "bg-[#080B12]" : "bg-[#F8FAFC]"}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-20 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2
            className={`mt-4 font-heading text-4xl font-bold md:text-5xl ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Get In Touch
          </h2>

          <p
            className={`mx-auto mt-6 max-w-2xl ${
              darkMode ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Have a project in mind or want to collaborate? Feel free to send me
            a message. I'm always open to discussing new opportunities.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact Form */}
          <div
            className={`rounded-3xl border p-8 ${
              darkMode
                ? "border-slate-800 bg-slate-900/40"
                : "border-slate-300 bg-white"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  className={`mb-2 block text-sm ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition-all duration-300 focus:border-cyan-400 ${
                    darkMode
                      ? "border-slate-700 bg-[#080B12] text-white"
                      : "border-slate-300 bg-white text-slate-900"
                  }`}
                />
              </div>

              <div>
                <label
                  className={`mb-2 block text-sm ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition-all duration-300 focus:border-cyan-400 ${
                    darkMode
                      ? "border-slate-700 bg-[#080B12] text-white"
                      : "border-slate-300 bg-white text-slate-900"
                  }`}
                />
              </div>

              <div>
                <label
                  className={`mb-2 block text-sm ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Subject
                </label>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className={`w-full rounded-xl border px-4 py-3 outline-none transition-all duration-300 focus:border-cyan-400 ${
                    darkMode
                      ? "border-slate-700 bg-[#080B12] text-white"
                      : "border-slate-300 bg-white text-slate-900"
                  }`}
                />
              </div>

              <div>
                <label
                  className={`mb-2 block text-sm ${
                    darkMode ? "text-slate-300" : "text-slate-700"
                  }`}
                >
                  Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className={`w-full resize-none rounded-xl border px-4 py-3 outline-none transition-all duration-300 focus:border-cyan-400 ${
                    darkMode
                      ? "border-slate-700 bg-[#080B12] text-white"
                      : "border-slate-300 bg-white text-slate-900"
                  }`}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className={`rounded-3xl border p-8 ${
              darkMode
                ? "border-slate-800 bg-slate-900/40"
                : "border-slate-300 bg-white"
            }`}
          >
            <div>
              <h3
                className={`text-2xl font-heading font-bold ${
                  darkMode ? "text-white" : "text-slate-900"
                }`}
              >
                Contact Information
              </h3>

              <p
                className={`mt-3 ${
                  darkMode ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Prefer reaching out directly? Here are my contact details and
                professional profiles.
              </p>
              <div className="mt-8 space-y-5">
                {/* Email */}
                <div
                  className={`flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:border-cyan-400 ${
                    darkMode
                      ? "border-slate-800 bg-[#080B12]"
                      : "border-slate-300 bg-slate-50"
                  }`}
                >
                  <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                    <Mail size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <a
                      href="mailto:himanshusrivastava211006@gmail.com"
                      className="font-medium text-white hover:text-cyan-400"
                    >
                      himanshusrivastava211006@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div
                  className={`flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:border-cyan-400 ${
                    darkMode
                      ? "border-slate-800 bg-[#080B12]"
                      : "border-slate-300 bg-slate-50"
                  }`}
                >
                  <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">Location</p>
                    <p className="font-medium text-white">
                      Ghaziabad, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                {/* GitHub */}
                <div
                  className={`flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:border-cyan-400 ${
                    darkMode
                      ? "border-slate-800 bg-[#080B12]"
                      : "border-slate-300 bg-slate-50"
                  }`}
                >
                  <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                    <SiGithub size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">GitHub</p>

                    <a
                      href="https://github.com/Himanshu-770"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white hover:text-cyan-400"
                    >
                      github.com/Himanshu-770
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div
                  className={`flex items-center gap-4 rounded-2xl border p-4 transition-all duration-300 hover:border-cyan-400 ${
                    darkMode
                      ? "border-slate-800 bg-[#080B12]"
                      : "border-slate-300 bg-slate-50"
                  }`}
                >
                  <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                    <FaLinkedin size={22} />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">LinkedIn</p>

                    <a
                      href="https://www.linkedin.com/in/himanshusrivastava770"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white hover:text-cyan-400"
                    >
                      linkedin.com/in/himanshusrivastava770
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
