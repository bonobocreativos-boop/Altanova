'use client';
import { useState } from 'react';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '',
    organization: '', inquiryType: '', message: '', consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // TODO: Replace these with your actual HubSpot Portal ID and Form ID
    const portalId = 'YOUR_HUBSPOT_PORTAL_ID';
    const formId = 'YOUR_HUBSPOT_FORM_ID';

    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`;

    const data = {
      fields: [
        { name: 'firstname', value: formData.firstName },
        { name: 'lastname', value: formData.lastName },
        { name: 'email', value: formData.email },
        { name: 'company', value: formData.organization },
        { name: 'inquiry_type', value: formData.inquiryType },
        { name: 'message', value: formData.message }
      ],
      context: {
        pageUri: window.location.href,
        pageName: document.title
      }
    };

    try {
      // Uncomment the fetch call below when you have added your Portal ID and Form ID
      /*
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', organization: '', inquiryType: '', message: '', consent: false });
      } else {
        setSubmitStatus('error');
        console.error('HubSpot form submission error:', await response.text());
      }
      */
      
      // For now, simulate a successful submission since IDs are missing
      setTimeout(() => setSubmitStatus('success'), 1000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
            <div className={styles.contactRow}><b>General Inquiries</b><a href="mailto:lgomez@altanovapharma.com">lgomez@altanovapharma.com</a></div>
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
            <input required type="checkbox" checked={formData.consent} onChange={e => setFormData({...formData, consent: e.target.checked})} disabled={isSubmitting} />
            <span>I confirm that this inquiry is institutional in nature. I am not requesting patient-facing medical advice, dosage recommendations or product pricing. I consent to the processing of my data in accordance with the Altanova Privacy Policy (FADP / GDPR).</span>
          </label>
          
          {submitStatus === 'success' && (
            <div className={styles.successMessage} style={{ padding: '1rem', backgroundColor: '#e6f7ed', color: '#0d5c31', borderRadius: '4px', marginBottom: '1rem' }}>
              Thank you for your inquiry. Our team will review and respond within five Swiss working days.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className={styles.errorMessage} style={{ padding: '1rem', backgroundColor: '#fdeded', color: '#8a1c1c', borderRadius: '4px', marginBottom: '1rem' }}>
              There was an error submitting your inquiry. Please try again later or contact us directly via email.
            </div>
          )}

          <button className={`btn btn-primary ${styles.submitBtn}`} type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit inquiry'} <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
