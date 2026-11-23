import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <div className="club">
      {/* TOP LOGO - JAISA SITE ME HAI */}
      <div className="club-logo">🐂<br /><b>1% CLUB</b></div>

      {/* HERO - EXACT JAISA LINK ME HAI */}
      <section className="club-hero">
        <h1>Learn How To Trade<br /><span className="grey">With A Clear System</span><br />And Become A<br />Consistent Trader</h1>
        <p className="club-sub">No Guesswork. No Emotions. Only <b className="gold">Rules + Practice + Coaching</b></p>
        <a href="#video"><button className="cta-gold">WATCH FREE VIDEO ↓</button></a>
        <div className="gold-line"></div>
        <div className="trust-row"><span>⭐ 4.9 Rating</span><span>•</span><span>2,000+ Students</span><span>•</span><span>Live Coaching</span></div>
      </section>

      {/* VSL VIDEO - EXACT JAISA SITE ME */}
      <section className="club-video" id="video">
        <div className="video-box">
          <img src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900" />
          <div className="play">▶</div>
          <div className="video-text"><b>STEP 1: WATCH THIS VIDEO</b><p>How our students learn trading with a system.</p></div>
        </div>
        <p className="sound">🔊 Sound ON - Headphone lagao</p>
        <p className="video-below">👇 Video dekhne ke baad neeche Apply karo 👇</p>
      </section>

      {/* SCARCITY - JAISA SITE ME HAI */}
      <section className="club-scar">
        <h2>⚠️ We Only Accept 5 Traders Per Week</h2>
        <p>If this page is live, <b>spots may still be available — but not for long</b></p>
        <div className="count-box"><div><b>05</b><p>Spots / Week</p></div><div><b>12</b><p>Min Video</p></div><div><b>6</b><p>Months Coaching</p></div></div>
        <div className="gold-line"></div>
        <h3><span className="gold">STEP 2:</span> Apply For Mentorship Below</h3>
        <a href="#apply"><button className="cta-gold">APPLY NOW →</button></a>
      </section>

      {/* WHAT YOU GET - EXACT 3 BOX */}
      <section className="club-sec">
        <h2>What You Get <span className="grey">Inside</span></h2>
        <p className="club-desc">Tumko theory nahi, ek complete system milega - Entry, Exit, Risk Management sab rules ke saath.</p>

        <div className="club-card">
          <img src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=700" />
          <h3>1. Proven Mechanical Trading Strategy</h3>
          <p>Clear, repeatable setups. Kab enter karna hai, kab exit karna hai, kitna risk lena hai - sab pehle se decided. Emotions khatam, system shuru.</p>
          <ul className="tick"><li>✅ Entry / Exit Rules</li><li>✅ Risk Management - 1% Rule</li><li>✅ Live Chart Examples</li></ul>
        </div>

        <div className="club-card">
          <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=700" />
          <h3>2. Funded Account Blueprint</h3>
          <p>Chhote account se shuru karke kaise funded challenge ke liye prepare karte hai - compounding, journaling, psychology sab cover.</p>
          <ul className="tick"><li>✅ Funded Challenge Roadmap</li><li>✅ Trading Journal Template</li><li>✅ Psychology Coaching</li></ul>
        </div>

        <div className="club-card">
          <h3>3. Live Coaching + Community</h3>
          <p>Weekly live calls, doubt session, aur ek community jaha sab ek dusre ko accountable rakhte hai.</p>
          <ul className="tick"><li>✅ Weekly Live Calls</li><li>✅ Private Community</li><li>✅ 1-on-1 Feedback</li></ul>
        </div>
      </section>

      {/* STUDENT RESULTS - EXACT JAISA SITE ME */}
      <section className="club-sec">
        <div className="student-badge">STUDENT RESULTS</div>
        <h2>Hear it directly from our <span className="grey">students worldwide.</span></h2>
        <p className="club-desc">Ye results un students ke hai jinhone system ko consistently follow kiya. Results alag-alag ho sakte hai.</p>

        <div className="result-card">
          <div className="result-img">From Losing → Consistent<br />System Follower 🔥<span>▶</span></div>
          <h3>Mustafa Najjar 🇮🇹</h3>
          <p><span className="grey">Before:</span><br />Inconsistent and undercapitalized</p>
          <p><span className="gold">After:</span><br />Learned risk-managed system and became consistent. Now trading with discipline.</p>
        </div>

        <div className="result-card">
          <div className="result-img gold-bg">Taymoor Ahmed 🇺🇸</div>
          <p><span className="grey">Before:</span><br />$100 in his account, uncertain where to start</p>
          <p><span className="gold">After:</span><br />Followed system for 1 month with proper risk management and improved consistency.</p>
          <p><span className="gold">Timeframe:</span> <b>1 month of practice</b></p>
        </div>
        <p className="disclaimer">* Results are examples for education. Trading me loss bhi hota hai. Koi profit guarantee nahi hai.</p>
      </section>

      {/* FAQ - EXACT JAISA SITE ME */}
      <section className="club-sec">
        <h2>Frequently Asked Questions</h2>
        <p className="club-desc">Still unsure? Sabse zyada puche jaane wale sawaal.</p>
        <div className="faq">
          <details><summary>What Is the 1% Club? <span>+</span></summary><p>Ek mentorship + community hai jaha tumko mechanical trading system, live coaching aur funded blueprint sikhaya jata hai.</p></details>
          <details><summary>How Long Will It Take to See Results? <span>+</span></summary><p>Sabka speed alag hai. Daily 1-2 ghanta practice karne wale ko 3-6 months me system samajh aane lagta hai.</p></details>
          <details><summary>Will I Have Direct Access to Coaches? <span>+</span></summary><p>Haan, weekly live calls + community me direct access milega.</p></details>
          <details><summary>Is This Only for Experienced Traders? <span>+</span></summary><p>Nahi, beginner ke liye basic se shuru hota hai.</p></details>
          <details><summary>Is Profit Guaranteed? <span>+</span></summary><p>Nahi. Trading me hamesha risk hai. Hum system sikhate hai, guarantee nahi dete.</p></details>
        </div>
      </section>

      {/* APPLY FORM - EXACT JAISA SITE ME */}
      <section className="club-apply" id="apply">
        <h2>🔥 APPLY NOW - Only 5 Spots / Week</h2>
        <p>Form bharo, hum tumko WhatsApp pe details bhejenge.</p>
        <input placeholder="Apna Naam *" />
        <input placeholder="WhatsApp Number *" />
        <select><option>Trading Experience?</option><option>Beginner - 0 to 6 Month</option><option>Intermediate - 1 Year</option><option>Advanced - 2+ Year</option></select>
        <select><option>Capital Kitna Hai?</option><option>₹10,000 se kam</option><option>₹10,000 - ₹50,000</option><option>₹50,000+</option></select>
        <button>APPLY FOR MENTORSHIP →</button>
        <p className="small-warn">⚠️ Trading me risk hai. Sirf utna paisa lagao jitna loss afford kar sakte ho. Ye education ke liye hai, financial advice nahi.</p>
      </section>

      <a href="#apply" className="sticky-cta">APPLY NOW - 5 SPOTS LEFT →</a>
    </div>
  )
}

function Trading() {
  return (
    <div className="trade-page">
      <div className="ticker-wrap"><div className="ticker">
        <span>🟢 BTC ₹84,50,000 ▲ 2.4%</span><span>🔴 ETH ₹3,12,000 ▼ 1.2%</span><span>🟢 NIFTY 24,850 ▲ 0.8%</span><span>🟢 GOLD ₹72,500 ▲ 1.5%</span>
      </div></div>
      <div className="trade-main">
        <div className="trade-left">
          <div className="coin-head"><div><h2>₿ Bitcoin / INR</h2><p>BTC-INR • Live</p></div><div className="coin-price">₹84,50,000 <span className="green">▲ +2.4%</span></div></div>
          <div className="chart-box"><div className="bars">
            <span style={{ height: '40%' }}></span><span style={{ height: '60%' }}></span><span style={{ height: '45%' }}></span><span style={{ height: '75%' }}></span><span style={{ height: '55%' }}></span><span style={{ height: '90%' }}></span><span style={{ height: '65%' }}></span><span style={{ height: '100%' }}></span><span style={{ height: '70%' }}></span><span style={{ height: '85%' }}></span><span style={{ height: '60%' }}></span><span style={{ height: '95%' }}></span>
          </div><div className="chart-times"><span>9 AM</span><span>11 AM</span><span>1 PM</span><span>3 PM</span><span>5 PM</span><span>Now</span></div></div>
          <div className="learn-box"><h3>📚 Aaj Ka Lesson - Risk Management</h3><p>Har trade me sirf 1% risk lo. Yehi 1% Club ka rule hai.</p><Link to="/"><button className="cta-gold">BACK TO CLUB →</button></Link></div>
        </div>
        <div className="trade-right">
          <h3>BUY / SELL - BTC</h3>
          <div className="bs-tabs"><button className="buy-tab active">BUY</button><button className="sell-tab">SELL</button></div>
          <p className="p-label">PRICE (INR)</p><input className="trade-input" value="84,50,000" />
          <p className="p-label">QUANTITY (BTC)</p><input className="trade-input" value="0.01" />
          <p className="p-label">TOTAL</p><div className="total-box">₹84,500 <span>≈ 0.01 BTC</span></div>
          <button className="p-buy">BUY BTC →</button>
          <p className="warn">⚠️ Trading me risk hai. Ye demo page hai.</p>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <div>
        <nav className="nav">
          <Link to="/" className="logo">1% CLUB<span>.</span></Link>
          <div className="nav-links"><Link to="/">HOME</Link><Link to="/trading">LIVE MARKET</Link><Link to="/">RESULTS</Link><Link to="/">FAQ</Link></div>
          <div className="nav-right">
            <Link to="/trading" className="nav-cart">📈 Live</Link>
            <Link to="/"><button className="nav-signup">APPLY NOW →</button></Link>
          </div>
        </nav>
        <Routes><Route path="/" element={<Home />} /><Route path="/trading" element={<Trading />} /></Routes>
        <footer>1% TRADING CLUB - TRADE WITH SYSTEM. NOT EMOTIONS.</footer>
      </div>
    </HashRouter>
  )
}