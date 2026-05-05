import React from 'react';

function useKeydown(key, handler) {
  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === key) {
        handler(event);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
    window.removeEventListener('keydown', handleKeyDown);
    }
    },[key, handler]);
}

export default useKeydown;
