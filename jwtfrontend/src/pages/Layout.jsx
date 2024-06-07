import { Link, Outlet } from "react-router-dom";

export function Layout({ token, setToken, removeToken }) {
    return (
      <>
        <Link to="/" style={{ marginRight: "10px" }}>Login</Link>
        <Link to="/helloworld">Hello World</Link>
        <Outlet/>
      </>
    )
}
