import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogImg from "../assets/MBBS-in-Vietnam-blog.png";
import Blog from "../assets/blog.png";
import MBBSVietnam from "../assets/MBBS-in-Vietnam-blog.png";
import EnquiryModal from "../components/EnquiryModal";

export default function BlogPage() {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const BASE_URL = import.meta.env.VITE_API_URL || "https://mbbs-vietnam.onrender.com";

  useEffect(() => {
    fetch(`${BASE_URL}/api/blogs`)
      .then((res) => res.json())
      .then((data) => {
        const validBlogs = Array.isArray(data) ? data.filter(blog => blog && blog.id && blog.title && blog.slug) : [];
        setBlogs(validBlogs);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  const tags = ["Admission Guide", "University Reviews", "Visa Tips", "Student Life", "NMC Updates", "Fee Structure"];

  const hasBlogs = blogs.length > 0;

  return (
    <>
      <Header />

      {/* Hero Image Section */}
      <section className="w-full overflow-hidden">
        <img
          src={MBBSVietnam}
          alt="Blog hero"
          className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen object-cover object-center"
        />
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-yellow-400/45 bg-yellow-400/12 text-yellow-700 text-[10px] sm:text-xs font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
            MBBS Vietnam · Knowledge Hub
          </div>

          {/* Heading */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-3 sm:mb-4">
            Insights, Guides &{" "}
            <span className="text-[#CC1B1B]">Expert Advice</span>
            <br className="hidden sm:block" />
            for MBBS Aspirants
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mb-5 sm:mb-6">
            Stay informed with the latest updates on MBBS admissions in Vietnam
            — university rankings, fee structures, visa tips, student experiences,
            and everything you need to make the right decision.
          </p>

          {/* Topic Pills */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-gray-200 bg-gray-50 text-gray-700 text-[10px] sm:text-xs font-medium hover:bg-gray-100 hover:border-gray-300 transition cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section - Show NOTHING when no blogs (no text, no cards, no empty space) */}
      {hasBlogs && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => navigate(`/blog/${blog.slug}`)}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300 cursor-pointer group"
              >
                <div className="h-48 sm:h-52 overflow-hidden">
                  <img
                    src={blog.image || BlogImg}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    onError={(e) => {
                      e.target.src = BlogImg;
                    }}
                  />
                </div>
                <div className="p-4 sm:p-5">
                  <h2 className="text-base sm:text-lg font-semibold text-[#1a2f5e] leading-snug group-hover:text-[#CC1B1B] transition line-clamp-2">
                    {blog.title}
                  </h2>
                  {blog.excerpt && (
                    <p className="text-gray-500 text-xs sm:text-sm mt-2 line-clamp-2">
                      {blog.excerpt}
                    </p>
                  )}
                  <button
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      navigate(`/blog/${blog.slug}`);
                    }}
                    className="mt-3 sm:mt-4 text-[#CC1B1B] text-sm sm:text-base font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* When loading - show nothing as well (no skeletons) */}
      {/* When no blogs - render absolutely nothing in the blog section */}

      {/* CTA Section */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-red-50">
        <div className="absolute -top-12 sm:-top-16 right-[-60px] sm:right-[-80px] w-48 sm:w-60 h-48 sm:h-60 rounded-full bg-yellow-400/10" />
        <div className="absolute -bottom-12 sm:-bottom-16 left-[-60px] sm:left-[-80px] w-56 sm:w-72 h-56 sm:h-72 rounded-full bg-red-500/5" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <span className="inline-block px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-amber-100 text-amber-700 text-[10px] sm:text-xs font-extrabold tracking-wider uppercase mb-3 sm:mb-4">
            📚 Featured Resources
          </span>

          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-800 mb-3 sm:mb-4">
            Master Your MBBS Journey
            <br />
            <span className="text-[#CC1B1B]">with Expert Insights</span>
          </h2>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-6 sm:mb-8">
            Join 2,000+ students receiving weekly tips on university selection,
            admission strategies, visa processes, and life in Vietnam. Get exclusive
            guides and success stories directly in your inbox.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-6">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="bg-[#CC1B1B] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base hover:bg-red-700 transition-all shadow-lg w-full sm:w-auto"
            >
              Get Free Counselling
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="bg-transparent text-[#CC1B1B] border-2 border-[#CC1B1B] px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base hover:bg-red-50 transition-all w-full sm:w-auto"
            >
              Talk to Our Experts
            </button>
          </div>

          <p className="text-gray-400 text-[11px] sm:text-xs font-semibold mt-4">
            ✓ No spam • ✓ Unsubscribe anytime • ✓ 100% confidential
          </p>
        </div>
      </section>

      <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Footer />
    </>
  );
}