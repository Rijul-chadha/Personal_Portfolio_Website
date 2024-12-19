// src/components/ContactMe.jsx
import React from 'react';
import { Button } from '@mui/material'; // Using Material-UI button for styling

const ContactMe = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Contact Me</h2>
      <p>If you would like to get in touch, feel free to send me an email!</p>
      
      {/* Using a mailto link to directly open the email client */}
      <a href="mailto:r1chadha@torontomu.ca?subject=Inquiry&body=Hello Rijul,">
        <Button variant="contained" color="primary">
          Send an Email
        </Button>
      </a>
    </div>
  );
};

export default ContactMe;
