import React from 'react';

const Videos = () => {
  const videos = [
    {
      title: 'Criando um React Client Extension',
      description: 'Aprenda a criar um modulo Client Extension do tipo frontend usando o framework React com o vite.',
      thumbnail: 'https://i.ytimg.com/vi/CCHHZrqowfw/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLC5azW6rwMQZPhLm4v_CoeJ-BgLcg',
      duration: '10:26',
      link:'https://www.youtube.com/watch?v=CCHHZrqowfw'
    },
    {
      title: 'Visita Exclusiva: Tecnologia Avançada na Liferay - Controle de Drones com Client Extensions!',
      description: 'Confira o que rolou no meetup presencial em Recife-PE, com direito a visita ao escritório da Liferay.',
      thumbnail: 'https://i.ytimg.com/vi/H_pO-zUkJ2o/hqdefault.jpg?s…BACGAY4AUAB&rs=AOn4CLDMea7ue0n8BAnh0x65epS6DbqAqQ',
      duration: '5:11',
      link:'https://www.youtube.com/watch?v=H_pO-zUkJ2o'
    },
    {
      title: 'Liferay Academy Brasil - Gerenciamento de Conteúdo Web #03',
      description: 'Conheça as melhores práticas para gestão de conteúdos dentro do liferay.',
      thumbnail: 'https://i.ytimg.com/vi/7GKj9LX6cT0/hqdefault.jpg?s…BACGAY4AUAB&rs=AOn4CLA27qeXx2wS5SbfM6k5PBO89u9mBQ',
      duration: '23:43',
      link:'https://www.youtube.com/watch?v=7GKj9LX6cT0&'
    },
    {
      title: 'Liferay Academy Brasil - Gerenciamento de Sites #02',
      description: 'Aprenda a criar sites e receba dicas para gerenciar-los da melhor forma.',
      thumbnail: 'https://i.ytimg.com/vi/7GKj9LX6cT0/hqdefault.jpg?s…BACGAY4AUAB&rs=AOn4CLA27qeXx2wS5SbfM6k5PBO89u9mBQ',
      duration: '13:51',
      link:'https://www.youtube.com/watch?v=AG5hjBqqbdY'
    },
    {
      title: 'Liferay Academy Brasil -  Navegação e Funcionalidades Essenciais #01',
      description: 'Guia completo sobre os principais recursos de gestão do portal Liferay.',
      thumbnail: 'https://i.ytimg.com/vi/7GKj9LX6cT0/hqdefault.jpg?s…BACGAY4AUAB&rs=AOn4CLA27qeXx2wS5SbfM6k5PBO89u9mBQ',
      duration: '13:22',
      link:'https://www.youtube.com/watch?v=JBY8H5--5Ds&t=660s'
    },
    {
      title: 'Automatize seu Conteúdo Web com Liferay e GPT: Transforme sua Estratégia de Marketing',
      description: 'Neste vídeo, mergulhamos no mundo da gestão de experiência digital e na revolução da inteligência artificial com o objetivo de transformar sua estratégia de conteúdo web.',
      thumbnail: 'https://i.ytimg.com/vi/7GKj9LX6cT0/hqdefault.jpg?s…BACGAY4AUAB&rs=AOn4CLA27qeXx2wS5SbfM6k5PBO89u9mBQ',
      duration: '3:45',
      link:'https://www.youtube.com/watch?v=k8eKJWmpJ_8'
    }
  ];

  return (
    <section id="videos" className="py-5">
      <div className="container">
        <h2 className="text-center mb-5">Vídeos em Destaque</h2>
        
        <div className="row">
          {videos.map((video, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4 ">
              <div className="card h-100 card-hover border-1 border-subtle shadow-sm">
                <div className="position-relative">
                  <img 
                    src={video.thumbnail} 
                    className="card-img-top video-thumbnail" 
                    alt={video.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <span className="badge bg-dark position-absolute bottom-0 end-0 m-2">
                    {video.duration}
                  </span>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-primary">{video.title}</h5>
                  <p className="card-text flex-grow-1">{video.description}</p>
                  <a class="btn btn-primary mt-auto" href={video.link} role="button">Assistir Agora</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <a 
            href="https://www.youtube.com/@revisandocodigo9273/videos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline-primary btn-lg"
          >
            Ver Todos os Vídeos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Videos;