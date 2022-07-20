const Header = ({ branding }) => {
  return (
    <nav className=" navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a className="navbar-brand" href="/">
          {branding}
        </a>
      </div>

      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#!" className="nav-link">
              Add
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
