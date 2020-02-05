import React from 'react';
import axios from 'axios';
import './testimonials.scss';

const Container = ({ pseudo, description, id, index }) => {

  return (
    <div className={index === 0 ? "comment open" : "comment"} key={id} id={id}>
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
      posts: [],
    };
  }

  componentDidMount() {
    var i2 = 1;
    this.setState({carousel: setInterval(() => {
      var comments = document.querySelectorAll(".comment");
      for (let i = 0; i < comments.length; i++) {
        const comment = comments[i];
        comment.classList.remove("open");
      }
      comments[i2].classList.add("open");
      if (i2 === comments.length - 1) {
        i2=0;
      } else {
        i2++;
      }
      }, 3000)});
      
    axios.get('https://fabienmackowiak.com:3000/comments')
      .then((response) => {
        // handle success
        console.log(response);
        this.setState({ posts: response.data });

      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      
  }
  componentWillUnmount(){
    clearInterval(this.state.carousel);
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
          <div className="container testimonials-container animated-border">
            <h2>Testimonials</h2>
            <div className="item carousel">
              {
                posts.map((post, index) => <Container index={index} pseudo={post.pseudo} description={post.description} id={post._id} />)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Testimonials;