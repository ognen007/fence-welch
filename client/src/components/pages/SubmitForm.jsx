import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

const SubmitForm = () => {
  const drawingParcel = useSelector((state) => state.drawingParcel);
  const formData = useSelector((state) => state.formData);

  useEffect(() => {
    console.log('Drawing Parcel:', drawingParcel);
  }, [drawingParcel]);

  const displayDrawParcel = (data) => {
    return (
      <textarea
        rows="20"
        cols="50"
        value={data}
        readOnly={true}
        className="your-custom-styles"
      />
    );
  };
  
  
  const displayFormData = (formData) => {
    const dataItems = [];
    for (const key in formData) {
      if (formData[key] && typeof formData[key] === 'object') {
        dataItems.push(
          <div key={key}>
            <input type="text" value={formData[key].label} />
          </div>
        );
      } else {
        dataItems.push(
          <div key={key}>
            <input type="text" value={formData[key]} />
          </div>
        );
      }
    }
    return dataItems;
  };
  

  return (
<div className='end-page'>
  <h1>Submitted Data</h1>
  <br/>
  <br/>
  <div>
    <h2>Draw Parcel:</h2>
    {displayDrawParcel(drawingParcel.data)}
  </div>
  <br/>
  <div>
    <h2>Form:</h2>
    {displayFormData(formData.data)}
  </div>
</div>

  );
};

export default SubmitForm;
