import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Qrcode from "../images/upiimage.jpg";

const EnhancedForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    file: null,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (errors[id]) {
      setErrors({ ...errors, [id]: "" });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });

    if (errors.file) {
      setErrors({ ...errors, file: "" });
    }
  };

  const validateField = (id, value) => {
    let error = "";

    switch (id) {
      case "name":
        if (!value.trim()) error = "Name is required.";
        break;
      case "phone":
        if (!/^\d{10}$/.test(value)) error = "Phone number must be 10 digits.";
        break;
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) error = "Enter a valid email address.";
        break;
      case "pincode":
        if (!/^\d{6}$/.test(value)) error = "Pincode must be 6 digits.";
        break;
      case "address":
        if (!value.trim()) error = "Address is required.";
        break;
      case "file":
        if (!value) error = "File upload is required.";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [id]: error }));
  };

  const handleBlur = (e) => {
    const { id, value } = e.target;
    validateField(id, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    Object.keys(formData).forEach((field) => validateField(field, formData[field]));

    // Check for errors
    const hasErrors = Object.values(errors).some((err) => err);
    const isFormComplete = Object.values(formData).every((value) => value);

    if (!hasErrors && isFormComplete) {
      try {
        const data = new FormData();
        data.append("name", formData.name);
        data.append("phone", formData.phone);
        data.append("email", formData.email);
        data.append("pincode", formData.pincode);
        data.append("address", formData.address);
        data.append("image", formData.file);

        const response = await axios.post("https://marwab.onrender.com/api/userdetails", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        Swal.fire({
          icon: "success",
          title: "Thank You!",
          text: "Your order have been placed successfully..!",
          timer: 3000,
        });

        console.log(response.data);
        setFormData({
          name: "",
          phone: "",
          email: "",
          address: "",
          pincode: "",
          file: null,
        });
      } catch (error) {
        toast.error(error.response?.data?.error || "Something went wrong!", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } else {
      toast.error("Please fix the errors in the form.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const upiId = "9947007696@ibl";

  const handleCopy = () => {
    navigator.clipboard
      .writeText(upiId)
      .then(() =>
        toast.success("UPI ID copied to clipboard!", {
          position: "top-center",
          autoClose: 2000,
        })
      )
      .catch(() =>
        toast.error("Failed to copy UPI ID.", {
          position: "top-center",
          autoClose: 2000,
        })
      );
  };

  return (
    <>
    <div className="container mt-4">
      <ToastContainer />
      <h2 className="text-center mb-4">Shipping Details</h2>

      <div className="d-flex flex-column align-items-center">
        <img src={Qrcode} style={{ width: "150px" }} alt="UPI QR code" />
        <h6 className="mt-1">Hold image to download</h6>
        <h6>UPI ID: {upiId}</h6>
        <button
          onClick={handleCopy}
          className="btn btn-primary mt-2 mb-3"
          style={{ fontSize: "14px", alignItems: "center" }}
        >
          <i className="fa-solid fa-copy me-2"></i> Copy UPI ID
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="name" className="form-label">
              Name*
            </label>
            <input
              type="text"
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="phone" className="form-label">
              Phone*
            </label>
            <input
              type="tel"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              id="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">
              Email* (Order details will be sent to this email)
            </label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="pincode" className="form-label">
              Pincode*
            </label>
            <input
              type="text"
              className={`form-control ${errors.pincode ? "is-invalid" : ""}`}
              id="pincode"
              placeholder="Enter your pincode"
              value={formData.pincode}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
            {errors.pincode && <div className="invalid-feedback">{errors.pincode}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="address" className="form-label">
              Address*
            </label>
            <textarea
              className={`form-control ${errors.address ? "is-invalid" : ""}`}
              id="address"
              placeholder="Enter your address with nearby landmark"
              value={formData.address}
              onChange={handleInputChange}
              onBlur={handleBlur}
            ></textarea>
            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="file" className="form-label">
              Payment Screenshot* (COD currently not available!)
            </label>
            <input
              type="file"
              className={`form-control ${errors.file ? "is-invalid" : ""}`}
              id="file"
              onChange={handleFileChange}
              onBlur={(e) => validateField("file", formData.file)}
            />
            {errors.file && <div className="invalid-feedback">{errors.file}</div>}
          </div>
        </div>
        <button type="submit" className="btn btn-success w-100 mt-3">
          Confirm Order!
        </button>
      </form>
    </div>
    
    </>
  );
};

export default EnhancedForm;
