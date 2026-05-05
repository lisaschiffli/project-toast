import React from 'react';
import useKeydown from '../../hooks/use-keydown';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([]);

  //clear all toasts if user presses Escape
  // memoize to prevent multiple calls on re-render - 
  // handleEscape will never change because there are no dependencies
  const handleEscape = React.useCallback( () => {
    setToasts([]);
  },[]);

  useKeydown('Escape',handleEscape);

  function createToast(message, variant) {
    setToasts([...toasts, 
      {id: crypto.randomUUID(), 
       message,
       variant
      },
    ]);
  }

 function dismissToast(id) {
    setToasts((prevToasts) => {
      return prevToasts.filter((toast) => toast.id !== id);
    });
  }

  return (
    <ToastContext.Provider 
      value={{
        toasts,
        createToast,
        dismissToast,
      }}
    >
      { children }
    </ToastContext.Provider>
  )
}

export default ToastProvider;
