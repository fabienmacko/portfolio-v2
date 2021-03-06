import React from 'react';
import MySwal from 'sweetalert2';
import axios from 'axios';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import withReactContent from 'sweetalert2-react-content';

import './whatcanyoudo.scss';

import Comment from '../../../Comment';

class Whatcanyoudo extends React.Component {

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

  escapeHtml = (text) => {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  Swal = withReactContent(MySwal);

  ipAPI = 'https://api.ipify.org?format=json';

  showApiAlert = () => {
    this.Swal.queue([{
      title: 'Your public IP',
      confirmButtonText: 'Show my public IP',
      text:
        'Your public IP will be received via AJAX request',
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
    const { clickCounter } = this.props;
    const before = clickCounter > 1 ? " times" : " time";
    const now = (clickCounter + 1) > 1 ? " times" : " time";

    this.Swal.fire(
      'How many time you clicked?',
      '<p>Before clicking this button you clicked <span style="color: #c57b39">' + clickCounter + before + "</span>... But now you clicked <span style='color: #c57b39'>" + (clickCounter + 1) + now + "</span>! &#128561</p>",
      'info'
    )
  }

  showAppreciationAlert = () => {
    this.Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2', '3', '4']
    }).queue([
      {
        title: 'Your name?',
      },
      {
        title: 'Your job title?',
      },
      {
        title: 'Your company?',
      },
      {
        title: 'Your comment?',
      },
    ]).then((result) => {
      if (result.value) {
        const [name, jobTitle, company, comment] = [result.value[0], result.value[1], result.value[2], result.value[3]];

        axios.post(process.env.REACT_APP_API_URL+'/comments/insert', {
          name,
          jobTitle,
          company,
          comment
        })
          .then(function (response) {
            // handle success
            console.log('Comment successfully inserted');
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
        this.Swal.fire({
          title: 'Thanks! Your appreciation has been successfully added. You will find it in the "Testimonials" section.',
          html: <Comment name={name} jobTitle={jobTitle} company={company} comment={comment} />,
          showCancelButton: true,
          confirmButtonText: '<a style="text-decoration: none !important;color: white !important;" href="/testimonials">View my comment!</a>',
          cancelButtonText: 'Stay here'
        })
      }
    })
  }

  render() {
    return (
      <div id="whatcanyoudo">
        <div className="section-title">
          <div data-aos="fade-right">What can I do?</div>
          <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
        </div>
        <div className="content">
          <div className="text">
            I can work on pretty much everything regarding the differents stacks of Web Development. Front, back, finnaly, everything is needed to create valuables applications.<br />But I prefer to talk less and do more.<br />Let me show you what kind of things I can do.
          </div>

          <div className="container skills animated-border" data-aos="zoom-in">
            <div className="item skill" data-aos="fade-left" data-aos-delay="200" ref={(e) => this.first = e}>
              <h3>Get your IP Address with an API call using AJAX technology</h3>
              <div className="btn btn-one" onClick={this.showApiAlert}>
                <span>Oh really? Show me!</span>
              </div>
            </div>
            <div className="item skill" data-aos="fade-left" data-aos-delay="400" ref={(e) => this.second = e}>
              <h3>Show you how many times you "clicked" since you are on this website using Redux to store globally the state of the application</h3>
              <div className="btn btn-one" onClick={this.showClickAlert}>
                <span>No way! How many times?</span>
              </div>
            </div>
            <div className="item skill" data-aos="fade-left" data-aos-delay="600" ref={(e) => this.third = e}>
              <h3>Storing your appreciation of this website in database using Node.js and Cloud MongoDB Atlas</h3>
              <div className="btn btn-one" onClick={this.showAppreciationAlert}>
                <span>Let me add a comment!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Whatcanyoudo;
