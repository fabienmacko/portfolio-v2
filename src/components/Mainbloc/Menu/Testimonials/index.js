import React from 'react';
import axios from 'axios';
import './testimonials.scss';

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
class Testimonials extends React.Component {
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
            <div>
              <h2>Testimonials</h2>
              <div className="carousel">
              {
                posts.map(post => <Container pseudo={post.pseudo} description={post.description} id={post._id} />)
              }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Testimonials;