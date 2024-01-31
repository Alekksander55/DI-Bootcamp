import logo from '../logo.svg';

const LoadingMessage = ({ loading }) => {
  if (!loading) {
    return null;
  }

  return (
    <div>
      <img src={logo}/>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingMessage;