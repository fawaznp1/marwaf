import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  const [show, setShow] = useState(false);




  return (

<>
<style>
        {`
          .m-1:focus,
          .m-1:active {
            outline: none; /* Removes the default browser focus outline */
            box-shadow: none; /* Prevents extra shadow or glow effects */
            transform: none; /* Disables scaling or zoom effects */
          },
           @media (max-width: 576px) {
    .social-btn {
      width: 40px;
      height: 35px;
      padding: 8px;
    }
  }
        `}
      </style>
    
    <MDBFooter  className='text-center mt-3' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>
        <section className='mb-4'  >
          <MDBRow>
            <MDBCol xs='auto' className='d-flex justify-content-center'>
             

              <MDBBtn outline color="light" floating className='m-1' style={{ width: '50px', 
        height: '40px', 
        lineHeight: '1', 
        padding: '10px',transition:'none'}} href='https://www.instagram.com/marwarts.in/profilecard/?igsh=MXdqejk0eHM5NnI2OA==' target='_blank' role='button'>
                <MDBIcon fab icon='instagram' />
              </MDBBtn>

              <MDBBtn outline color="light" floating className='m-1' style={{ width: '50px', 
        height: '40px', 
        lineHeight: '1', 
        padding: '10px',transition:'none'}} href='https://www.youtube.com/@marwanp5290' target='_blank' role='button'>
                <MDBIcon fab icon='youtube' />
              </MDBBtn>
              <MDBBtn outline color="light" floating className='m-1' style={{ width: '50px', 
        height: '40px', 
        lineHeight: '1', 
        padding: '10px',transition:'none'}} href='mailto:marwaarts.in@gmail.com' target='_blank' role='button'>
                <MDBIcon fas icon='envelope' />
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </section>
              
        <section className=''>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-2'>
                  <strong>Sign up for latest updates</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' xs="12">
                <MDBInput contrast type='email' placeholder='Email address' className='mb-4' />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit' href='' style={{ width: '100px', 
        height: '40px', 
        lineHeight: '1', 
        padding: '10px',transition:'none'}} className='mb-4'>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-2 mt-3'>
          <p>
            Connecting you with quality and care – Marwa Arts, your one-stop destination for unique art.
          </p>
          <hr />
          <h3>Advertise With Us!</h3>
          <p>
          Promote your business on our platform. Contact us today to discover advertising & promotional opportunities. Reach your audience effortlessly!
          </p>
        </section>
        
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          
          <a href="/privacynpolicy"  className="text-white me-2">Privacy Policy</a> 
          <a href="/terms" className="text-white ms-2">Terms of Service</a>
          <p className='mt-4'>Developed by fawaz_np <a href="https://fawaznp.vercel.app/" className='text-white' target='_blank'><i className="fa-solid fa-up-right-from-square"></i></a></p> 
          <p>
             &copy; {new Date().getFullYear()} @ marwaarts.in. All Rights Reserved.
          </p>
          </div>
    </MDBFooter>

    </>
  );
}
