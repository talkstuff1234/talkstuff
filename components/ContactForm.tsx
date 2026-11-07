'use client';

import { FormEvent, useState } from 'react';
import { CONTACT } from '@/lib/content';

/** Posts to NEXT_PUBLIC_FORM_ENDPOINT (e.g. a Formspree URL) if set, otherwise opens an email draft. */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '';

export default function ContactForm() {
  const [msg, setMsg] = useState<{ type: 'ok' | 'err' | ''; text: string }>({ type: '', text: '' });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (!data.name || !/^\S+@\S+\.\S+$/.test(data.email || '')) {
      setMsg({ type: 'err', text: 'Please add your name and a valid email address.' });
      return;
    }
    if (ENDPOINT) {
      try {
        const r = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        });
        if (!r.ok) throw new Error('failed');
        setMsg({ type: 'ok', text: 'Thank you. We will get back to you shortly.' });
        form.reset();
      } catch {
        setMsg({ type: 'err', text: `Something went wrong. Please email ${CONTACT.email}.` });
      }
    } else {
      const body = `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company || ''}\nService: ${data.service}\n\n${data.message || ''}`;
      window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Proposal request: ' + data.service)}&body=${encodeURIComponent(body)}`;
      setMsg({ type: 'ok', text: 'Opening your email app to send your request.' });
    }
  };

  return (
    <form className="form" noValidate onSubmit={onSubmit} data-r>
      <div>
        <label className="eb" htmlFor="n">Full name</label>
        <input className="fi" id="n" name="name" type="text" autoComplete="off" />
      </div>
      <div>
        <label className="eb" htmlFor="e">Email address</label>
        <input className="fi" id="e" name="email" type="email" autoComplete="off" />
      </div>
      <div>
        <label className="eb" htmlFor="c">Company name</label>
        <input className="fi" id="c" name="company" type="text" autoComplete="off" />
      </div>
      <div>
        <label className="eb" htmlFor="s">Choose your service</label>
        <select className="fi" id="s" name="service">
          <option>Digital Marketing</option>
          <option>Social Media</option>
          <option>Content Creation</option>
          <option>Paid Media</option>
          <option>Billboard Advertising</option>
          <option>Web &amp; Design</option>
        </select>
      </div>
      <div>
        <label className="eb" htmlFor="m">Your message</label>
        <textarea className="fi" id="m" name="message" />
      </div>
      <div>
        <button className="btn k" type="submit">
          Request a proposal <i>&rarr;</i>
        </button>
      </div>
      <p className={`msg ${msg.type}`} role="status" aria-live="polite">{msg.text}</p>
    </form>
  );
}
