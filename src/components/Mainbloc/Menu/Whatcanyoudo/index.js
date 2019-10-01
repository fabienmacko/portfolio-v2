import React from 'react';
import MySwal from 'sweetalert2';
import axios from 'axios';
import withReactContent from 'sweetalert2-react-content';
import './whatcanyoudo.scss';

const Whatcanyoudo = ({ clickCounter }) => {

  const escapeHtml = (text) => {
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  const Swal = withReactContent(MySwal);

  const ipAPI = 'https://api.ipify.org?format=json';

  const showApiAlert = () => {
    Swal.queue([{
      title: 'Your public IP',
      confirmButtonText: 'Show my public IP',
      text:
        'Your public IP will be received via AJAX request',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        return fetch(ipAPI)
          .then(response => response.json())
          .then(data => Swal.insertQueueStep("Here is your ip: " + data.ip + " &#128526"))
          .catch(() => {
            Swal.insertQueueStep({
              type: 'error',
              title: 'Unable to get your public IP'
            })
          })
      }
    }])
  }

  const showClickAlert = () => {
    const before = clickCounter > 1 ? " times" : " time";
    const now = (clickCounter + 1) > 1 ? " times" : " time";

    Swal.fire(
      'How many time you clicked?',
      '<p>Before clicking this button you clicked <span style="color: #c57b39">' + clickCounter + before + "</span>... But now you clicked <span style='color: #c57b39'>" + (clickCounter + 1) + now + "</span>! &#128561</p>",
      'info'
    )
  }

  const showAppreciationAlert = () => {
    Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      progressSteps: ['1', '2']
    }).queue([
      {
        title: 'Your firstname?',
      },
      {
        title: 'Your comment?',
      },
    ]).then((result) => {
      if (result.value) {
        console.log("fetch");
        let pseudo = result.value[0];
        let description = result.value[1];
        axios.post('http://localhost:3001/posts/insert', {
          pseudo,
          description
        })
          .then(function (response) {
            // handle success
            console.log(response);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
        Swal.fire({
          title: 'Thanks! Your appreciation has been successfully added.',
          html:
            '<div style="display:flex;flex-direction:column;align-items:center;width:60%;margin:0 auto;color: black;border: 2px solid #464646;border-radius:4px;padding: 20px;margin-top: 20px;">' +
            '<p style="width: 100%;">' + escapeHtml(result.value[1]) + '</p>' +
            '<p style="align-self: flex-end;font-size: 1rem;opacity: .7;">- ' + escapeHtml(result.value[0]) + '</p>' +
            '</div>',
          confirmButtonText: 'Lovely!'
        })
      }
    })
  }

  return (
    <div id="whatcanyoudo">
      <div className="section-title">
        <div data-aos="fade-right">What can you do?</div>
        <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
      </div>
      <div className="content">
        <div className="text">
          I can work on pretty much everything regarding the differents stacks of Web Development.<br />Front, back, general knowledges and concepts about the web development operation, finnaly, everything is needed to create valuables applications.<br />But I prefer to talk less and do more.<br />Let me show you what kind of things I can do.
        </div>

        <div className="skills animated-border" data-aos="zoom-in">
          <div className="skill" data-aos="fade-left" data-aos-delay="500">
            <h3>Get your IP Address with an API call using AJAX technology</h3>
            <div className="btn btn-one" onClick={showApiAlert}>
              <span>Oh really? Show me!</span>
            </div>
          </div>
          <div className="skill" data-aos="fade-left" data-aos-delay="1000">
            <h3>Show you how many times you "clicked" since you are on this website using Redux to store globally the state of the application</h3>
            <div className="btn btn-one" onClick={showClickAlert}>
              <span>No way! How many times?</span>
            </div>
          </div>
          <div className="skill" data-aos="fade-left" data-aos-delay="1500">
            <h3>Storing your appreciation of this website in database using Node.js and MongoDB</h3>
            <div className="btn btn-one" onClick={showAppreciationAlert}>
              <span>Let me add a comment!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Whatcanyoudo;
