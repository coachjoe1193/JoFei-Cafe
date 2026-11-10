import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, Coffee, MapPin, Clock3, Menu, X, Sparkles, Heart } from 'lucide-react';
import './styles.css';

function FoodArt({ type = 'kopi', className = '' }) {
  return <svg className={className} viewBox="0 0 480 370" role="img" aria-label={type === 'kopi' ? 'Illustration of a cup of kopi' : type === 'toast' ? 'Illustration of kaya toast and soft-boiled eggs' : 'Illustration of a bowl of laksa'}>
    <defs><linearGradient id={`cup-${type}`} x2="1" y2="1"><stop stopColor="#fffaf0"/><stop offset="1" stopColor="#e1d9cc"/></linearGradient></defs>
    {type === 'kopi' ? <>
      <ellipse cx="237" cy="300" rx="149" ry="28" fill="#67519b" opacity=".12"/>
      <ellipse cx="233" cy="280" rx="141" ry="33" fill="#f9f4e8" stroke="#d2c7bc" strokeWidth="3"/>
      <path d="M331 148h21c64 0 58 96-5 99h-24" fill="none" stroke="#e5ddcf" strokeWidth="23"/>
      <path d="M130 142h205l-18 102c-10 55-155 55-168 0z" fill={`url(#cup-${type})`} stroke="#cfc4ba" strokeWidth="2"/>
      <ellipse cx="232" cy="145" rx="103" ry="31" fill="#fffaf0" stroke="#d6cbbf" strokeWidth="3"/>
      <ellipse cx="232" cy="148" rx="91" ry="24" fill="#684332"/>
      <ellipse cx="228" cy="144" rx="77" ry="15" fill="#8c6044"/>
      <path d="M174 156q51-28 107-4" fill="none" stroke="#bc9267" strokeWidth="3" opacity=".6"/>
      <path d="M197 102c-30-25 26-30 2-58m43 55c-25-30 25-32 2-65m38 66c-20-22 20-28 2-47" fill="none" stroke="#fffaf0" strokeWidth="7" strokeLinecap="round"/>
      <text x="230" y="224" textAnchor="middle" fontSize="25" fontFamily="Georgia" fill="#6a548d">JoFei</text>
      <path d="M347 300l55-64" stroke="#b2adc4" strokeWidth="8" strokeLinecap="round"/><ellipse cx="406" cy="232" rx="10" ry="20" transform="rotate(40 406 232)" fill="#c5c1d5"/>
    </> : type === 'toast' ? <>
      <ellipse cx="240" cy="290" rx="176" ry="37" fill="#67519b" opacity=".12"/>
      <ellipse cx="240" cy="245" rx="180" ry="80" fill="#fffaf0" stroke="#d8cfca" strokeWidth="3"/>
      <path d="M104 217l137-86 120 71-139 87z" fill="#bd773a" stroke="#805334" strokeWidth="4"/>
      <path d="M108 199l135-85 119 71-139 88z" fill="#e4ac65" stroke="#bd773a" strokeWidth="8"/>
      <path d="M121 207l126-78m-96 96l126-78m-97 95l126-78m-97 96l126-78M144 176l116 70m-86-91l117 70m-86-90l117 70" stroke="#b9783f" strokeWidth="3" opacity=".7"/>
      <path d="M111 215l111 66 135-84" fill="none" stroke="#b9bd70" strokeWidth="7"/>
      <ellipse cx="338" cy="276" rx="55" ry="35" fill="#e8ddd0"/><ellipse cx="338" cy="268" rx="49" ry="31" fill="#fffaf0"/><ellipse cx="333" cy="267" rx="23" ry="19" fill="#f1ba53"/>
    </> : <>
      <ellipse cx="240" cy="299" rx="155" ry="29" fill="#67519b" opacity=".12"/>
      <path d="M90 183h300c-8 149-280 151-300 0" fill="#eee6db" stroke="#d2c7bc" strokeWidth="3"/>
      <ellipse cx="240" cy="182" rx="151" ry="71" fill="#fffaf0" stroke="#d2c7bc" strokeWidth="3"/>
      <ellipse cx="240" cy="184" rx="135" ry="57" fill="#d58a4d"/>
      <g fill="none" stroke="#f5d49c" strokeWidth="5"><path d="M144 175q90-60 175 9t-141 17 117-43"/><path d="M148 194q120 56 179-23M177 150q-55 70 112 61"/></g>
      <g fill="#f4d7a2" stroke="#bd955e" strokeWidth="2"><path d="M279 148l34 7-5 31-35-8z"/><path d="M176 164l34-8 8 30-34 9z"/></g>
      <g fill="#65855c"><ellipse cx="231" cy="145" rx="9" ry="23" transform="rotate(55 231 145)"/><ellipse cx="249" cy="149" rx="9" ry="24" transform="rotate(-45 249 149)"/><ellipse cx="228" cy="202" rx="7" ry="19" transform="rotate(65 228 202)"/></g>
      <path d="M338 137l70-72m-55 80l70-72" stroke="#745345" strokeWidth="7" strokeLinecap="round"/>
      <path d="M139 230q98 59 203 0" fill="none" stroke="#67519b" strokeWidth="4"/>
    </>}
  </svg>;
}

const dishes = [
  { type: 'kopi', number: '01', label: 'THE DAILY RITUAL', name: 'Signature Kopi', price: '3.50', description: 'Bold local coffee, a little condensed milk, and a very good reason to take five.', note: 'Your afternoon pick-me-up' },
  { type: 'toast', number: '02', label: 'BETTER TOGETHER', name: 'Kaya Toast Set', price: '6.50', description: 'Golden toast, coconut kaya, soft-boiled eggs, and a cup of kopi. The classic company.', note: 'A little sweet, a little nostalgic' },
  { type: 'laksa', number: '03', label: 'A BOWL OF COMFORT', name: "Uncle Joe’s Plant based Laksa", price: '8.90', description: 'A plant-based take on a local favourite. Rice noodles, fragrant coconut broth, and a gentle chilli kick.', note: 'Come hungry, leave happy' },
];

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMenu = () => setMobileOpen(false);
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="shell flex items-center justify-between">
        <a href="#" className="brand" aria-label="JoFei Cafe home"><Coffee size={28} strokeWidth={1.7}/> JoFei <span>Cafe</span></a>
        <nav className="desktop-nav flex items-center gap-9" aria-label="Main navigation">
          <a href="#about">Our little story</a><a href="#menu">The good stuff</a><a href="#contact" className="nav-visit">Come say hello <ArrowUpRight size={17}/></a>
        </nav>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-expanded={mobileOpen} aria-controls="mobile-nav" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}>{mobileOpen ? <X/> : <Menu/>}</button>
      </div>
      {mobileOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation"><a href="#about" onClick={closeMenu}>Our little story</a><a href="#menu" onClick={closeMenu}>The good stuff</a><a href="#contact" onClick={closeMenu}>Come say hello ↗</a></nav>}
    </header>
    <main id="main">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span className="tiny-star">✳</span> JOFEI CAFE / YOUR LITTLE NEIGHBOURHOOD ESCAPE</p>
          <h1 id="hero-title">Good kopi.<br/>Great company.<br/><span>Just around<br className="desktop-break"/> the corner.</span></h1>
          <p className="hero-description">A little pause, a lot of good company. Familiar Singapore favourites for after-school catch-ups and unhurried afternoons.</p>
          <a href="#menu" className="button button-dark">Find your favourite <ArrowUpRight size={20}/></a>
          <div className="hero-footnote"><span className="mini-cup"><Coffee size={19}/></span><span>Made for your everyday kind of happy.</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-topline"><span>LOCAL FLAVOUR. LOVELY LITTLE MOMENTS.</span><Sparkles size={19}/></div>
          <span className="handwritten">Meet your new usual.</span>
          <FoodArt className="hero-cup"/>
          <span className="hero-spark spark-one">✧</span><span className="hero-spark spark-two">✳</span>
          <div className="round-stamp"><span>BREWED FOR</span><Heart size={27} strokeWidth={1.4}/><span>GOOD COMPANY</span></div>
          <div className="visual-bottom"><span>THE SIMPLE THINGS,<br/><b>DONE WITH HEART.</b></span><span className="illustration-label">A little illustration of our vibe</span></div>
        </div>
      </section>
      <div className="ribbon" aria-label="Coffee, comfort and connection"><div><span>KOPI & CATCH-UPS</span><span>✳</span><span>TOAST & TOGETHERNESS</span><span>✳</span><span>YOUR AFTER-SCHOOL SPOT</span><span>✳</span><span>A LITTLE MORE LEPAK</span><span>✳</span></div></div>
      <section id="about" className="about shell section-space">
        <div className="about-intro"><p className="eyebrow">01 / OUR LITTLE STORY</p><div className="little-doodle"><Coffee size={52} strokeWidth={1.2}/><span>stay a little<br/>longer ☺</span></div></div>
        <div><h2>A familiar place.<br/>A fresh kind of <em>feeling.</em></h2><div className="about-columns"><p>Some of the best moments happen over a simple cup of kopi. A catch-up after class. One more story with your friends. A quiet moment all to yourself.</p><p>That’s the idea behind JoFei Cafe. A neighbourhood café concept with local favourites, friendly prices, and room to slow down. Come as you are. Bring your people.</p></div><span className="about-signoff">A little local love, in every cup. <Heart size={17}/></span></div>
      </section>
      <section id="menu" className="menu-section section-space">
        <div className="shell"><div className="section-heading"><div><p className="eyebrow">02 / THE GOOD STUFF</p><h2>Old favourites.<br/><em>New happy place.</em></h2></div><p>No fuss. Just the things you love.<br/>A little taste of what’s on the table.</p></div>
          <div className="menu-grid">{dishes.map(dish => <article className={`menu-card ${dish.type}`} key={dish.type}>
            <div className="dish-picture"><span className="dish-number">/ {dish.number}</span><FoodArt type={dish.type}/><span className="dish-note">{dish.note}</span></div>
            <div className="dish-info"><p className="eyebrow">{dish.label}</p><div className="dish-title"><h3>{dish.name}</h3><span>S${dish.price}</span></div><p>{dish.description}</p></div>
          </article>)}</div>
          <p className="menu-disclaimer">Menu preview · Sample prices in SGD. Final menu and prices to be confirmed. Food illustrations are for the concept.</p>
        </div>
      </section>
      <section id="contact" className="contact-section shell section-space">
        <div className="contact-card"><div className="contact-copy"><p className="eyebrow">03 / YOUR AFTER-SCHOOL HANGOUT</p><h2>School’s out.<br/><em>Your spot’s here.</em></h2><p>Bring the crew. Grab a bite. Catch up on everything<br className="desktop-break"/> that happened between the first bell and the last.</p><a href="#visit-details" className="button button-dark">Find your hangout <ArrowRight size={19}/></a></div>
          <div id="visit-details" className="visit-details"><div className="visit-label">COME SAY HELLO <span>✳</span></div><div className="visit-row"><MapPin size={22}/><div><h3>Find us in the neighbourhood</h3><p>7 SCI Street<br/>Joyful State</p></div></div><div className="visit-row"><Clock3 size={22}/><div><h3>Time for a little lepak</h3><dl><div><dt>Every day</dt><dd>10am – 8pm</dd></div></dl></div></div><p className="contact-note">Drop by for your daily kopi, a bite to eat, and a little good company.</p></div>
        </div>
      </section>
    </main>
    <footer className="shell"><div className="footer-top"><a href="#" className="brand"><Coffee size={25}/> JoFei <span>Cafe</span></a><p>A little pause, a lot of good company.</p><a className="back-top" href="#">Back to the top <ArrowUpRight size={17}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} JoFei Cafe · Singapore café concept</span><span>Made for the neighbourhood. With a little love.</span></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App/>);
