import React from 'react';
import './modal.scss'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark} from "@fortawesome/free-regular-svg-icons";

const Modal = ({open, onClose}) => {
    if(!open) return null
    return(
//        div to add translucent background behind login popup
        <div className='overlay'>
            
                {/*div for the background to the form*/}
                <div className='modalContainer'>
                    
                    {/*button to close popup*/}
                    <button className='closeBtn' onClick={onClose}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    
                    {/*form for logging in*/}
                    <form>
                        <label className='username'> Username:  
                            <input type="text" />
                        </label>
                        <br/>
                        <label className='email'> E-mail: 
                            <input type="email" />
                        </label>
                        <br />
                        <label className='password'> Password:
                            <input type='text'/>
                        </label>
                        <br />
                        <label className='year'> Year:
                            <select name='year'>
                                <option value='1'> 1st year</option>
                                <option value='2'> 2nd year</option>
                                <option value='3'> 3rd year</option>
                                <option value='4'> 4th year</option>
                            </select>
                        </label>
                        <br />
                        <label className='graduateType'> Graduate type:
                            <select name='graduateType'>
                                <option value='underGraduate'> underGraduate </option>
                                <option value='graduate'> Graduate </option>
                                <option value='PostGraduate'> PostGraduate </option>
                            </select>
                        </label>
                    </form>
                    <br />
                    {/*buttons to add options of what to do */}
                    <div className='btnContainer'>
                        <button className='Login'>
                            <span className='bold'>Login</span>
                        </button>
                        <button className='signUp'>
                            <span className='bold'>Sign up</span>
                        </button>
                    </div>
                </div>
        </div>
    )
}

export default Modal