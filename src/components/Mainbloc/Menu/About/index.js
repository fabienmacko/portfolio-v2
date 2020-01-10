import React from 'react';
import axios from 'axios';
import './about.scss';

const Container = ({ pseudo, description, id }) => {

  return (
    <div key={id} id={id}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '60%',
        margin: '0 auto',
        border: '2px solid #464646',
        borderRadius: '4px',
        padding: '20px',
        marginTop: '20px',
      }}>
        <p style={{
          width: "100%",
          color: "white",
        }}>{description}</p>
        <p style={{
          alignSelf: "flex-end",
          fontSize: "1rem",
          opacity: ".7",
          color: "white",
        }}>- {pseudo}</p>
      </div>
    </div>
  )
}
class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/comments')
      .then((response) => {
        // handle success
        console.log(response);
        this.setState({ posts: response.data });

        // document.querySelector("#posts").appendChild("<div>"response"</div>")
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }
  render() {
    const { posts } = this.state;

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
          <div className="about-container animated-border">
            <div data-aos="fade-left" data-aos-delay="500">
              <h2>Professionnal career</h2>
              <h3>Training</h3>
              <p>Let's talk about O'clock.
              It is a school specializing in web developer training, with a particularity ... Everything happens in telepresencial!
              5 months of intense training, a specialization in React and at the end, the diploma "Web Developer and Mobile Web Level III" (bac+2).</p>
              <h3>Professionnal experience</h3>
              <p>I am currently working at MSC (Mediteranean Shipping Company), a world leader in global container shipping industry, at Geneva, Switzerland. I am working on Servicenow, a software solution for huge business, allowing Ticket management, development of custom applications, and my main job is to use my Javascript skills to provide technological solutions by creating on-demand algorithms and web applications for the collaborators and customers.</p>
            </div>

            <div data-aos="fade-left" data-aos-delay="1000">
              <h2>Passions</h2>
              <h3>Ski</h3>
              <p>I was on skis for the first time at two years old. <br />
                This passion never lost me, and today I practice alot, especially Freeski.<br />
                Skiing is my way to empty my mind, make some sport and enjoy the moment, to be more focused and improve my efficency during work time.</p>
              <h3>Technology</h3>
              <p>Impossible to escape there being born at this time! Technology is now totaly essential for all of us, and contributing to this new area by developing application is for me a huge priviledge and satisfaction. I also love videogame, especially online PC like LoL, WoW..</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default About;