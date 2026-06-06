'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '',
    organization: '', inquiryType: '', message: '', consent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your inquiry. This will be connected to Hubspot in production.');
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={`wrap ${styles.contactGrid}`}>
        <div>
          <span className={styles.sectionNum}>Contact</span>
          <h2 className={styles.headline}>Institutional inquiries only.</h2>
          <p className={styles.contactNote}>
            Altanova responds to qualified inquiries within five Swiss working days. We do not respond to patient-facing medical questions; please consult a treating physician.
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.contactRow}><b>Corporate</b><a href="mailto:corporate@altanovapharma.ch">corporate@altanovapharma.ch</a></div>
            <div className={styles.contactRow}><b>Regulatory</b><a href="mailto:regulatory@altanovapharma.ch">regulatory@altanovapharma.ch</a></div>
            <div className={styles.contactRow}><b>Partnerships</b><a href="mailto:partnerships@altanovapharma.ch">partnerships@altanovapharma.ch</a></div>
            <div className={styles.contactRow}><b>Media</b><a href="mailto:media@altanovapharma.ch">media@altanovapharma.ch</a></div>
            <div className={styles.contactRow}><b>Pharmacovigilance</b><a href="mailto:pharmacovigilance@altanovapharma.ch">pharmacovigilance@altanovapharma.ch</a> · Swissmedic ElViS</div>
            <div className={styles.contactRow}><b>Address</b><span>Altanova Pharma Group AG<br />Rigistrasse 3<br />6300 Zug<br />Switzerland</span></div>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>First name<input required type="text" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} /></label>
          <label>Last name<input required type="text" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} /></label>
          <label className={styles.full}>Institutional email<input required type="email" placeholder="name@institution.example" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} /></label>
          <label>Organisation<input required type="text" value={formData.organization} onChange={e => setFormData({...formData, organization: e.target.value})} /></label>
          <label>Inquiry type
            <select required value={formData.inquiryType} onChange={e => setFormData({...formData, inquiryType: e.target.value})}>
              <option value="">Select…</option>
              <option>Partnership — pharmacy</option>
              <option>Partnership — distributor / wholesaler</option>
              <option>Partnership — manufacturer / supplier</option>
              <option>Partnership — hospital / clinic</option>
              <option>Regulatory</option>
              <option>Media</option>
            </select>
          </label>
          <label className={styles.full}>Message<textarea required placeholder="Please describe the institutional context of your inquiry." value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea></label>
          <label className={styles.consent}>
            <input required type="checkbox" checked={formData.consent} onChange={e => setFormData({...formData, consent: e.target.checked})} />
            <span>I confirm that this inquiry is institutional in nature. I am not requesting patient-facing medical advice, dosage recommendations or product pricing. I consent to the processing of my data in accordance with the Altanova Privacy Policy (FADP / GDPR).</span>
          </label>
          <button className={`btn btn-primary ${styles.submitBtn}`} type="submit">
            Submit inquiry <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
