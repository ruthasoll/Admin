import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Header from './components/Header';
import DashboardCards from './components/dashboardcards';
const Home = () => (
  <div>
    <DashboardCards /> 
  </div>
);

const Products = () => <div style={{ marginLeft: '220px', padding: '20px' }}>Manage Products</div>;
const Orders = () => <div style={{ marginLeft: '220px', padding: '20px' }}>Manage Orders</div>;

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </Router>
  );
};

export default App;
