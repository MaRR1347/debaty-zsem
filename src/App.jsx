import { useState, React } from 'react'
import './App.scss'

import Navbar from './components/nav.jsx'
import Footer from './components/footer.jsx'
import SpinningLogo from './components/spinning-logo.jsx'
import Background from './components/background.jsx'


function App() {

  // const startAnimation = (entries, observer) => {
  //   entries.forEach(entry => {
  //     entry.target.classList.toggle("slide-in-from-below", entry.isIntersecting);
  //   });
  // };

  // const observer = new IntersectionObserver(startAnimation);
  // const options = { root: null, rootMargin: '0px', threshold: 1 };

  // const elements = document.querySelectorAll('.slideable');
  // elements.forEach(el => {
  //   observer.observe(el, options);
  // });

  return (
    <div>
      <Background />
      <Navbar />

      <main>
        <header>
          <p className='slideable oswald-font font-700'>DEBATY</p>
          <div className="logo">
            <SpinningLogo />
          </div>
        </header>

        <aside>
          <p> Debaty Elektryka to organizowane od wielu lat wydarzenie, w którym przedstawiciele klas mierzą się w dyskusjach na wybrane tematy. To nie tylko forma rywalizacji, ale przede wszystkim okazja do rozwijania umiejętności argumentacji, logicznego myślenia i pracy zespołowej.</p>
        </aside>
      </main>

      <Footer />
    </div>
  )
}

export default App
