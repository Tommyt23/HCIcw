import "./index.scss";
import Sidebar from "../Sidebar";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
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
            <MapContainer
                center={[51.440536, -0.947071]}
                zoom={13}
                >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[51.440536, -0.947071]}></Marker>
            </MapContainer>
        </div>
        </>
        );
};

export default Email;
