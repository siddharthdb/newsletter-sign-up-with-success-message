import React from 'react';
import logo from '../../assets/images/icon-success.svg'

interface successProps {
  email: string;
  onDismiss: () => void;
}

export const Success = (props: successProps) => {
  const displayName = 'newsletter-success'

  const {
    email,
    onDismiss
  } = props

  return (
    <div className={`${displayName}`}>
      <img src={logo} alt='Success on sign up' />
      <h1 className={`${displayName}-title`}>Thanks for subscribing!</h1>
      <div className={`${displayName}-message`}>
        A confirmation email has been sent to <strong>{email}</strong>.
        Please open it and click the button inside to confirm your subscription.
      </div>
      <button className={`${displayName}-btn-dismiss`} onClick={onDismiss}>Dismiss Message</button>
    </div>
  )
}