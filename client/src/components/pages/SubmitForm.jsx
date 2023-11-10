import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const SubmitForm = () => {
  const drawingParcel = useSelector((state) => state.drawingParcel);

  useEffect(() => {
    console.log('Drawing Parcel:', drawingParcel);
  }, [drawingParcel]);

  const displayDrawingParcelData = (drawingParcel) => {
    if (drawingParcel && drawingParcel.label) {
      const { selectedType, selectedStyle, selectHeight, selectColor, email } = drawingParcel;
      const drawingInfo = `Type: ${selectedType.label}, Style: ${selectedStyle.label}, Height: ${selectHeight.label}, Color: ${selectColor.label}, Email: ${email}`;
      return <p>{drawingInfo}</p>;
    }
    return null;
  };

  return (
    <div>
      <h1>Submitted Data</h1>
      <p>
        Map: {JSON.stringify(drawingParcel)}
      </p>
    </div>

  );
};

export default SubmitForm;
