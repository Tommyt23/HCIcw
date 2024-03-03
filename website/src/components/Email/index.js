import "./index.scss";
import Sidebar from "../Sidebar";
import emailjs from '@emailjs/browser';

const Email = () => {
    return (
        <>
        <Sidebar />
        <div className={'contact-form'}>
            <form>
                <ul>
                    <li className={'half'}>
                        <input type={'text'} name={'name'} placeholder={'Name'} required />
                    </li>
                    <li className={'half'}>
                        <input type={'email'} name={'email'} placeholder={'Email'} required />
                    </li>
                    <li>
                        <input placeholder={"Subject"} type={'text'} name={'subject'} required />
                    </li>
                    <li>
                        <textarea placeholder={'Message'} name={'message'} required> </textarea>
                    </li>
                    <li>
                        <input type={'submit'} name={'flat-button'} value={'SEND'} />
                    </li>
                </ul>
            </form>
        </div>
        <div className="map-wrap">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4973.38947548503!2d-0.9571504508220179!3d51.44539977406503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487684b360159d63%3A0xa74d6f19cd5e05ca!2sUniversity%20of%20Reading!5e0!3m2!1sen!2suk!4v1709482239808!5m2!1sen!2suk" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </>
        );
};

export default Email;
