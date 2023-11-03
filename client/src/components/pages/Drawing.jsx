import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { connect, useDispatch } from 'react-redux';
import { setResponse } from '../../actions.js';

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
    { value: "black-vinyl", label: "Black Vinyl Chain-Link" },
    { value: "galvanized", label: "Galvanized Chain-link" },
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

  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption);
    setSelectedStyle(null);
  };

  const handleHeightChange = (selectedOption) => {
    setSelectedHeight(selectedOption);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitData = (e) => {
    dispatch(setResponse(e.target.value)); 
    navigate('/map');
  };

  return (
    <div style={{ marginLeft: "40px", marginTop: "40px" }}>
      <form>
        <div className="sm:col-span-4">
          <label className="main-label block text-sm font-medium leading-6 text-gray-900">
            STEP 1 - PERSONAL DATA
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@example.com"
              autoComplete="email"
              className="input-info block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              required
            />
          </div>
        </div>
        <br />
        <br />
        <div className="mt-2">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            placeholder="Full Name"
            className="input-info block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            required
          />
        </div>
        <br />
        <br />
        <div className="mt-2">
          <input
            type="text"
            name="street-address"
            id="street-address"
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
          <input
          onClick={submitData}
            className="next-submit"
            type="button"
            value="submit"
          />
      </form>
    </div>
  );
};

export default connect(null, { setResponse })(Drawing);
