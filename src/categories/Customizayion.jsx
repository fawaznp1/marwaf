import React, { useState } from 'react';
import { Button, Form, Col, Row, Container } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import Swal from 'sweetalert2';
import axios from 'axios';
import './custom.css';

function CustomizationComponent() {
  const [formData, setFormData] = useState({
    customizationType: '',
    customMessage: '',
    customizationFile: null,
    contactNumber: ''
  });

  const [validated, setValidated] = useState(false); // To track validation state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      customizationFile: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent the default form submission
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true); // Mark form as validated if there are validation errors
      return;
      console.log('Form Data:', formData);

    }

    // Create a FormData object to handle file upload
    const data = new FormData();
    data.append('dropdownValue', formData.customizationType);
    data.append('description', formData.customMessage);
    data.append('phone', formData.contactNumber);
    if (formData.customizationFile) {
      data.append('image', formData.customizationFile);
    }
    

    try {
      // Send the data to the backend
      const response = await axios.post('https://marwab.onrender.com/api/customization', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Display success message
      Swal.fire({
        icon: 'success',
        title: 'Request Received',
        html: 'You will get a confirmation call shortly..!',
        timer: 3500,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      //toast.success('Customization request submitted successfully!');
    } catch (error) {
      console.error(error);
      toast.error('Please fill everything correctly'); //, error.response
    }
    console.log(data);
  };

  return (
    <>
    <Container className="custom mt-5">
      <h2 className="text-center mb-4">Your Customization, Your Style!</h2>
      <p className="text-center mb-4">
        We offer personalized designs and services, tailored just for you. Whether you’re looking for a <strong>customized product</strong> , or a <strong>special request</strong> , we can bring your vision to life!
      </p>

      <Row className="justify-content-center">
        <Col md={8}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="customizationType">
              <Form.Label>Select Your Customization Type :</Form.Label>
              <Form.Control 
                as="select" 
                name="customizationType"
                value={formData.customizationType}
                onChange={handleChange}
                required
                 className="custom-dropdown"
                 style={{maxWidth: '100%'}}
              >
               <option value="">Select one category</option>
                <option>Gift Hamper</option>
                <option>Henna Design</option>
                <option>Frames</option>
                <option>Bracelets</option>
                <option >Calligraphy</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select a customization type.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="customMessage" className='mt-3'>
              <Form.Label>Describe Your Customization</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={4} 
                placeholder="e.g., I want black color stones for bracelets..." 
                name="customMessage"
                value={formData.customMessage}
                onChange={handleChange}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please describe your customization request.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="customizationFile" className='mt-3'>
              <Form.Label>Upload Your Design (Optional)</Form.Label>
              <Form.Control 
                type="file"
                name="image"
                onChange={handleFileChange}
                accept="image/*"
              />
              <Form.Control.Feedback type="invalid">
                Please upload a valid design image (optional).
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="contactNumber" className='mt-3'>
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="tel"
                name="contactNumber"
                pattern="^\d{10}$"  // Regex for validating a 10-digit number
                required 
                placeholder="Phone number" 
                value={formData.contactNumber}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid 10-digit phone number.
              </Form.Control.Feedback>
            </Form.Group>

            <Row className="justify-content-center mt-3">
              <Col md={6} className="text-center">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-100" 
                  type="submit"
                >
                  Submit Customization Request
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>

      <ToastContainer />
    </Container>

</>


  );
}

export default CustomizationComponent;
