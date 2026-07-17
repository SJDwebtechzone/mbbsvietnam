import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnquiryModal from "../components/EnquiryModal";

export default function NewUniversity() {
  const { slug } = useParams();
  const [university, setUniversity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/api/universities/slug/${slug}`)
      .then(res => res.json())
      .then(data => { setUniversity(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, [slug]);

  if (loading) return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-[#CC1B1B] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
      <Footer />
    </>
  );

  if (!university || university.error) return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">University Not Found</h2>
          <p className="text-gray-500">The university you are looking for does not exist.</p>
        </div>
      </div>
      <Footer />
    </>
  );

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">

        {/* Hero */}
        <section className="relative h-[500px] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={university.image || "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200"}
              alt={university.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                NMC Recognised
              </span>
              {university.location && (
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full border border-white/30">
                  📍 {university.location}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2 leading-tight">
              {university.name}
            </h1>
            {university.location && (
              <p className="text-white/80 text-lg">{university.location}, Vietnam</p>
            )}
            <div className="flex gap-4 mt-6 flex-wrap">
              <button onClick={() => setIsModalOpen(true)}
                className="bg-[#CC1B1B] text-white px-8 py-3 rounded-xl font-bold hover:bg-red-800 transition">
                Apply Now
              </button>
              <button onClick={() => setIsModalOpen(true)}
                className="bg-white/20 text-white px-8 py-3 rounded-xl font-bold border border-white/30 hover:bg-white/30 transition">
                Get Free Counseling
              </button>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-white py-8 border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Duration", value: university.duration || "6 Years" },
              { label: "Fee", value: university.fee || "Contact Us" },
              { label: "Location", value: university.location || "Vietnam" },
              { label: "Medium", value: "English" },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-extrabold text-[#CC1B1B]">{stat.value}</div>
                <div className="text-gray-500 text-sm font-semibold mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        {university.description && (
          <section className="py-16 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-extrabold text-[#CC1B1B] mb-6">About {university.name}</h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-4xl">{university.description}</p>
            </div>
          </section>
        )}

        {/* Highlights */}
        {university.highlights && university.highlights.length > 0 && (
          <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-extrabold text-[#CC1B1B] mb-10 text-center">
                Why Choose {university.short_name || university.name}?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {university.highlights.map((item, i) => {
                  const text = typeof item === "object" && item !== null ? item.text : item;
                  const icon = typeof item === "object" && item !== null ? item.icon : null;
                  return (
                    <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition">
                      <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-4 text-lg">
                        {icon ? <span>{icon}</span> : <span className="text-[#CC1B1B] font-extrabold">{i + 1}</span>}
                      </div>
                      <p className="text-gray-700 font-medium">{text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Admission Requirements */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
            <div className="bg-[#CC1B1B] px-8 py-10 text-white">
              <h2 className="text-3xl font-bold mb-2">Admission Requirements</h2>
              <p className="opacity-80">Simple and transparent process for international applicants.</p>
            </div>
            <div className="p-8 space-y-8">
              {[
                { title: "Academic Record", heading: "12th Grade Certificate", desc: "Minimum 50% aggregate in Physics, Chemistry, and Biology." },
                { title: "Entrance Exam", heading: "NEET Qualification", desc: "Valid NEET score mandatory for Indian applicants." },
                { title: "Language", heading: "English Proficiency", desc: "No IELTS/TOEFL required if schooling was in English medium." },
                { title: "Age", heading: "Minimum 17 Years", desc: "Applicant must be at least 17 years of age." },
              ].map((item) => (
                <div key={item.title} className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/3">
                    <h3 className="text-lg font-bold text-[#CC1B1B] mb-2">{item.title}</h3>
                    <div className="h-1 w-10 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div className="md:w-2/3">
                    <h4 className="font-bold mb-1">{item.heading}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-gradient-to-r from-red-50 to-yellow-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold text-[#CC1B1B] mb-4">
              Ready to Join {university.name}?
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Get expert guidance on admission, visa, and everything you need.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <button onClick={() => setIsModalOpen(true)}
                className="bg-[#CC1B1B] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-800 transition shadow-lg">
                Apply Now
              </button>
              <button onClick={() => setIsModalOpen(true)}
                className="border-2 border-[#CC1B1B] text-[#CC1B1B] px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-50 transition">
                Get Free Counselling
              </button>
            </div>
          </div>
        </section>

      </div>
      <Footer />
      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}