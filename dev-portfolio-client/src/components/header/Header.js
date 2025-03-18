import "./header.css"
const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img className="logo" src="logo-transparent.svg" alt="Logo" />
        <nav className="header-links">
          <a href="#about" className="">אודות</a>
          <a href="#skills" className="">מיומנויות</a>
          <a href="#projects" className="">פרויקטים</a>
          <a href="#contact" className="">צור קשר</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;