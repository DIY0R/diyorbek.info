import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName="w-full mb-16">
      <h2 className="font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start">
        About me
      </h2>

      <p className="text-base text-gray-400">
        I am a passionate and versatile developer with over +
        {calculateDuration('2020-01-01', true)} of JavaScript experience and a
        constant interest in learning new technologies. I am currently learning
        software architecture and the Rust programming language. My goal is to
        master these areas to design and build robust, efficient, scalable
        systems, and write high-performance, fast-operating code.
      </p>
    </AnimationContainer>
  );
};

export default AboutMe;
