import CurrentTimeLineExp, {
  calculateDuration
} from '../content/CurrentTimeLineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import ProcessWork from '../content/ProcessWork';
import { skills } from '../utils/mySkills';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="About me" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="text-base text-gray-400">
            I was born in the Republic of Karakalpakstan. I am 20 years old, and
            I started programming in my school years. At the age of 16, I began
            working as a Fullstack developer in a local company. I have always
            had a passion for learning something new and delving deeper into
            technologies to master them at a professional level. Currently, I am
            studying advanced English and attending university. In the future, I
            want to obtain a doctorate degree, but this is a secondary goal for
            now. My main goal is to build a successful career in reputable
            companies.
          </p>
        </AnimationContainer>

        <CurrentTimeLineExp />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <h2 className="font-bold text-2xl md:text-2xl tracking-tight mb-2 text-white text-start">
            Skills
          </h2>

          <p className="text-base text-gray-400">
            A look at all the programming languages, libraries, and tools I've
            worked with, I started programming about +
            {calculateDuration('2018-01-01', false)} ago. I have tried a few
            programming languages and technology stack, both Backend and
            Frontend.
          </p>

          <p className="text-base text-gray-400">
            Event though the scope of web development is wide, I was very
            interested and focused on <b>Backend development.</b>
          </p>

          <div className="flex flex-col items-start gap-3 mt-3">
            {skills.map(({ title, techs }) => (
              <div key={title}>
                <h3 className="font-bold text-1xl md:text-1xl tracking-tight mb-5 text-white text-start">
                  {title}
                </h3>

                <AnimationContainer customClassName="flex items-center flex-wrap gap-3 mb-5">
                  <ShowSkills skills={techs} />
                </AnimationContainer>
              </div>
            ))}
          </div>
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default AboutSection;
