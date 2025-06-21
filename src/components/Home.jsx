import Container from 'react-bootstrap/esm/Container';
import Header from './header/Header';
import Hero from './Hero/Hero';
import Stats from './Stats/Stats';
import Videos from './Videos/Videos';
import About from './About/About';
import Contact from './Contact/Contact';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Stats/>
      <Videos/>
      <About/>
      <Contact/>
    </div>

  );
};

export default Home;