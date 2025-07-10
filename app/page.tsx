import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
      <>
        <Header />
        <main className='bg-black text-white px-4 md:px-6 py-10 space-y-20 pb-32'>
          <section id='home'>
             <h2 className='text-2xl font-bold mb-4'>
                Home 
             </h2>
             <p className='mb-6'>
               Welcome to my portfolio!</p>
             <a 
             href="https://github.com/pascallibrary"
             target='_blank'
             rel='noopener noreferrer'
             className='bg-gray-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
              View my GitHub
              </a>
          </section>


        <section id="about">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="leading-relaxed">
            My name is Okereke Pascal Chinedu and I&rsquo;m a Software Engineer with proven expertise in building scalable client-side and server-side applications using React, TailwindCSS, TypeScript, Next.js, Node.js, and Python. I have experience in implementing intuitive user interfaces, designing RESTful APIs, managing databases, and integrating third-party services to deliver robust and high-performance systems. I&rsquo;m passionate about automation, system optimization, and continuous learning in modern frontend and backend technologies.
          </p>
        </section>

          <section id='contact'>
              <h2 className='text-2xl font-bold mb-4'>
                Contact 
              </h2>
              <p>
                You can reach me at: <a className='text-blue-400' href='mailto:chineduraymond33@gmail.com'>chineduraymond33@gmail.com</a>
              </p>
          </section>
        </main>
        <Footer />
      </>
  )
}