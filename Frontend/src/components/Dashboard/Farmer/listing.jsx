import React, { useState } from "react";
import "./listing.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Listing = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [cat, setCat] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const States = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
  ];

  const onQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const onCatChange = (event) => {
    setCat(event.target.value);
  };
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onPriceChange = (event) => {
    setPrice(event.target.value);
  };
  const onStateChange = (event) => {
    setState(event.target.value);
  };
  const onCityChange = (event) => {
    setCity(event.target.value);
  };
  const onPinChange = (event) => {
    setPin(event.target.value);
  };

  const validateName = () => {
    return name.length >= 3;
  };

  const validateQuantity = () => {
    const parsedQuantity = parseInt(quantity);
    return (
      !isNaN(parsedQuantity) && parsedQuantity >= 1 && parsedQuantity <= 100
    );
  };

  const validatePrice = () => {
    const parsedPrice = parseFloat(price);
    return !isNaN(parsedPrice) && parsedPrice >= 1 && parsedPrice <= 10000;
  };

  const validateCity = () => {
    return city.trim() !== "";
  };

  const validateState = () => {
    // List of valid state names of India
    const validStates = States;
    return validStates.includes(state.trim());
  };

  const validatePin = () => {
    // You can implement pin code validation logic here
    return /^\d{6}$/.test(pin);
  };

  return (
    <div>
      <h1 className="list_heading container">List A New Product</h1>
      <form className="container list_body">
        <div class="form-row list_main row">
          <div class="col-sm-12 col-md-6 ">
            <label for="validationServer01">Product name</label>
            <input
              type="text"
              className={
                validateName()
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              id="validationServer01"
              placeholder="Name of the product"
              required
              onChange={onNameChange}
            />
            {!validateName() ? (
              <div className="invalid-feedback">
                Name must be at least 3 characters long.
              </div>
            ) : (
              <div class="valid-feedback">Looks good!</div>
            )}
          </div>
          <div class="col-sm-12 col-md-6 list_option">
            <label for="validationServer01">Category</label>
            <select
              className="form-select is-valid"
              id="inputGroupSelect03"
              aria-label="Example select with button addon"
              onChange={onCatChange}
              required
            >
              <option value="farmer">Vegetables</option>
              <option value="farmer">Fruits</option>
              <option value="farmer">Dairy Products</option>
              <option value="buyer">Oil & Ghee</option>
              <option value="buyer">Atta & Flours</option>
              <option value="buyer">Masala & Spices</option>
              <option value="buyer">Rice & Rice products</option>
              <option value="farmer">Dal & pulses</option>
            </select>
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="col-sm-12 col-md-6 ">
            <label for="validationServer02">Product Quantity</label>
            <input
              type="text"
              className={
                validateQuantity()
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              id="validationServer02"
              placeholder="KG"
              onChange={onQuantityChange}
              required
            />
            {!validateQuantity() ? (
              <div className="invalid-feedback">
                Quantity must be a number between 1 and 100.
              </div>
            ) : (
              <div class="valid-feedback">Looks good!</div>
            )}
          </div>
          <div class="col-sm-12 col-md-6 ">
            <label for="validationServer02">Product Price</label>
            <input
              type="text"
              className={
                validatePrice()
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              id="validationServer02"
              placeholder="Rs./KG"
              onChange={onPriceChange}
              required
            />
            {!validatePrice() ? (
              <div className="invalid-feedback">
                Price must be a number between 1 and 10000.
              </div>
            ) : (
              <div class="valid-feedback">Looks good!</div>
            )}
          </div>
        </div>
        <div class="form-row row">
          <div class="col-sm-12 col-md-6 ">
            <label for="validationServer03">City</label>
            <input
              type="text"
              className={
                validateCity()
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              id="validationServer03"
              placeholder="City"
              required
              onChange={onCityChange}
            />
            {!validateCity() ? (
              <div className="invalid-feedback">
                Please provide a valid city in India.
              </div>
            ) : (
              <div class="valid-feedback">Looks good!</div>
            )}
          </div>
          <div class="col-sm-12 col-md-6 ">
            <label for="validationServer04">State</label>
            <input
              type="text"
              className={
                validateState()
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              id="validationServer04"
              placeholder="State"
              required
              onChange={onStateChange}
            />
            {!validateState() ? (
              <div className="invalid-feedback">
                Please provide a valid state of India.
              </div>
            ) : (
              <div class="valid-feedback">Looks good!</div>
            )}
          </div>
          <div class="col-sm-12 col-md-6 ">
            <label for="validationServer05">Pin Code</label>
            <input
              type="text"
              className={
                validatePin()
                  ? "form-control is-valid"
                  : "form-control is-invalid"
              }
              id="validationServer05"
              placeholder="Pin Code"
              required
              onChange={onPinChange}
            />
            {!validatePin() ? (
              <div className="invalid-feedback">
                Please provide a valid 6-digit PIN code.
              </div>
            ) : (
              <div class="valid-feedback">Looks good!</div>
            )}
          </div>
        </div>
        <div class="form-group">
          {/* <div class="form-check">
            <input
              class="form-check-input is-invalid"
              type="checkbox"
              value=""
              id="invalidCheck3"
              required
            />
            <label class="form-check-label" for="invalidCheck3">
              Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
              You must agree before submitting.
            </div>
          </div> */}
        </div>
        <button class="btn btn-primary list_btn" type="submit">
          List Product
        </button>
      </form>
    </div>
  );
};

export default Listing;
