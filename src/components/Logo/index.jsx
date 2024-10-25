import logo from './logo.svg';

function Logo(props) {
  return (
    <img
      src={logo}
      alt="logo"
      className="App-logo"
      style={{
        width: props.size,
        height: props.size,
      }}
    />
  );
}

Logo.defaultProps = {
  size: 200,
};

export default Logo;
