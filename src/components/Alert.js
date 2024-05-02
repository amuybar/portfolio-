import '../styles/Alert.css';

const Alert = ({ type, message }) => {
  return (
    <div className={`alert ${type}`}>
      {message}
    </div>
  );
};
export default Alert;