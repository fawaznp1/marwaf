import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function PrivacyPolicyComponent() {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Privacy Policy</h2>
      <Row>
        <Col md={12}>
          <h4>Introduction</h4>
          <p>
            At Marwa Arts, we value your privacy and are committed to protecting your personal information. This privacy policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
          </p>
        </Col>
      </Row>
      
      <Row>
        <Col md={12}>
          <h4>Information We Collect</h4>
          <p>
            We may collect the following types of personal information:
          </p>
          <ul>
            <li>Contact information (name, email address, phone number)</li>
            <li>Payment information (for booking or purchasing services)</li>
            <li>Preferences related to our services (customization requests, designs)</li>
            <li>Website usage data (through cookies or analytics tools)</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <h4>How We Use Your Information</h4>
          <p>
            The information we collect is used for the following purposes:
          </p>
          <ul>
            <li>To process your customization requests and bookings</li>
            <li>To improve our website and services based on user feedback</li>
            <li>To communicate with you about our services and promotions</li>
            <li>To comply with legal obligations</li>
          </ul>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <h4>How We Protect Your Information</h4>
          <p>
            We take the security of your personal information seriously and use industry-standard security measures to protect your data. This includes encryption, secure payment processing, and regular security audits.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <h4>Your Rights</h4>
          <p>
            You have the right to:
          </p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request corrections to any inaccurate or incomplete information</li>
            <li>Request the deletion of your personal data, subject to applicable laws</li>
          </ul>
          <p>If you wish to exercise any of these rights, please contact us at <strong>marwaarts.in@gmail.com</strong>.</p>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <h4>Cookies and Tracking Technologies</h4>
          <p>
            Our website may use cookies and similar technologies to enhance your experience. You can manage or disable cookies in your browser settings. Please note that disabling cookies may affect the functionality of some website features.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <h4>Changes to This Privacy Policy</h4>
          <p>
            We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes through our website or other communication channels.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <h4>Contact Us</h4>
          <p>
            If you have any questions or concerns about our privacy policy, please contact us at <strong>marwaarts.in@gmail.com</strong>.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default PrivacyPolicyComponent;
