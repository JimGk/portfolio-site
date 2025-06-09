// src/sections/Badges.jsx
import React from 'react';
import badge1 from '../assets/badges/badge1.png';
import badge2 from '../assets/badges/badge2.png';
import badge3 from '../assets/badges/badge3.png';
// import more badges as needed...

export default function Badges() {
  const badges = [badge1, badge2, badge3 /*, ... */];

  return (
    <section
      id="badges"
      className="section flex flex-col items-center justify-center bg-gray-800 text-white"
    >
      <h2 className="text-5xl font-heading mb-12">Certifications & Badges</h2>
      <div className="flex flex-wrap justify-center gap-16">
        {badges.map((src, i) => (
          <div key={i} className="w-48 h-48 p-4 bg-gray-900 rounded-xl shadow-lg flex items-center justify-center">
            <img src={src} alt={`Badge ${i+1}`} className="max-w-full max-h-full" />
          </div>
        ))}
      </div>
    </section>
  );
}