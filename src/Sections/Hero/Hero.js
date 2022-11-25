import { PrimaryButton } from '../../components';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-text">
        <h6 className="hero-subtitle">Welcom To Cyborg</h6>
        <h4 className="hero-title">
          <em>Browse</em> Our Popular Game Here
        </h4>
      </div>
     <PrimaryButton>Browse Now</PrimaryButton>
      {/* <div className="main-button">
        <a href="browse.html">Browse Now</a>
      </div> */}
    </div>
  );
};

export default Hero;
