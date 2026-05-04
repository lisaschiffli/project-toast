import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [selectedVariant, setSelectedVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [showToast, setShowToast] = React.useState(false);

  function handleDismiss()  {
    setShowToast(false)
  }

  return (
    <>
    
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <Toast variant={selectedVariant} showToast={showToast} handleDismiss={handleDismiss}>
        {message}
      </Toast>
      <form 
        className={styles.controlsWrapper}
        onSubmit={(event) => {
          event.preventDefault();
          setShowToast(true);
        }}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea 
              id="message" 
              className={styles.messageInput} 
              value={message}
              onChange={event => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <fieldset className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map(option => (
              <label key={option} htmlFor={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={option === selectedVariant}
                  onChange={event => {
                    setSelectedVariant(event.target.value)
                  }}
                  />
                {option}
              </label>  
            ))}
          </fieldset>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button>
               Pop Toast!
            </Button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
}

export default ToastPlayground;
   