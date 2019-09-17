import React from 'react';
import Mongodb from '../../../../style/images/mongodb.png';
import Express from '../../../../style/images/express.png';
import Axios from '../../../../style/images/axios.png';
import ReactRouter from '../../../../style/images/react-router.svg';
import Jquery from '../../../../style/images/jquery.png';
import './technologies.scss';

const Technologies = () => {

  const mainTechnologies = [
    { name: "React, Redux", icon: "fab fa-react" },
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "JavaScript, jQuery", icon: "fab fa-js" },
    { name: "Css3, Sass", icon: "fab fa-sass" },
    { name: "Node.js", icon: "fab fa-node" },
  ];

  const otherTechnologies = [
    { name: "jQuery", icon: Jquery },
    { name: "MongoDB", icon: Mongodb },
    { name: "Express.js", icon: Express },
    { name: "Axios", icon: Axios },
    { name: "React Router", icon: ReactRouter },
  ];

  const mainTools = [
    { name: "Git", icon: "fab fa-git" },
    { name: "Github", icon: "fab fa-github" },
    { name: "Slack", icon: "fab fa-slack" },
    { name: "Trello", icon: "fab fa-trello" },
    { name: "Yarn", icon: "fab fa-yarn" },
    { name: "Npm", icon: "fab fa-npm" },
    { name: "VSCode", icon: "fas fa-code" },
  ];

  const otherTools = [

  ];

  return (
    <div id="technologies">
      <div className="section-title">
        <div data-aos="fade-right">Technologies</div>
        <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
      </div>

      {/* Content */}

      <section className="technologies">
        <h2>Main Technologies</h2>
        <div className="main-technologies">
          {
            mainTechnologies.map((tech, index) => (
              <div className="technology" key={"main-tech" + index}>
                <i className={tech.icon + " fa-5x"}></i>
                <p>{tech.name}</p>
              </div>
            ))
          }
        </div>
        <h2>Other Technologies</h2>
        <div className="other-technologies">
          {
            otherTechnologies.map((tech, index) => (
              <div className="technology" key={"other-tech" + index}>
                <img className="other-tech-img" src={tech.icon} alt="Icon" />
                <p>{tech.name}</p>
              </div>
            ))
          }
        </div>
      </section>
      <section className="tools">
        {
          mainTools.map((tool, index) => (
            <div className="technology" key={"other-tech" + index}>
              <img className="main-tool-img" src={tool.icon} alt="Icon" />
              <p>{tool.name}</p>
            </div>
          ))
        }
      </section>
    </div>
  )
};


export default Technologies;
