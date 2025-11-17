import { useState, React } from 'react'
import './App.scss'

import Navbar from './components/nav.jsx'
import Footer from './components/footer.jsx'
import SpinningLogo from './components/spinning-logo.jsx'
import Background from './components/background.jsx'


function App() {
  const quotes = [
    ["~Antoine de Saint-Exupéry",
      "Prawdziwa rozmowa polega na słuchaniu i zrozumieniu, nie na wygrywaniu."],
    ["~John F. Kennedy",
      "Chociaż nie możemy zmienić przeszłości, możemy zmienić sposób, w jaki będziemy ze sobą rozmawiać w przyszłości."],
    ["~Martin Luther King Jr.",
      "Ci, którzy odrzucają przemoc, muszą pozostać otwarci na dialog. W przeciwnym razie nie będzie sposobu na zrozumienie siebie nawzajem."],
    ["~Mahatma Gandhi",
      "Jeśli milczymy, nie rozwiązujemy żadnych problemów; rozwiązanie w każdej sytuacji jest w rozmowie."],
    ["~Eleanor Roosevelt",
      "Wielkie rzeczy są osiągane przez współpracę, rozmowy, a nie przez indywidualne działania."],
    ["~Margaret Thatcher",
      "Rozmowa jest jedną z najważniejszych dróg do osiągnięcia porozumienia w trudnych sytuacjach."],
    ["~Nelson Mandela",
      "Rozmowa jest najpotężniejszym narzędziem, jakie mamy do rozwiązywania problemów i budowania porozumienia."],
    ["Desmond Tutu",
      "Jeśli nie rozmawiamy, nie budujemy mostów. Jeśli nie budujemy mostów, pogłębiamy przepaść."]
  ]
  let r = Math.floor(Math.random() * quotes.length);

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
        <header className='app-header'>
          <p className='oswald-font'>DEBATY</p>
          <div className='logo'>
            <SpinningLogo />
          </div>
        </header>

        <aside className='app-aside slideable'>
          {/* <p className='quote'>Masz&nbsp;<em className='slideable'>zdanie?</em> Pokaż&nbsp;je&nbsp;w&nbsp;<em className='slideable'>debacie!</em></p> */}
          <p className='quote'>{quotes[r][1]}</p>
          <p className='quote-author'>{quotes[r][0]}</p>
        </aside>

        <article className='app-article slideable'>
          <section className='app-article-background' draggable="true" />
          <section className='app-article-container'>
            <img src="/icons/speaker.png" />
            <p> Debaty Elektryka to organizowane od wielu lat wydarzenie, w którym przedstawiciele klas mierzą się w dyskusjach na wybrane tematy. To nie tylko forma rywalizacji, ale przede wszystkim okazja do rozwijania umiejętności argumentacji, logicznego myślenia i pracy zespołowej.</p>
          </section>
        </article>

        <section className='app-learn-more slideable'>
          <section>
            <p>Dowiedz się więcej </p>
            {/* <span>
              <img src="/background/arrow.svg" />
            </span> */}
          </section>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App
