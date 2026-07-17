import { Link } from 'react-router-dom'
import Header from '../components/Header'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import React, { useState } from 'react';

import UniversityCard from '../components/UniversityCard' 
import Footer from '../components/Footer'

const facts = [
  { label: 'Duration',    value: '5.5 Years',      color: '' },
  { label: 'Medium',      value: 'English',        color: 'text-yellow-600' },
  { label: 'Eligibility', value: 'NEET + 12th PCB', color: '' },
  { label: 'Recognition', value: 'WHO / NMC',      color: 'text-[#CC1B1B]' },
  { label: 'Intake',      value: 'Sep & Feb',      color: '' },
  { label: 'Total Fees',  value: '₹15–25 Lakh',    color: 'text-[#CC1B1B]' },
]

const stats = [
  { num: '500+', label: 'Students placed' },
  { num: '6',    label: 'Top universities' },
  { num: '₹15L', label: 'Avg. total cost' },
  { num: '98%',  label: 'Visa success' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* Hero Carousel */}
      <section className="relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          className="w-full h-[600px]"
        >
          {/* Slide 1 */}
         <SwiperSlide>
  <div className="relative w-full h-full">
    <img
      src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1600&q=80"
      alt="Vietnam cityscape"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="max-w-3xl text-center px-6">
        {/* Caption */}
    <h1 className="font-serif text-5xl font-extrabold text-white leading-tight mb-4">
  Dreaming of MBBS? <br />
  <span className="text-[#CC1B1B]">Vietnam Makes It Possible!</span>
</h1>
<p className="text-white text-lg mb-6">
  Direct admission for Indian students after 12th. No donation, no IELTS — just your NEET score.
</p>

        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="px-7 py-3.5 bg-[#CC1B1B] text-white font-bold rounded-xl hover:bg-[#b01616] transition text-sm"
          >
            Apply Now →
          </Link>
          <Link
            to="/brochure"
            className="px-7 py-3.5 bg-[#F5C518] text-yellow-900 font-bold rounded-xl hover:bg-yellow-400 transition text-sm"
          >
            Download Brochure
          </Link>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
  <div className="relative w-full h-full">
    <img
      src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1600&q=80"
      alt="Vietnam cityscape"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-white/30" />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="max-w-3xl text-center px-6">
        {/* Caption */}
        <h1 className="font-serif text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Dreaming of MBBS? <br />
          <span className="text-[#CC1B1B]">Vietnam Makes It Possible!</span>
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Direct admission for Indian students after 12th. No donation, no IELTS — just your NEET score.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/contact"
            className="px-7 py-3.5 bg-[#CC1B1B] text-white font-bold rounded-xl hover:bg-[#b01616] transition text-sm"
          >
            Apply Now →
          </Link>
          <Link
            to="/brochure"
            className="px-7 py-3.5 bg-[#F5C518] text-yellow-900 font-bold rounded-xl hover:bg-yellow-400 transition text-sm"
          >
            Download Brochure
          </Link>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="relative w-full h-full">
              <img
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=1600&q=80"
                alt="University campus"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-white/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-8 bg-white/90 rounded-2xl p-6 shadow-xl">
                  {stats.map((s, i) => (
                    <div key={i} className="text-center">
                      <div className="font-serif text-3xl font-bold text-[#CC1B1B]">{s.num}</div>
                      <div className="text-sm text-gray-600">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

<section className="mt-16 px-6">
  {/* Section Title */}
  <h1 className="text-3xl md:text-4xl font-bold text-center text-[#CC1B1B] mb-10">
    Top Medical Universities in Vietnam
  </h1>

      {/* University card below the banner */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
  <UniversityCard
    university={{
      name: "Can Tho University",
      shortName: "CTUMP",
      fee: "₹4 Lakhs/Year",
       image: "/Dai-Nam-University-Faculty-of-Medicine-Vietnam.webp",
      highlights: [
        { icon: "🎓", text: "43-Year-Old University" },
        { icon: "✅", text: "NMC-Recognised for Indian Students" },
        { icon: "📘", text: "Indian Curriculum" },
        { icon: "🩺", text: "Early Clinical Exposure from 1st Year" },
        { icon: "🏨", text: "Luxurious Hostel with Indian Food" },
      ],
    }}
  />

  <UniversityCard
    university={{
      name: "Hanoi Medical University",
      shortName: "HMU",
      fee: "₹5 Lakhs/Year",
      image: "/Dai-Nam-University-Faculty-of-Medicine-Vietnam.webp",
      highlights: [
        { icon: "🏥", text: "Top-ranked in Vietnam" },
        { icon: "🌏", text: "International student programs" },
        { icon: "📘", text: "Strong research curriculum" },
        { icon: "🧪", text: "Modern labs and facilities" },
      ],
    }}
  />
</div>
</section>


<Footer />
      </section>
    </div>
  )
}






