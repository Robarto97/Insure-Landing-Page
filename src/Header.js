import introDesktop from "./images/image-intro-desktop.jpg";
import introMobile from "./images/image-intro-mobile.jpg";
import logo from "./images/logo.svg";
const Header = () => {
  const handleMenu = (e) => {
    e.target.classList.toggle("active");
    document.querySelector(".items").classList.toggle("show");
  };
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="items">
          <li className="item">
            <a href="/">How we work</a>
          </li>
          <li className="item">
            <a href="/">Blog</a>
          </li>
          <li className="item">
            <a href="/">Account</a>
          </li>
          <li className="item">
            <a href="/">View Plans</a>
          </li>
        </ul>
        <div onClick={handleMenu} className="hamburger"></div>
      </nav>
      <div className="img-intro">
        <picture>
          <source media="(min-width:376px)" srcSet={introDesktop}></source>
          <img src={introMobile} alt="Header Intro" />
        </picture>
      </div>
      <section className="header-content">
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button>View Plans</button>
      </section>
    </header>
  );
};

export default Header;
