import React from 'react';
import Mongodb from '../../../../style/images/mongodb.png';
import Express from '../../../../style/images/express.png';
import Axios from '../../../../style/images/axios.png';
import ReactRouter from '../../../../style/images/react-router.svg';
import Jquery from '../../../../style/images/jquery.png';
import Postman from '../../../../style/images/postman.png';
import './technologies.scss';

const Technologies = () => {

  const mainTechnologies = [
    { name: "HTML5, JSX", icon: "fab fa-html5" },
    { name: "CSS3, Sass", icon: "fab fa-sass" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "React, Redux", icon: "fab fa-react" },
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
    { name: "Font Awesome", icon: "fab fa-font-awesome" },
    { name: "Discord", icon: "fab fa-discord" },
  ];

  return (
    <div id="technologies">
      <div className="section-title">
        <div data-aos="fade-right">Technologies</div>
        <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
      </div>

      {/* Content */}

      <div className="content">
        <section className="technologies">
          <h2>Technologies</h2>
          <div className="technologies">
            {
              mainTechnologies.map((tech, index) => (
                <div className="technology" key={"main-tech" + index}>
                  <i className={tech.icon + " fa-4x"}></i>
                  <p>{tech.name}</p>
                </div>
              ))
            }
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
          <h2>Tools</h2>
          <div className="main-tools">
            {
              mainTools.map((tool, index) => (
                <div className="tool" key={"main-tools" + index}>
                  <i className={tool.icon + " fa-4x"} alt="Icon"></i>
                  <p>{tool.name}</p>
                </div>
              ))
            }
            <div className="tool">
              <img src={Postman} alt="Icon"/>
              <p>Postman</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
};


export default Technologies;
