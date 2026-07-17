import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../assets/medical_doctor.jpg";
import SEO from "../components/SEO";

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.01l-2.2 2.21z" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const SendIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

export default function ContactPage() {
  const [form, setForm] = useState({ fullName: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const BASE_URL = import.meta.env.VITE_API_URL || "https://mbbs-vietnam.onrender.com";

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) throw new Error("Email not sent");
      alert("Form submitted successfully!");
      setSubmitted(true);
      setForm({ fullName: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 4000);
    } catch (error) {
      console.error(error);
      alert("Failed to send email. Please try again.");
    }
  };

  return (
    
    <div className="min-h-screen bg-gray-50 flex flex-col font-['DM_Sans']">
      <SEO
  title="Contact Us | MBBS Vietnam Admission Enquiry | VietnamBBS"
  description="Contact VietnamBBS for MBBS admission enquiries in Vietnam. Call +91 90034 20057. Located in Chennai. Free counselling for Indian students."
  keywords="contact VietnamBBS, MBBS Vietnam enquiry, Vietnam MBBS counselling, MBBS admission contact Chennai"
  canonical="https://www.vietnambbs.com/contact"
  schema={{
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact VietnamBBS",
    "url": "https://www.vietnambbs.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "VietnamBBS",
      "telephone": "+91-90034-20057",
      "email": "admission@vietnambbs.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Old No: 36 G, New No: 1/36-3, North Parade Road, St Thomas Mount",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "postalCode": "600016",
        "addressCountry": "IN"
      },
      "openingHours": "Mo-Sa 09:00-18:00"
    }
  }}
/>
<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600;700&display=swap');
        .serif { font-family: 'Playfair Display', Georgia, serif; }
      `}</style>

      <Header />

      {/* Hero Section - Fully Responsive */}
      <section className="relative overflow-hidden min-h-[480px] md:min-h-[500px] flex items-center bg-white">
        {/* Red Background with Diagonal Cut */}
        <div className="absolute top-0 left-0 w-full md:w-[42%] h-full bg-gradient-to-br from-[#CC1B1B] via-[#CC1B1B] to-[#a01414] md:clip-diagonal" />
        
        {/* Pattern Overlay */}
        <div className="absolute top-0 left-0 w-full md:w-[42%] h-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:22px_22px] md:clip-diagonal" />

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl w-full mx-auto px-5 md:px-8 py-12 md:py-16">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/3 text-center lg:text-left">
              <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/35 bg-white/15 text-white text-[11px] font-bold tracking-wider uppercase">
                Contact Us
              </div>
              <h1 className="serif text-white text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
                Let's Start a{" "}
                <span className="text-[#F5C518] block">
                  Conversation
                </span>
              </h1>
              <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                Our expert counsellors are ready to guide you every step of the
                way — from course selection to visa approval.
              </p>
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 bg-[#F5C518] text-[#7a4f00] font-bold text-sm rounded-xl cursor-pointer hover:bg-[#e0b315] transition-all shadow-lg"
              >
                Enquire Now →
              </button>
            </div>

            {/* Contact Cards */}
            <div className="w-full lg:w-1/3 space-y-3">
              {[
                {
                  icon: "📞",
                  label: "Call Us",
                  value: "+91 90034 20057 | +91 72000 95846",
                  sub: "Mon – Sat, 9 AM – 6 PM",
                },
                {
                  icon: "✉️",
                  label: "Email Us",
                  value: "admission@vietnambbs.com",
                  sub: "We reply within 24 hours",
                },
                {
                  icon: "📍",
                  label: "Our Office",
                  value: "Old No: 36 G, New No: 1/36-3, North Parade Road, St Thomas Mount, Chennai - 600016",
                  sub: "India Headquarters",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-lg transition"
                >
                  <div className="w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#CC1B1B] uppercase tracking-wider mb-0.5">
                      {item.label}
                    </div>
                    <div className="text-sm font-bold text-gray-900 mb-0.5">
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-500">
                      {item.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Illustration - Hidden on mobile, visible on desktop */}
            <div className="hidden lg:block w-full lg:w-1/3">
              <img
                src={Contact}
                alt="Medical Advisor"
                className="w-full max-w-sm mx-auto object-cover rounded-3xl shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1 py-12 md:py-16 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Map Section */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 h-[300px] md:h-[400px] lg:h-full min-h-[350px]">
                <iframe
  title="Office Location"
  src="https://maps.google.com/maps?q=1/36-3,North+Parade+Road,St+Thomas+Mount,Chennai+600016&z=15&output=embed"
  className="w-full h-full border-0"
  loading="lazy"
></iframe>
              </div>
            </div>

            {/* Form Section */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 shadow-lg">
                <div className="w-11 h-1 bg-[#F5C518] rounded-full mb-5"></div>
                <h2 className="serif text-2xl md:text-3xl font-black text-gray-900 mb-2">
                  Send an Enquiry
                </h2>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Fill in the details below and we'll be in touch within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        className="w-full border-2 border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-900 focus:border-[#CC1B1B] focus:bg-white outline-none transition"
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        className="w-full border-2 border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-900 focus:border-[#CC1B1B] focus:bg-white outline-none transition"
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      className="w-full border-2 border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-900 focus:border-[#CC1B1B] focus:bg-white outline-none transition"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      className="w-full border-2 border-gray-200 bg-gray-50 rounded-xl px-4 py-3 text-sm text-gray-900 focus:border-[#CC1B1B] focus:bg-white outline-none transition resize-none"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your query..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#CC1B1B] text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#b01616] transition-all"
                  >
                    <SendIcon />
                    Submit
                  </button>

                  {submitted && (
                    <div className="bg-yellow-50 border-2 border-[#F5C518] rounded-xl p-3 text-center text-sm font-semibold text-gray-900">
                      ✓ Enquiry submitted! We'll be in touch soon.
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Add custom CSS for diagonal clip */}
      <style>{`
        .clip-diagonal {
          clip-path: polygon(0 0, 88% 0, 100% 100%, 0 100%);
        }
        @media (max-width: 768px) {
          .clip-diagonal {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
        }
      `}</style>
    </div>
  );
}