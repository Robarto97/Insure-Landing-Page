import snappyProcess from "./images/icon-snappy-process.svg";
import affordablePrices from "./images/icon-affordable-prices.svg";
import peopleFirst from "./images/icon-people-first.svg";
const Main = () => {
  return (
    <main>
      <section className="top-section">
        <h2>We're different</h2>
        <ul>
          <li>
            <div className="icon">
              <img src={snappyProcess} alt="" />
            </div>
            <h3>Snappy Process</h3>
            <p>
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </p>
          </li>
          <li>
            <div className="icon">
              <img src={affordablePrices} alt="" />
            </div>
            <h3>Affordable Prices</h3>
            <p>
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </li>
          <li>
            <div className="icon">
              <img src={peopleFirst} alt="" />
            </div>
            <h3>People First</h3>
            <p>
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </p>
          </li>
        </ul>
      </section>
      <section className="bottom-section">
        <h2>Find out more about how we work</h2>
        <a href="/">How we work</a>
      </section>
    </main>
  );
};

export default Main;
