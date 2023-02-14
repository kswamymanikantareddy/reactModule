import React from "react";
import "./nav.css";
import { Link, Outlet } from "react-router-dom";
export default function Products() {
  return (
    <>
    <div className="input">
    <input type="text" placeholder="type here..."/>
    </div>
     
      <div className="container">
        <div className="new">
          <Link to="new">New</Link>
        </div>
        <div className="featured">
          <Link to="featured">Featured</Link>
        </div>
      </div>
      <Outlet/>
    </>
  );
}
