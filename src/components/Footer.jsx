import React from 'react';
import { useState } from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log('Subscribed with:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <>
      <style>
        {`
          .footer-link {
            color: #fff;
            text-decoration: none;
            transition: color 0.3s ease;
          }
          .footer-link:hover {
            color: #f8f9fa;
            text-decoration: underline;
          }
          .social-btn {
            width: 50px;
            height: 40px;
            line-height: 1;
            padding: 10px;
            transition: transform 0.2s ease, background-color 0.3s ease !important;
          }
          .social-btn:hover {
            transform: translateY(-3px);
            background-color: rgba(255,255,255,0.1) !important;
          }
          .newsletter-input {
            background-color: rgba(255,255,255,0.1);
            color: white;
            border: 1px solid rgba(255,255,255,0.3);
          }
          .newsletter-input:focus {
            background-color: rgba(255,255,255,0.2);
            color: white;
            box-shadow: 0 0 0 0.25rem rgba(255,255,255,0.25);
          }
          .newsletter-btn {
            background-color: #0d6efd;
            border: none;
          }
          .newsletter-btn:hover {
            background-color: #0b5ed7;
          }
          
          @media (max-width: 768px) {
            .social-btn {
              width: 45px;
              height: 38px;
            }
            .footer-text {
              text-align: center;
            }
          }
          @media (max-width: 576px) {
            .social-btn {
              width: 40px;
              height: 35px;
            }
          }
        `}
      </style>
    
      <MDBFooter className='text-center mt-auto' color='white' bgColor='dark'>
        <MDBContainer className='p-4'>
          <section className='mb-2'>
            <MDBRow className='justify-content-center d-block d-flex'>
              <MDBCol md='8' lg='6' style={{ display: 'block' }}>
                <h5 className='text-uppercase mb-4'>Stay Connected</h5>
                <p>
                  Follow us on social media to stay updated with our latest products and offers.
                </p>
                
                <div className='d-flex justify-content-center flex-wrap'>
                  <MDBBtn 
                    outline 
                    color="light" 
                    floating 
                    className='m-1 social-btn' 
                    href='https://www.instagram.com/marwarts.in/profilecard/?igsh=MXdqejk0eHM5NnI2OA==' 
                    target='_blank' 
                    role='button'
                  >
                    <MDBIcon fab icon='instagram' />
                  </MDBBtn>

                  <MDBBtn 
                    outline 
                    color="light" 
                    floating 
                    className='m-1 social-btn' 
                    href='https://www.youtube.com/@marwanp5290' 
                    target='_blank' 
                    role='button'
                  >
                    <MDBIcon fab icon='youtube' />
                  </MDBBtn>
                  
                  <MDBBtn 
                    outline 
                    color="light" 
                    floating 
                    className='m-1 social-btn' 
                    href='mailto:marwaarts.in@gmail.com' 
                    target='_blank' 
                    role='button'
                  >
                    <MDBIcon fas icon='envelope' />
                  </MDBBtn>
                </div>
              </MDBCol>
               <MDBCol md='8' lg='6' style={{ display: 'block' }}>
                <h5 className='text-uppercase mb-4'>Advertise With Us!</h5>
                <p className='mb-4'>
                  Promote your business on our platform. Contact us today to discover advertising & promotional opportunities. 
                  Reach your audience effortlessly!
                </p>
                <MDBBtn 
                  color='primary' 
                  href='mailto:marwaarts.in@gmail.com?subject=Advertising Inquiry'
                  className='mb-3'
                >
                  Contact for Advertising
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </section>
              
        </MDBContainer>

        <div className='p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <MDBContainer>
            <div className='d-flex flex-column flex-md-row justify-content-center align-items-center gap-2 mb-3'>
              <a href="/privacynpolicy" className="footer-link me-3">Privacy Policy</a>
              <span className='d-none d-md-block'>|</span>
              <a href="/terms" className="footer-link ms-3 me-3">Terms of Service</a>
            </div>
            
            <p className='mb-2'>
              Developed by <a href="https://fawaznp.vercel.app/" className='footer-link' target='_blank' rel='noopener noreferrer'>
                fawaz_np <MDBIcon fas icon='external-link-alt' size='xs' />
              </a>
            </p>
            
            <p className='mb-0'>
              &copy; {new Date().getFullYear()} Marwa Arts. All Rights Reserved.
            </p>
          </MDBContainer>
        </div>
      </MDBFooter>
    </>
  );
}