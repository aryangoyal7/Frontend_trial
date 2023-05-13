import { useState } from 'react'

import css from './GetTheApp.module.css'

import mobileImg from '/images/mobile.png'
import playstoreImg from '/icons/appstore.png'
import appstoreImg from '/icons/playstore.png'

let GetTheApp = () => {

    let [inputType, setInpuutType] = useState(true);
    let [validInpt, setValidInpt] = useState(true);

    return <div className={css.outerDiv}>
        <div className={css.innerDiv}>
            <div className={css.leftSec}>
                <img className={css.mobileImg} src={mobileImg} alt="mobile img" />
            </div>
            <div className={css.rightSec}>
                <div className={css.title}>Thirtyml Mobile App Coming soon!</div>
                <div className={css.tag}>Meanwhile enjoy our Website</div>
                <div className={css.tag}>Share us your details, we'll share the link to the as soon as it's up!</div>
                <div className={css.inputBoxes}>
                    <div className={css.radiosBtns}>
                        <div className={css.radioBtn} onClick={() => setInpuutType(true)}>
                            <input className={css.radio} type="radio" name="radio" id="email" defaultChecked={inputType} />
                            <label className={css.label} htmlFor="email">Email</label>
                        </div>
                        <div className={css.radioBtn} onClick={() => setInpuutType(false)}>
                            <input className={css.radio} type="radio" name="radio" id="phone" />
                            <label className={css.label} htmlFor="phone">Phone</label>
                        </div>
                    </div>
                    <div className={css.inputs}>
                        <div className={css.optionInputs}>
                            {inputType ? <div className={css.inputBox}>
                                <input className={css.input} type="email" name="email" id="email" placeholder='Email...' />
                                {!validInpt ? <div className={[css.errMess,]}>Please enter your email id</div> : ''}
                            </div> : <div className={css.inputBox}>
                                <input className={css.input} type="tel" name="phone" id="phone" placeholder='type here...' />
                                {!validInpt ? <div className={css.errMess}>Please enter your phone number</div> : ''}
                            </div>}
                        </div>
                        <button className={css.btn}>Share App Link</button>
                        {/* <button className={css.btn2} disabled>Share App Link</button> */}
                    </div>
                </div>
                <div className={css.appLinks}>
                    
                    
                </div>
            </div>
        </div>
    </div>
}

export default GetTheApp;