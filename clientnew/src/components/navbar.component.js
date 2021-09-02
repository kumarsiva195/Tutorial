import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser, setLoggedIn } from "../redux/actions/authActions";

const Navbar = () => {
	const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
	const dispatch = useDispatch();

	useEffect(() => {}, [isLoggedIn]);

	const handleLogout = () => {
		dispatch(logoutUser());
		dispatch(setLoggedIn(false));
	};

return (
<nav className="navbar navbar-expand navbar-dark bg-dark">
  <Link to={"/"} className="navbar-brand">
    Brillio
  </Link>
  <div className="navbar-nav mr-auto">
    <li className="nav-item">
      <Link to={"/home"} className="nav-link">
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link to={"/addtutorial"} className="nav-link">
        Add Tutorial
      </Link>
    </li>
    <li className="nav-item">
      <Link to={"/edittutorial"} className="nav-link">
        Edit Tutorial
      </Link>
    </li>
  </div>
  
  {isLoggedIn ? (
					<button className="button" onClick={handleLogout}>
						Logout
					</button>
				) : (
                    <React.Fragment>
    <div className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link to={"/login"} className="nav-link">
          Login
        </Link>
      </li>

      <li className="nav-item">
        <Link to={"/register"} className="nav-link">
          Sign Up
        </Link>
      </li>
    </div>
    </React.Fragment>
				)}
  {/* )} */}
</nav>
);
};

export default Navbar;
