import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        gap: "100px",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
      >
        home
      </NavLink>
      <NavLink
        to="/About"
        style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
      >
        Product
      </NavLink>
      <NavLink
        to="/Add"
        style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
      >
        Add Product
      </NavLink>
      <NavLink
        to="/Contact"
        style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
      >
        Login
      </NavLink>
    </div>
  );
}

export default Navigation;
