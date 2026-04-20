"use client";

import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    // Replace with your FormSubmit endpoint
    const response = await fetch("https://formsubmit.co/ajax/your@email.com", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      setStatus("success");
      e.currentTarget.reset();
      setTimeout(() => setStatus("idle"), 3000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3">Let's Talk</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                Have a project in mind? I'd love to hear about it. Feel free to reach out.
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full shrink-0">
                  <FiMail className="text-blue-600 text-base sm:text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">Email</p>
                  <a href="mailto:versatilezeeshan1708@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm sm:text-base break-all">versatilezeeshan1708@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full shrink-0">
                  <FiPhone className="text-blue-600 text-base sm:text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">Phone</p>
                  <a href="tel:+923216850363" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 text-sm sm:text-base">+92 321-6850363</a>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full shrink-0">
                  <FiMapPin className="text-blue-600 text-base sm:text-xl" />
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base">Location</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Okara, Pakistan</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="lg:w-1/2 space-y-4 sm:space-y-6">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 sm:mb-2">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" required className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 text-sm sm:text-base" />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 sm:mb-2">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" required className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 text-sm sm:text-base" />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1 sm:mb-2">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Your message" required className="w-full px-3 sm:px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 text-sm sm:text-base" />
            </div>
            
            <button type="submit" disabled={status === "loading"} className="w-full px-6 sm:px-8 py-2.5 sm:py-3 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 text-sm sm:text-base">
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            
            {status === "success" && <p className="text-green-600 text-center text-sm">Message sent successfully!</p>}
            {status === "error" && <p className="text-red-600 text-center text-sm">Failed. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
}