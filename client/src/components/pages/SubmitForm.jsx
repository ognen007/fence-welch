import { useLocation } from "react-router-dom";

const SubmitForm = () => {
  const location = useLocation();
  const { mapData } = location.state;

  return (
    <div>
      <h1>Submitted Data</h1>
      <p>Map Data: {mapData}</p>
    </div>
  );
};


export default SubmitForm;