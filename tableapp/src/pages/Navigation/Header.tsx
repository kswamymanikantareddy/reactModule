import { Link } from "react-router-dom";
import './header.css'


const Header = () => {
  return (
      <div className="navigation">
        <ul>
          <Link to="/">
            <li>All Assets</li>
          </Link>
          <Link to="Watchlist">
            <li> Watchlist</li>
          </Link>
        </ul>
      </div>
  );
};

export default Header;
