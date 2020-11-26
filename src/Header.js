const Header = (props) => {
  return (
    <header>
      <h1>The Husky Kennel</h1>
      <h2>Welcome {props.username}</h2>
    </header>
  );
};

export default Header;
