import React, { useState } from "react";
import "./Page3.css";

function Page3({ cart }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
    state: "",
    postalCode: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === "" ||
      !isValidEmail(formData.email) ||
      !isValidMobile(formData.mobile) ||
      formData.city.trim() === "" ||
      formData.state.trim() === "" ||
      formData.postalCode.trim() === ""
    ) {
      alert("Please fill in all required fields with valid data.");
    } else {
      setSuccessMessage("Hurray! The order has been placed.");
    }
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  const isValidMobile = (mobile) => {
    const mobilePattern = /^\d{10}$/;
    return mobilePattern.test(mobile);
  };

  return (
    <div className="checkout-container">
      <h2>Checkout Page</h2>
      {successMessage && (
        <div className="checkout-success-message">{successMessage}</div>
      )}
      <form className="checkout-form" onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>
            Name*:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Email*:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Mobile*:
            <input
              type="text"
              name="mobile"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            City*:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={(e) =>
                setFormData({ ...formData, city: e.target.value })
              }
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            State*:
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={(e) =>
                setFormData({ ...formData, state: e.target.value })
              }
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Postal Code*:
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={(e) =>
                setFormData({ ...formData, postalCode: e.target.value })
              }
            />
          </label>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default Page3;
