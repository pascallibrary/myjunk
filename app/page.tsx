'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import MatrixMirror from '../components/MatrixMirror';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <>
      <MatrixMirror />
      <Header />
      <motion.main
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: isLoaded ? 1 : 0, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        className="relative z-10 bg-black/90 text-white px-4 md:px-6 py-10 space-y-20 pb-32 min-h-screen"
      >
        <section id="home">
          <h2 className="text-3xl font-bold mb-4 animate-pulse">Home</h2>
          <p className="mb-6">Welcome to my portfolio!</p>
          <a
            href="https://github.com/pascallibrary"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-block"
          >
            View my GitHub
          </a>
        </section>

        <section id="about">
          <h2 className="text-3xl font-bold mb-4 animate-pulse">About Me</h2>
          <p className="leading-relaxed mb-4">
            My name is Okereke Pascal Chinedu and I&rsquo;m a Software Engineer with proven expertise in building scalable
            client-side and server-side applications using React, TailwindCSS, TypeScript, Next.js, Node.js, and Python. I have
            experience in implementing intuitive user interfaces, designing RESTful APIs, managing databases, and integrating
            third-party services to deliver robust and high-performance systems. I&rsquo;m passionate about automation, system
            optimization, and continuous learning in modern frontend and backend technologies.
          </p>
          <p className="leading-relaxed">
            <strong>Hobbies:</strong> Playing snooker, chess, reading, and writing books.
          </p>
        </section>

        <section id="contact">
          <h2 className="text-3xl font-bold mb-4 animate-pulse">Contact</h2>
          <p>
            You can reach me at:{' '}
            <a className="text-blue-400 underline" href="mailto:chineduraymond33@gmail.com">
              chineduraymond33@gmail.com
            </a>
          </p>
        </section>
      </motion.main>
      <Footer />
    </>
  );
}
