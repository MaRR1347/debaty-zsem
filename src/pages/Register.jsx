import { useState, React } from 'react'
import './register.scss'

import Background from '../components/background.jsx'
import Navbar from '../components/nav.jsx'
import Footer from '../components/footer.jsx'

export default function Register() {


  const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("slide-in-from-below", entry.isIntersecting);
    });
  };

  const observer = new IntersectionObserver(startAnimation);
  const options = { root: null, rootMargin: '0px', threshold: 1 };

  const elements = document.querySelectorAll('.slideable');
  elements.forEach(el => {
    observer.observe(el, options);
  });

  return (
    <>
      <Background />
      <Navbar />

      <main className='register-main'>
        <header>Rejestracja</header>

        <section>
          <p>Aby zarejestrować swoją drużynę, wejdź w poniższy link i wypełnij formularz zgłoszeniowy: </p>
          <a href="https://tiny.pl/7nc6ny1b" className='red-underline'>
            <img src="/debaty-zsem/icons/form.png" alt="formularz"/>
          </a>
          <p>Rejestracja trwa do 28.11.2025r.</p>
        </section>
      </main>

      <section className='footer'>
        <Footer />
      </section>
    </>
  )
}
