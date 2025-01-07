
const Header = () => {
  return (
    <header>
      <div className="logo">
        <p>jamie/ingalls</p>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#home" className="nav__link">Home</a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">Services</a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">About</a>
          </li>
          <li className="nav__item">
            <a href="#work" className="nav__link">Work</a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
