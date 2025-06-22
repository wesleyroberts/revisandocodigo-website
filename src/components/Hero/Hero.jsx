
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero-section  bg-primary" style={{paddingTop: 200 + 'px', paddingBottom: 200 + 'px'}}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h1 className="display-3 fw-bold mb-4 text-light">
              Revisando Código
            </h1>
            <p className="lead mb-5 fs-4 text-light">
              Seu canal de referência para Liferay, desenvolvimento e boas práticas de código
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <a 
                href="#videos" 
                className="btn btn-light btn-lg"
              >
                Ver Vídeos
              </a>
              <a 
                href="https://www.youtube.com/@revisandocodigo9273" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-warning btn-lg"
              >
                Inscrever-se
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;