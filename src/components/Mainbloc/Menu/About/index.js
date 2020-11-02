import React from 'react';
import './about.scss';

class About extends React.Component {

  componentDidMount() {
    // Manually active AOS to see the animation
    setTimeout(() => {
      this.first.classList.add("aos-animate")
    }, 0);
    setTimeout(() => {
      this.second.classList.add("aos-animate")
    }, 0);
    setTimeout(() => {
      this.third.classList.add("aos-animate")
    }, 0);
  }


  render() {

    return (
      <div id="about">
        <div className="section-title">
          <div data-aos="fade-right">About</div>
          <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
        </div>
        <div className="content">
          <div className="text">
            Know everything about my proffessionnal career, and personnal passions.
          </div>
          <div className="container about-container animated-border">
            <div className="item" data-aos="fade-left" data-aos-delay="200" ref={(e) => this.first = e}>
              <h2>Professionnal career</h2>

              <h3>Training</h3>
              <p>Let's talk about O'clock.
              It is a school specializing in web developer training, with a particularity ... Everything happens in telepresencial!
              5 months of intense training, a specialization in React and at the end, the diploma "Web Developer and Mobile Web Level III" (bac+2).</p>

              <h3>Professionnal experience</h3>
              <p>I am currently working at MSC (Mediteranean Shipping Company), a world leader in global container shipping industry, at Geneva, Switzerland. I am working on Servicenow, a software solution for huge business, allowing Ticket management, development of custom applications, and my main job is to use my Javascript skills to provide technological solutions by creating on-demand algorithms and web applications for the collaborators and customers.</p>
            </div>

            <div className="item" data-aos="fade-left" data-aos-delay="400" ref={(e) => this.second = e}>
              <h2>Objectives</h2>

              <h3>Improve</h3>
              <p>At the top of my 22 years old, taking experience and always continue to learn is something essential for me. Passionate about the JavaScript environment, I always needs to push my limits, create new applications, learn new librairies/frameworks, best practices, and over all produce quality code.</p>

              <h3>FullStack</h3>
              <p>One of the most interesting part with JavaScript is that you can use this language to build pretty much everything today. Front-end, Back-end, Native Mobile App, PWA, Desktop application.. JavaScript can be executed on so many various environment, and for me that's his main power, that's also why I love it. Currently I use it mostly to build Web Applications on the web browser, but learning all the stacks of JS such as React Native for mobile, Electron for desktop is something that I want to learn, when the time will allow.</p>
            </div>
            <div className="item" data-aos="fade-left" data-aos-delay="600" ref={(e) => this.third = e}>
              <h2>Passions</h2>

              <h3>Ski</h3>
              <p>I was on skis for the first time at two years old. <br />
                This passion never lost me, and today I practice a lot, especially Freeski.<br />
                Skiing is my way to empty my mind, make some sport and enjoy the moment, to be more focused and improve my efficency during work time.</p>

              <h3>Technology</h3>
              <p>Impossible to escape there being born at this time! Technology is now totaly essential for all of us, and contributing to this new area by developing application is for me a huge priviledge and satisfaction. I also love videogame, especially online PC like LoL, WoW..</p>

            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default About;