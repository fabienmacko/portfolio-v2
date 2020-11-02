import React from 'react';
import axios from 'axios';
import './testimonials.scss';
import Comment from '../../../Comment';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
      
    axios.get(process.env.REACT_APP_API_URL+'/comments')
      .then((response) => {
        // handle success
        this.setState({ posts: response.data });
        console.log(this.state.posts);
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

    if (!posts) return <div>Comments are not fetched yet!</div>
    
    return (
      <div id="testimonials">
        <div className="section-title">
          <div data-aos="fade-right">Testimonials</div>
          <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
        </div>
        
            {
            posts ? (
              <div className="content" data-aos="fade-up" data-aos-delay="0">
              <Carousel showStatus={false} interval={5000} autoPlay infiniteLoop stopOnHover useKeyboardArrows transitionTime={400} selectedItem={this.state.posts.length - 1}>
             { posts.map(({name, jobTitle, company, comment, _id}) => (
                <Comment key={_id} name={name} jobTitle={jobTitle} company={company} comment={comment} id={_id} />
              ))}
              </Carousel>
              </div>
            ) : <div>Comments are loading...</div>
            }
    
      </div>
    );
  }
}


export default Testimonials;