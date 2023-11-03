import { connect } from 'react-redux';

const SubmitForm = (props) => {
  return (
    <div>
      <h1>Submitted Data</h1>
      <p>Response: {props.response}</p>
      <p>Map: {props.map}</p>
    </div>
  );
};

const mapStateToProps = (state) => ({
  response: state.response,
  map: state.map,
});

export default connect(mapStateToProps)(SubmitForm);
