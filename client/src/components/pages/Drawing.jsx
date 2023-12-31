import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { setFormData } from "../../app/formDataSlice";
import FenceLogo from "../../img/fence.png";
import CloseLogo from "../../img/close.png";

const types = [
  { value: "chainlink", label: "Chain Link" },
  { value: "ornamental", label: "Ornamental" },
  { value: "vinyl", label: "Vinyl" },
  { value: "wood", label: "Wood" },
];

const styles = {
  chainlink: [
    { value: "black-vinyl", label: "Black Vinyl Chain-Link" },
    { value: "galvanized", label: "Galvanized Chain-link" },
  ],
  ornamental: [
    { value: "3-rail-flat-top", label: "3-Rail Flat-Top" },
    { value: "3-Rail-spear-top", label: "3-Rail Spear Top" },
  ],
  vinyl: [
    { value: "privacy", label: "Privacy" },
    { value: "ranch-rail", label: "Ranch Rail" },
  ],
  wood: [
    { value: "solid-board", label: "Solid Board" },
    { value: "batten-board", label: "Batten Board" },
    { value: "alternate-board", label: "Alternate Board" },
  ],
};

const heights = {
  chainlink: [
    { value: "four-inches", label: "4'" },
    { value: "five-inches", label: "5'" },
    { value: "six-inches", label: "6'" },
  ],
  ornamental: [
    { value: "four-inches", label: "4'" },
    { value: "five-inches", label: "5'" },
    { value: "six-inches", label: "6'" },
  ],
  vinyl: [
    { value: "four-inches", label: "4'" },
    { value: "five-inches", label: "5'" },
    { value: "six-inches", label: "6'" },
  ],
  wood: [
    { value: "four-inches", label: "4'" },
    { value: "six-inches", label: "6'" },
  ],
};

const colors = {
  chainlink: [{ value: "chain-color", label: "N/A" }],
  ornamental: [{ value: "black", label: "black" }],
  vinyl: [
    { value: "white", label: "White" },
    { value: "almond", label: "Almond" },
  ],
  wood: [
    { value: "cedar", label: "Cedar" },
    { value: "brown-treated-pine", label: "Brown Treated Pine" },
    { value: "green-treated-pine", label: "Green Treated Pine" },
  ],
};

const Drawing = ({setResponse}) => {
  const [selectedType, setSelectedType] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [selectHeight, setSelectedHeight] = useState(null);
  const [selectColor, setSelectedColor] = useState(null);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption);
    setSelectedStyle(null);
  };

  const handleHeightChange = (selectedOption) => {
    setSelectedHeight(selectedOption);
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();
  
  const submitData = (event) => {
    event.preventDefault();

    if (!selectedType || !selectedStyle || !selectHeight || !selectColor || !email || !phoneNumber || !fullName || !streetAddress) {
      alert('Please fill all the fields');
      return;
    }

    const formData = {
      selectedType: selectedType,
      selectedStyle: selectedStyle,
      selectHeight: selectHeight,
      selectColor: selectColor,
      email: email,
      phoneNumber: phoneNumber,
      fullName: fullName,
      streetAddress: streetAddress,
    };

    localStorage.setItem('formData', JSON.stringify(formData));
    console.log("Form Data:", formData);
    dispatch(setFormData(formData));
    navigate('/map');
  }

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const pushUser = () => {
    navigate("/");
  }

  return (
    <div className="datainput drawing-container" style={{background: "#fff",width: "100%", height: "100vh"}}>
      <img onClick={() => pushUser()} src={CloseLogo} alt="Close Logo" style={{position: 'absolute', top: 15, left: 15, width:"35px", cursor: "pointer"}}/>
      <div className="select-container">
        <form style={{paddingTop: "40px", paddingLeft: "30px"}} onSubmit={submitData}>
          <div className="sm:col-span-4">
            <label className="main-label block text-sm font-medium leading-6 text-gray-900">
              STEP 1 - PERSONAL INFO
            </label>
            <div className="mt-2">
              <br />
              <div className="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  autoComplete="given-name"
                  placeholder="Full Name"
                  className="input-info block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  required
                />
              </div>
              <br />
              <br />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="example@example.com"
                autoComplete="email"
                className="input-info block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                required
              />
            </div>
            <br/>
            <br/>
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="phone number"
              placeholder="+ (111) 222 333"
              autoComplete="phone number"
              className="input-info block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />
          </div>
          <br />
          <div className="mt-2">
            <input
              type="text"
              name="street-address"
              id="street-address"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              placeholder="William Street 25 NY"
              autoComplete="street-address"
              className="input-info block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />
          </div>
          <br />
          <br />
          <label htmlFor="type-dropdown">STEP 2 - CHOOSE YOUR FENCE</label>
          <Select
            className="input-group"
            id="type-dropdown"
            name="type-dropdown"
            options={types}
            value={selectedType}
            onChange={handleTypeChange}
            placeholder="Select"
            required
          />
          <br />
          <br />
          <Select
            className="input-group"
            id="style-dropdown"
            name="style-dropdown"
            options={styles[selectedType?.value] || []}
            value={selectedStyle}
            onChange={(selectedOption) => setSelectedStyle(selectedOption)}
            placeholder="Select"
            required
          />
          <br />
          <br />
          <Select
            className="input-group"
            id="style-dropdown"
            name="style-dropdown"
            options={heights[selectedType?.value] || []}
            value={selectHeight}
            onChange={(selectedOption) => handleHeightChange(selectedOption)}
            placeholder="Select"
            required
          />
          <br />
          <br />
          <Select
            className="input-group"
            id="style-dropdown"
            name="style-dropdown"
            options={colors[selectedType?.value] || []}
            value={selectColor}
            onChange={(selectedOption) => setSelectedColor(selectedOption)}
            placeholder="Select"
            required
          />
          <br />
          <br />
          <button
            className="next-submit"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Drawing;

