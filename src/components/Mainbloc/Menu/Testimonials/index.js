import React from 'react';
import axios from 'axios';
import './testimonials.scss';
import { setInterval } from 'core-js';

const Container = ({ pseudo, description, id }) => {

  return (
    <div className="comment" key={id} id={id}>
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
          maxWidth: "100%",
          color: "white",
          overflow: "auto",
          textAlign: "left",
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
class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          pseudo: "Fabien",
          description: "Coucou test comment",
          id: "2130912398123"
        },
        {
          pseudo: "Fabien",
          description: "Coucou test comment 2",
          id: "2130912398123"
        },
        {
          pseudo: "Fabien",
          description: "Coucou test comment 3",
          id: "2130912398123"
        },
        {
          pseudo: "Fabien",
          description: "loremloremloremloremloremlorem loremloremloreml oremloremloremloremlorem loremloremloremloremloremloremlo remloremloremloremloremlorem lorem loremloremloremloremloreml oremloremloremloremloremlor emloremloremloremlorem emloremloremloremlorem emloremloremloremlorem emloremloremloremlorem emloremloremloremlorem emloremloremloremlorem emloremloremloremlorem emloremloremloremlorem emloremloremloremlorem emloremloremloremlorem",
          id: "2130912398123"
        }]
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3001/comments')
      .then((response) => {
        // handle success
        console.log(response);
        // this.setState({ posts: response.data });

      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
    let currentComment = 1;
    document.querySelectorAll(".comment")[0].classList.add("open");
      setInterval(() => {
        document.querySelectorAll(".comment").forEach((comment) => {
          comment.classList.remove("open");
        });
        console.log(document.querySelectorAll(".comment")[currentComment]);

        document.querySelectorAll(".comment")[currentComment].classList.add("open");
        currentComment++;
        if (currentComment === this.state.posts.length) {
          currentComment = 0;
        }
      }, 3000);
  }
  render() {
    const { posts } = this.state;
    return (
      <div id="testimonials">
        <div className="section-title">
          <div data-aos="fade-right">Testimonials</div>
          <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
        </div>
        <div className="content">
          <div className="text">
            Comments about websites, linkedin recommendations, everything is here. If you also want to see your comment down below, go on "What you can do" section. <span role="img" aria-label="Clin d'oeil">😉</span>
          </div>
          <div className="testimonials-container animated-border">
            <h2>Testimonials</h2>
            <div className="carousel">
              {
                posts.map(post => <Container pseudo={post.pseudo} description={post.description} id={post._id} />)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Testimonials;