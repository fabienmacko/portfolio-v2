import React from 'react';
import axios from 'axios';
import './about.scss';

const Container = ({ pseudo, description, id }) => {
  console.log(pseudo);

  return (
    <div key={id} id={id}>
      <div style={{
        color: "white",
        display: 'flex',
        flexDirection:'column',
        alignItems:'center',
        width:'60%',
        margin:'0 auto',
        color: 'black',
        border: '2px solid #464646',
        borderRadius:'4px',
        padding: '20px',
        marginTop: '20px',}}>
        <p style={{
          width: "100%",
          color: "white",
        }}>{description}</p>
        <p style={{
          alignSelf: "flex-end",
          fontSize:"1rem",
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
    axios.get('http://localhost:3000/posts')
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
          <div>
            {
              posts.map(post => <Container pseudo={post.pseudo} description={post.description} id={post._id} />)
            }
          </div>
        </div>
      </div>
    );
  }
}


export default About;