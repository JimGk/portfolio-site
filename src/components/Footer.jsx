// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-300 text-blue-900 font-body">
      <div className="container mx-auto px-4 py-6 max-w-screen-lg">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Dimitrios Gkogkos — Data Professional &amp; Analytics Engineer
        </p>

        <a
          href="mailto:dimitrios.gogos@proton.me"
          className="mt-2 inline-block text-sm underline hover:text-blue-700"
        >
          Contact Me
        </a>

        <p
          className="mt-2 text-sm lg:whitespace-nowrap"
        >
          Hosted on{" "}
          <a
            href="https://pages.github.com/"
            target="_blank"
            rel="noopener"
            className="underline hover:text-blue-700"
          >
            GitHub Pages
          </a>{" "}
          &middot; Made with React, Tailwind CSS &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
}