
import React from 'react';

const Stats = () => {
  const stats = [
    { number: '10+', label: 'Vídeos Publicados' },
    { number: '1.5K+', label: 'Inscritos' },
    { number: '20K+', label: 'Visualizações' },
    { number: '5+', label: 'Tutoriais Liferay' }
  ];

  return (
    <section className="bg-dark" style={{paddingTop: 80 + 'px', paddingBottom: 80 + 'px'}}>
      <div className="container text-center">
        <div className="row">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="stat-item">
                <span className="stat-number text-light fs-1 fw-bold">{stat.number}</span>
                <p className="mb-0 fs-5 text-light ">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;