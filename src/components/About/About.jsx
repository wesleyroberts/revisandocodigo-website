import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-5 bg-secondary-subtle" style={{paddingTop: 100 + 'px', paddingBottom: 100 + 'px'}}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="section-title text-start">Sobre o Canal</h2>
            <p className="fs-5 mb-4">
              Bem-vindo ao <strong>Revisando Código</strong>, o seu canal de referência para 
              tudo relacionado ao Liferay e desenvolvimento de portais corporativos.
            </p>
            <p className="mb-4">
              Aqui você encontrará tutoriais detalhados, análises de código, boas práticas 
              e as últimas novidades do ecossistema Liferay. Nosso objetivo é ajudar 
              desenvolvedores a criar soluções robustas e eficientes.
            </p>
            <div className="row mt-4">
              <div className="col-sm-6 mb-3">
                <div className="d-flex align-items-center">
                  <div className="bg-primary rounded-circle px-2 py-1 me-3">
                    <i class="bi bi-code-slash text-white fs-2"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Tutoriais Práticos</h6>
                    <small className="text-muted">Código real, exemplos práticos</small>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 mb-3">
                <div className="d-flex align-items-center">
                  <div className="bg-primary rounded-circle px-2 py-1 me-3">
                    <i class="bi bi-mortarboard-fill text-white fs-2"></i>
                  </div>
                  <div>
                    <h6 className="mb-0">Conteúdo Educativo</h6>
                    <small className="text-muted">Aprenda do básico ao avançado</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Desenvolvedor programando" 
                className="img-fluid rounded shadow-lg"
                style={{ maxHeight: '400px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;