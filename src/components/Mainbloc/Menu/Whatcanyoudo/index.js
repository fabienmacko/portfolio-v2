import React, { useState } from 'react';
import Typed from 'react-typed';
import MySwal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import './whatcanyoudo.scss';

class Whatcanyoudo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showSkills: false};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({showSkills: true});
    }, 13000);
  }

  Swal = withReactContent(MySwal);

  ipAPI = 'https://api.ipify.org?format=json';

  showApiAlert = () => {
    this.Swal.queue([{
      title: 'Your public IP',
      confirmButtonText: 'Show my public IP',
      text:
        'Your public IP will be received ' +
        'via AJAX request',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return fetch(this.ipAPI)
          .then(response => response.json())
          .then(data => this.Swal.insertQueueStep("Here is your ip: " + data.ip + " &#128526"))
          .catch(() => {
            this.Swal.insertQueueStep({
              type: 'error',
              title: 'Unable to get your public IP'
            })
          })
      }
    }])
  }

  showClickAlert = () => {

  }
  render() {
    return (
      <div id="whatcanyoudo">
        <div className="section-title">
          <div data-aos="fade-right">What can you do?</div>
          <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
        </div>
        <div className="content">
          <div className="text">
            <Typed
              strings={['I can work on pretty much everything regarding the differents stacks of Web Development. <br>Front, back, modern technologies, general knowledges about the web development operation, finnaly, everything is needed to create valuables applications. <br>But I prefer talk less and do more. <br>Let me show you what kind of things I can do.']}
              typeSpeed={25}
              backSpeed={10} >
            </Typed>
          </div>
          {
            this.state.showSkills && (
              <div className="skills" data-aos="zoom-in">
                <div className="skill" data-aos="fade-left" data-aos-delay="200">
                  <h3>Get your IP Address with an API call using AJAX technology</h3>
                  <div className="btn btn-one" onClick={this.showApiAlert}>
                    <span>Oh really? Show me!</span>
                  </div>
                </div>
                <div className="skill" data-aos="fade-left" data-aos-delay="600">
                  <h3>Show you how many time you "clicked" since you are on this website using Redux data storing</h3>
                  <div className="btn btn-one" onClick={this.showClickAlert}>
                    <span>No way! How many time?</span>
                  </div>
                </div>
                <div className="skill" data-aos="fade-left" data-aos-delay="1000">
                  <h3>Get your IP Address with an API call using AJAX technology</h3>
                  <div className="btn btn-one" onClick={this.showApiAlert}>
                    <span>Oh really? Show me!</span>
                  </div>
                </div>
              </div>)
          }
        </div>
      </div>
    );
  }
}


export default Whatcanyoudo;
