import React from 'react';
import styles from './contact.module.css'; 
function Contact() {
  return (
    <section className={styles.contact}>
      <h2>Contactez-moi</h2>
      <form className={styles.contactForm}>
        <label >Nom :</label>
        <input type="text" />

        <label>Email :</label>
        <input type="email"  />

        <label >Message :</label>
        <textarea id="message"  rows="4" ></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
