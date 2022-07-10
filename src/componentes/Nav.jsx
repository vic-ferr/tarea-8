const Nav = () => {
  return (
    <>
      <nav className="box-nav">
        <div className="box-nav__logo">logo</div>
        <ul className="box-nav__ul-links">
          <li className="box-nav__li-links">
            <a className="box-nav__link" href="/" target="_blank">
              Home
            </a>
          </li>
          <li className="box-nav__li-links">
            <a className="box-nav__link" href="/" target="_blank">
              Nosotros
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
