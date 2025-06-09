import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree ,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Restuarant Website"
          des="I created an inviting restaurant website with HTML, CSS, and JavaScript, prioritizing user-friendly design and essential features like menu display and reservation forms for seamless customer interaction.Responsive layouts ensure compatibility across devices"
          src={projectOne}
        />
        <ProjectsCard
          title="APP DEVELOPMENT"
          des="I spearheaded the creation of a sleek mobile app, prioritizing user experience and functionality. Using React Native and Firebase, I ensured seamless navigation and feature-rich interfaces for both iOS and Android platforms."
          src={projectTwo}
        />
        <ProjectsCard
          title="HOTEL WEBSITE"
          des="I designed a captivating hotel website, featuring HTML, CSS, and JavaScript, focusing on intuitive design and essential functionalities like room booking and amenities display, ensuring seamless user experience."
          src={projectThree}
        />
        <ProjectsCard
          title="E-COMMERCE WEBSITE"
          des="I developed a sleek e-commerce platform with HTML, CSS, JavaScript, React.js, Node.js, and MongoDB, prioritizing intuitive navigation and robust functionality. Ensured seamless shopping with features like product search, secure checkout, and responsive design.."
          src={projectFour}
        />
        <ProjectsCard
          title="CAR WASH WEBSITE"
          des="I developed a sleek car wash website using HTML, CSS, and JavaScript, with a focus on user-friendly design and essential features like service booking and pricing information, enhancing customer engagement."
          src={projectFive}
        />
        <ProjectsCard
          title="GYM WEBSITE"
          des=" Check out my latest project: a sleek gym website highlighting my front-end development skills. Experience seamless design and functionality that promotes health and community engagement."
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects