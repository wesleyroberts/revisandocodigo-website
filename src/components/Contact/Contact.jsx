import React, { useState } from 'react';

const Contact = () => {
  
  return (
    <section id="contact" className="text-center" style={{paddingTop: 100 + 'px', paddingBottom: 100 + 'px'}}>
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
    
        <div className="row mt-5">
          <div className="col-lg-4 text-center mb-4">
            <div className="bg-primary text-white rounded-circle px-3 py-2  d-inline-block mb-3">
              <i className="bi bi-envelope-at-fill text-white fs-1"></i>
            </div>
            <h5>Email</h5>
            <p className="text-muted">wesleyroberts.office@gmail.com</p>
          </div>
          
          <div className="col-lg-4 text-center mb-4">
            <div className="bg-primary text-white rounded-circle px-3 py-2  d-inline-block mb-3">
             <i className="bi bi-youtube text-white fs-1"></i>
            </div>
            <h5>YouTube</h5>
            <p className="text-muted">@RevisandoCodigo</p>
          </div>
          
          <div className="col-lg-4 text-center mb-4">
            <div className="bg-primary text-white rounded-circle px-3 py-2  d-inline-block mb-3">
              <i className="bi bi-linkedin text-white fs-1"></i>
            </div>
            <h5>LinkedIn</h5>
            <p className="text-muted">
              <a className="text-decoration-none text-muted" href='https://www.linkedin.com/in/wesley-roberts-9714a7189/'>/in/wesley-roberts-9714a7189/</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;