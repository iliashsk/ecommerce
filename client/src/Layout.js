import { Outlet,NavLink } from "react-router-dom";
import ActiveMenuLink from "active-menu-link"

const Layout = () => {

  const col={
    color:'black',
    fontSize:'25px',
    textDecoration:'none',

  }
  
  
  return (
    <>
      <nav>
  
  <div id="navli">
    <ul >
     <li className="laylink">
            <NavLink to="/" style={col} activeClassName="active">Home</NavLink>
          </li>
          <li className="laylink">
            <NavLink to="/login" style={col} activeClassName="active">Login</NavLink>
          </li >
          <li className="laylink">
            <NavLink to="/regist" style={col} activeClassName="active">Register</NavLink>
          </li>
         
      
      
    </ul>
  </div>
</nav>

      <Outlet />
    </>
  )
};

export default Layout;


