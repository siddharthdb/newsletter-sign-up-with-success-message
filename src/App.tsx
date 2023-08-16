import React, { useState } from "react";
import { Success } from "./components/success";

const App = () => {
  const cmpName = "newsletter";

  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);
  const [emailaddress, setEmailAddress] = useState<string>('');

  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  const handleSubmit = () => {
    if (!validateEmail(emailaddress) || emailaddress === '') {
      setIsValidEmail(false);
      setShowSuccess(false)
    } else {
      setIsValidEmail(true);
      setShowSuccess(true);
    }
  }

  return (
    <main className={`${cmpName}`}>
      {showSuccess ? <Success email={emailaddress} onDismiss={() => setShowSuccess(false)}></Success> :
        <div className={`${cmpName}__container`}>
          <div className={`${cmpName}__form`}>
            <h1>Stay Updated!</h1>
            <div className={`${cmpName}__form-summary`}>
              Join 60,000+ product managers receiving monthly updates on:
            </div>

            <ul className={`${cmpName}__form-list`}>
              <li className={`${cmpName}__form-list-item`}>Product discovery and building what matters</li>
              <li className={`${cmpName}__form-list-item`}>Measuring to ensure updates are a success</li>
              <li className={`${cmpName}__form-list-item`}>And much more!</li>
            </ul>

            <div className={`${cmpName}__form-input`}>
              <span className={`${cmpName}__form-input-label`}>
                <label htmlFor="emailaddress">Email Address</label>
                {!isValidEmail ? <span className="error">Valid email required</span> : null}
              </span>
              <input type="text" className={!isValidEmail ? 'error' : ''} name="emailaddress" id="emailaddress"
              onChange={(e) => setEmailAddress(e.target.value)}
              placeholder="email@company.com" />
            </div>

            <button className={`${cmpName}__form-btn`} onClick={handleSubmit}>Subscribe to monthly newsletter</button>
          </div>
          <div className={`${cmpName}__image`}>
          </div>
        </div>
      }
    </main>
  )
}

export default App;