// darkMode context
import { useState, useRef, useContext } from 'react';
import { ThemeContext } from '../../context';
// css file
import './contact.css';
// contact icons
import phone from '../../img/phone.png';
import email from '../../img/email.png';
import address from '../../img/address.png';
// footer icons 
import github from '../../img/github.svg';
import instagram from '../../img/instagram.svg'
import linkedin from '../../img/linkedin.svg'
// resume
import resume from '../../files/Charan-Gautam-Junior-Developer.pdf';
// EmailJS
import emailjs from '@emailjs/browser';

const Contact = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const [done, setDone] = useState(false)

    // refs for form and each input
    const formRef = useRef()
    const Name = useRef()
    const Subject = useRef()
    const Email = useRef()
    const Message = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        // emailjs
        emailjs.sendForm('service_lbkq8fl', 'template_dz4eovu', formRef.current, 'user_yOEt7qCR6Za7itizukFLb')
            .then((result) => {
                console.log(result.text)
                setDone(true)

                Name.current.value = ''
                Subject.current.value = ''
                Email.current.value = ''
                Message.current.value = ''
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            <div className="contact">
                <div className="c-bg"></div>
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">Let's discuss your needs!</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={phone} alt="Phone icon" className="c-icon" />
                                <span className="c-detail">403-483-6798</span>
                            </div>
                            <div className="c-info-item">
                                <img src={email} alt="Email icon" className="c-icon" />
                                <span className="c-detail">charan.gtm24@gmail.com</span>

                            </div>
                            <div className="c-info-item">
                                <img src={address} alt="Address icon" className="c-icon" />
                                <span className="c-detail">Calgary, Alberta</span>
                            </div>
                            <a href={resume} className="resume-button" download style={{ backgroundColor: darkMode && "#fff", color: darkMode && "#555" }}>Download my CV</a>
                        </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            <b>Interested in my skills? </b>Get in touch with me. I am looking for a full-time position in a company working to make a difference to the communities it serves.
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Name" name="user_name" ref={Name} style={{ backgroundColor: darkMode && "#333", color: darkMode && "#fff" }} />
                            <input type="text" placeholder="Subject" name="user_subject" ref={Subject} style={{ backgroundColor: darkMode && "#333", color: darkMode && "#fff" }} />
                            <input type="text" placeholder="Email" name="user_email" ref={Email} style={{ backgroundColor: darkMode && "#333", color: darkMode && "#fff" }} />
                            <textarea rows="5" placeholder="Message" name="message" ref={Message} style={{ backgroundColor: darkMode && "#333", color: darkMode && "#fff" }}></textarea>
                            <button type="submit" style={{ color: darkMode && "#fff" }}>Submit</button>
                            {done && <p>Thank you, I will get back to you shortly</p>}
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer" style={{ backgroundColor: darkMode && "#fff" }}>
                <p style={{ color: darkMode && "#222" }}>Find me on</p>
                <div className="social-media">
                    <a href="https://github.com/charangautam" target="_blank" rel="noreferrer"><img src={github} alt="Github link" className="social-link" style={{ backgroundColor: darkMode && "gray" }} /></a>
                    <a href="https://www.instagram.com/charangautam/" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram link" className="social-link" style={{ backgroundColor: darkMode && "gray" }} /></a>
                    <a href="https://www.linkedin.com/in/charangautam/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn link" className="social-link" style={{ backgroundColor: darkMode && "gray" }} /></a>
                </div>
            </div>
        </div>
    )
}

export default Contact
