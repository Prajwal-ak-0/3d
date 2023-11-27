import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-md sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hey there! I'm
        <span className='font-semibold mx-2 text-white'>Prajwal</span>
        👋
        <br />
        A CSE AI & ML student at MS Ramaiah Institute of Technology
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-md text-center'>
            I'm a full-stack developer with a passion for building things that live on the internet.
            <br /> I develop exceptional websites and web apps that provide intuitive, pixel-perfect
            user interfaces with efficient and modern backends.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
            More about me
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-md'>
            I have worked on a wide range of projects, varying from building websites for local
            businesses to creating web apps for startups.
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
            Check out my work
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-md text-center'>
        I'm currently looking for any new opportunities, my inbox is always open. Whether you have
        a question or just want to say hi, I'll try my best to get back to you!
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Get in touch
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
