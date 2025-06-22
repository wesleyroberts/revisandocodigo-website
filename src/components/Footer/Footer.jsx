import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-4 mb-4">
            <h5 className="fw-bold mb-3 text-white">Revisando Código</h5>
            <p className="mb-3 text-white">
              Canal especializado em Liferay, desenvolvimento e boas práticas de programação. 
              Conteúdo de qualidade para desenvolvedores.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white fs-4">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-white fs-4">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" className="text-white fs-4">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="text-white fs-4">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="fw-bold mb-3 text-white">Navegação</h6>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light text-decoration-none ">Início</a></li>
              <li><a href="#videos" className="text-light text-decoration-none">Vídeos</a></li>
              <li><a href="#about" className="text-light text-decoration-none">Sobre</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contato</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6 mb-4">
            <h6 className="fw-bold mb-3 text-white">Conteúdo</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Tutoriais Liferay</a></li>
              <li><a href="#" className="text-light text-decoration-none">Boas Práticas</a></li>
              <li><a href="#" className="text-light text-decoration-none">Análise de Código</a></li>
              <li><a href="#" className="text-light text-decoration-none">Novidades</a></li>
            </ul>
          </div>
          
          <div className="col-lg-3 mb-4 text-white">
            <h6 className="fw-bold mb-3 text-white">Newsletter</h6>
            <p className="small mb-3 text-white">Receba as últimas novidades e tutoriais</p>
            <div className="input-group">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Seu email"
              />
              <button className="btn btn-primary" type="button">
                Inscrever
              </button>
            </div>
          </div>
        </div>
        
        <hr className="my-4" />
        
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0 small text-white">
              © 2024 Revisando Código. Todos os direitos reservados.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="mb-0 small text-white">
              Feito com ❤️ para a comunidade de desenvolvedores
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
