import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode implementar o envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="text-center" style={{paddingTop: 100 + 'px', paddingBottom: 100 + 'px'}}>
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
    
        <div className="row mt-5">
          <div className="col-lg-4 text-center mb-4">
            <div className="bg-primary text-white rounded-circle p-3 d-inline-block mb-3">
              <i class="bi bi-envelope-at-fill text-white"></i>
            </div>
            <h5>Email</h5>
            <p className="text-muted">revisando.codigo@gmail.com</p>
          </div>
          
          <div className="col-lg-4 text-center mb-4">
            <div className="bg-primary text-white rounded-circle p-3 d-inline-block mb-3">
             <i class="bi bi-youtube text-white"></i>
            </div>
            <h5>YouTube</h5>
            <p className="text-muted">@RevisandoCodigo</p>
          </div>
          
          <div className="col-lg-4 text-center mb-4">
            <div className="bg-primary text-white rounded-circle p-3 d-inline-block mb-3">
              <i class="bi bi-linkedin text-white"></i>
            </div>
            <h5>LinkedIn</h5>
            <p className="text-muted">/in/revisando-codigo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;