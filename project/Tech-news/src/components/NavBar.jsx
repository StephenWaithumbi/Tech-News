import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 >Tech News</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/ai">Ai</Link>
        <Link to="/cybersecurity">CyberSecurity</Link>        
        <Link to="/software">Software Engineering</Link>        
        <Link to="/create">New Post</Link>
        
      </div>
    </nav>
  );
}
 
export default Navbar;