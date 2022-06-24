import ShowTask from "../showTask/ShowTask";
import React from "react";
import Header from "./header/Header";
import "./style.css"
import SideBar from "./sidebar/SideBar";

function Home() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <SideBar />
        <ShowTask />
      </div>
    </div>
  );
}
export default Home;