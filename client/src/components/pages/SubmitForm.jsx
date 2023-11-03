import React, { useEffect } from 'react';
import { useStore } from 'zustand';

const SubmitForm = (props) => {
  const polylineText = useStore((state) => state.polylineText);
  
  useEffect(() => {
    console.log('Map:', polylineText);
  }, [polylineText]);

  return (
    <div>
      <h1>Submitted Data</h1>
      <p>Map: {polylineText}</p>
    </div>
  );
};

export default SubmitForm;