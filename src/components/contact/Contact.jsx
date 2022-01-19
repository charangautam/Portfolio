import { useState, useRef, useContext } from 'react';
import { ThemeContext } from '../../context';
import './contact.css';

// contact icons
import phone from '../../img/phone.png';
import email from '../../img/email.png'
import address from '../../img/address.png'
// EmailJS
import emailjs from '@emailjs/browser';

const Contact = () => {
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode
    const [done, setDone] = useState(false)

    const formRef = useRef()
    const Name = useRef()
    const Subject = useRef()
    const Email = useRef()
    const Message = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

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
                                <img src={phone} alt="" className="c-icon" />
                                <span className="c-detail">403-483-6798</span>
                            </div>
                            <div className="c-info-item">
                                <img src={email} alt="" className="c-icon" />
                                <span className="c-detail">charan.gtm24@gmail.com</span>

                            </div>
                            <div className="c-info-item">
                                <img src={address} alt="" className="c-icon" />
                                <span className="c-detail">Calgary, Alberta</span>
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <p className="c-desc">
                            <b>Interested in my skills? </b>Get in touch with me. I am looking for a full time position with a company working to make to difference to the communities they serve.
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
        </div>
    )
}

export default Contact