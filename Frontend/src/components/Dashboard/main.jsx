import { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import "./main.css";
import Header from "./header";
import Home from "./display";
import Customer from "./Farmer/customer";
import Listing from "./Farmer/listing";
import Order from "./Farmer/order";
import Feedback from "./Farmer/feedback";
import Setting from "./Farmer/setting";
import Dashboard from "./Farmer/dashboard";

import {
  BsCart3,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsListCheck,
  BsMenuButtonWideFill,
  BsFillGearFill,
  BsGearFill,
} from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Main() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [option, setOption] = useState("listing");

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleOptionClick = (optionName) => {
    setOption(optionName);
    setOpenSidebarToggle(false); // Close sidebar after selecting an option
  };

  const navigate = useNavigate();

  //Home
  const onHome = () => {
    navigate("/");
  };

  //Logout
  const onLogOut = () => {
    Swal.fire({
      title: "Log Out",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        // Swal.fire({
        //   title: "Log Out",
        //   text: "",
        //   icon: "success",
        // });
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/");
        window.location.reload();
      }
    });
  };
  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <aside
        id="sidebar"
        className={openSidebarToggle ? "sidebar-responsive" : ""}
      >
        <div className="sidebar-title">
          <div className="sidebar-brand" onClick={onHome}>
            E-Mandi
          </div>
          <span className="icon close_icon" onClick={OpenSidebar}>
            <IoClose />
          </span>
        </div>

        <ul className="sidebar-list">
          <li className="sidebar-list-item" onClick={onHome}>
            <FaHome className="icon" /> Home
          </li>
          <li
            className="sidebar-list-item"
            onClick={() => handleOptionClick("dashboard")}
          >
            <BsGrid1X2Fill className="icon" /> Dashboard
          </li>
          <li
            className="sidebar-list-item"
            onClick={() => handleOptionClick("customer")}
          >
            <BsPeopleFill className="icon" /> Customer
          </li>
          <li
            className="sidebar-list-item"
            onClick={() => handleOptionClick("listing")}
          >
            <BsFillGrid3X3GapFill className="icon" /> Listing
          </li>
          <li
            className="sidebar-list-item"
            onClick={() => handleOptionClick("order")}
          >
            <BsFillArchiveFill className="icon" /> Order
          </li>
          <li
            className="sidebar-list-item"
            onClick={() => handleOptionClick("feedback")}
          >
            <BsMenuButtonWideFill className="icon" /> Feedback
          </li>
          <li
            className="sidebar-list-item"
            onClick={() => handleOptionClick("setting")}
          >
            <BsGearFill className="icon" /> Setting
          </li>
          <li className="sidebar-list-item" onClick={onLogOut}>
            <a>
              <i className="fa-solid fa-right-from-bracket icon"></i> Log Out
            </a>
          </li>
        </ul>
      </aside>
      {/* Render component based on the selected option */}
      {option === "customer" ? (
        <Customer />
      ) : option === "listing" ? (
        <Listing />
      ) : option === "order" ? (
        <Order />
      ) : option === "feedback" ? (
        <Feedback />
      ) : option === "dashboard" ? (
        <Dashboard />
      ) : (
        <Setting />
      )}
    </div>
  );
}

export default Main;
