import { NavLink } from 'react-router-dom';
import './sidebar.css';
const Sidebar = () => {
  return (
       <div className="sidebar">
      <h2>eCommerce Admin</h2>
      <NavLink to="/" exact className="link" activeClassName="activeLink">Home</NavLink>
      <NavLink to="/products" className="link" activeClassName="activeLink">Products</NavLink>
      <NavLink to="/orders" className="link" activeClassName="activeLink">Orders</NavLink>
    </div>
  );
};



export default Sidebar;