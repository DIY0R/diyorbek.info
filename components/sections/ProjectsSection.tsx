import SearchAllProjects from '../content/SearchAllProjects';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';

const myGithub = 'https://github.com/diy0r';

const ProjectsSection = () => {
  return (
    <SectionContainer>
      <div className="w-full flex flex-col gap-6">
        <TitleSectionPageContainer title="Projects" />

        <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
          <p className="w-full text-base text-gray-400">
            These are my open source projects. If you are interested in my
            projects, please check them out and contribute{' '}
            <a
              href={myGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:underline transition-all ease"
            >
              github.com/DIY0R
            </a>
            .
          </p>
        </AnimationContainer>

        <SearchAllProjects />
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
