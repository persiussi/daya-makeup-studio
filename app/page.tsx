'use client';

import { useState } from 'react';
import Image from 'next/image';

const services = [
  { name: 'Signature soft glam', detail: 'Luminous skin, softly defined eyes, and a finish that still feels like you.', price: '₹2,500', time: '60 min' },
  { name: 'Bridal artistry', detail: 'A considered bridal look with skin prep, draping support, and lasting finish.', price: '₹12,000', time: '150 min' },
  { name: 'Event / editorial', detail: 'A polished or expressive look shaped around your outfit, light, and occasion.', price: '₹4,500', time: '90 min' },
];

export default function Page() {
  const [sent, setSent] = useState(false);
  const [time, setTime] = useState('1:00 PM');

  return <main>
    <header className="siteHeader">
      <a className="wordmark" href="#top"><span>D</span><b>DAYA</b><small>makeup studio</small></a>
      <nav><a href="#services">Services</a><a href="#work">Our work</a><a href="#book">Book</a></nav>
      <a className="headerCta" href="#book">Book a look <span>↗</span></a>
    </header>

    <section className="hero" id="top">
      <div className="heroCopy">
        <p className="kicker"><span/> RAJOURI · MAKEUP ARTISTRY</p>
        <h1>Still you.<br/><em>Just luminous.</em></h1>
        <p className="heroText">Skin-first makeup for weddings, celebrations, and every moment that deserves to feel like yours.</p>
        <div className="heroActions"><a className="button buttonDark" href="#book">Reserve your date <span>↗</span></a><a className="textLink" href="#work">Explore the looks ↓</a></div>
        <div className="heroMeta"><div><b>01</b><span>Personal<br/>consultation</span></div><div><b>02</b><span>Skin-first<br/>artistry</span></div><div><b>03</b><span>Calm, private<br/>appointments</span></div></div>
      </div>
      <div className="heroImage"><Image src="/images/daya-bridal.png" alt="Elegant bridal makeup by Daya Makeup Studio" fill priority sizes="(max-width: 900px) 100vw, 50vw"/><div className="imageTag"><span>THE DAYA FINISH</span><b>Soft · refined · lasting</b></div><span className="imageIndex">01 / 02</span></div>
    </section>

    <section className="marquee" aria-label="Studio qualities"><span>Bridal artistry</span><i>✦</i><span>Soft glam</span><i>✦</i><span>Real skin</span><i>✦</i><span>Made personal</span></section>

    <section className="services" id="services">
      <div className="sectionIntro"><p className="kicker"><span/> SERVICES</p><h2>Your face,<br/><em>your energy.</em></h2><p>Every appointment begins with listening. We shape the colour, finish, and feeling around you.</p></div>
      <div className="serviceList">{services.map((service, index) => <article key={service.name}><span className="serviceNum">0{index + 1}</span><div><h3>{service.name}</h3><p>{service.detail}</p><small>{service.time}</small></div><strong>{service.price}</strong><span className="serviceArrow">↗</span></article>)}</div>
    </section>

    <section className="work" id="work">
      <div className="workTop"><div><p className="kicker"><span/> SELECTED LOOKS</p><h2>Beauty, without<br/><em>the mask.</em></h2></div><p>Fresh skin, considered detail, and a finish that photographs beautifully from every angle.</p></div>
      <div className="workGrid">
        <figure className="workPortrait"><Image src="/images/daya-soft-glam.png" alt="Soft glam makeup portrait" fill sizes="(max-width: 600px) 100vw, 45vw"/><figcaption><span>Soft sculpt</span><b>01</b></figcaption></figure>
        <figure className="workBridal"><Image src="/images/daya-bridal.png" alt="South Asian bridal makeup" fill sizes="(max-width: 600px) 100vw, 30vw"/><figcaption><span>Modern bridal</span><b>02</b></figcaption></figure>
        <aside className="workQuote"><span>“</span><p>Makeup should hold the moment, without hiding the person in it.</p><a href="https://www.instagram.com/daya.makeup.studio63/" target="_blank" rel="noreferrer">Follow the studio ↗</a></aside>
      </div>
    </section>

    <section className="booking" id="book">
      <div className="bookingCopy"><p className="kicker"><span/> APPOINTMENTS</p><h2>Your chair<br/><em>is waiting.</em></h2><p>Tell us a little about your day. We’ll reply on WhatsApp with availability and the next steps.</p><div className="contactRows"><div><small>WHATSAPP</small><b>+91 98765 43210</b></div><div><small>STUDIO</small><b>Rajouri, Jammu & Kashmir</b></div></div></div>
      <div className="bookingCard">{sent ? <div className="success"><span>✓</span><small>REQUEST RECEIVED</small><h3>We’ll be in touch.</h3><p>Your details are with the studio. Expect a WhatsApp message shortly.</p><button onClick={() => setSent(false)}>Make another request</button></div> : <><div className="cardHead"><div><small>BOOK YOUR LOOK</small><h3>Appointment details</h3></div><span>01</span></div><form onSubmit={event => {event.preventDefault(); setSent(true)}}><div className="fieldRow"><label>Your name<input required placeholder="Full name"/></label><label>WhatsApp number<input required type="tel" placeholder="+91 00000 00000"/></label></div><div className="fieldRow"><label>Choose a service<select required defaultValue=""><option value="" disabled>Select your look</option><option>Signature soft glam</option><option>Bridal artistry</option><option>Event / editorial</option></select></label><label>Preferred date<input required type="date"/></label></div><fieldset><legend>Preferred time</legend><div className="timeChoices">{['10:00 AM','1:00 PM','4:00 PM'].map(slot => <button type="button" className={time === slot ? 'active' : ''} onClick={() => setTime(slot)} key={slot}>{slot}</button>)}</div></fieldset><label>Anything we should know?<textarea placeholder="Event, outfit colours, or the look you have in mind…" rows={3}/></label><button className="submitButton">Request appointment <span>↗</span></button><p className="formNote">No payment is needed now. Your date is held after confirmation.</p></form></>}</div>
    </section>

    <footer><a className="wordmark" href="#top"><span>D</span><b>DAYA</b><small>makeup studio</small></a><p>Makeup for the moments that stay.</p><div><a href="https://www.instagram.com/daya.makeup.studio63/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
