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
      <main>
        <main>
          <header>
            <p>Rejestracja</p>
          </header>
          <article>
            <p>Aby zarejestrować swoją drużynę, wejdź w poniższy link i wypełnij formularz zgłoszeniowy: </p>
            <a href="https://google.forms.com">
              <img src="/icons/form.png" alt="formularz" className="form-icon"/>
            </a>
          </article>
        </main>
      </main>

      <Footer />
    </>
  )
}
