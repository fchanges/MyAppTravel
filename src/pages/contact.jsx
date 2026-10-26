import '../styles/Contact.css'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Contact = () => {
  const [result] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "8dd830bd-d18e-4469-8d8c-cdcb17aec48f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    await response.json();
    Swal.fire({
    title: "Success!",
    text: "Your messages has been sent successfully!",
    icon: "success"
  });
  };

  return (
    <>
    <div id="contact"></div>
    <div className="container-contact">
      <div className="header">
        <h2>CONTACT US</h2>
        <p className='contact-active'>(This form is active)</p>
        <br/>
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Name" name='name' required />
        <input type="text" placeholder="Last Name" name='lastname' required />
        <input type="email" placeholder="Email" name='email' required />
        <input type="text" placeholder="Subject" name='subject' required />
        <textarea placeholder="Your Message" rows="5" name='message' required></textarea>
        <button type="submit">Send Message</button>
        {result && <p role="status">{result}</p>}
      </form>
    </div>
    </>
  )
}

export default Contact
