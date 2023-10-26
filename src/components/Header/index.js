// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Products">Products</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
      </ul>
      <button type="button">Logout</button>
    </div>
  </nav>
)

export default Header
