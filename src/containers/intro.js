import React, {Component} from 'react'

export default class extends Component {
  constructor(){
    super();
    this.state = {
      height: ''
    }
    this.handleResize = this.handleResize.bind(this);
  }
  componentWillMount(){
    this.setState({
      height: window.innerHeight + 'px'
    });
  }
  componentWillMount(){
    window.removeEventListener('resize', this.handleResize);
  }
  componentDidMount(){
    window.addEventListener('resize', this.handleResize);
  }
  handleResize(e){
    this.setState({height: e.target.innerHeight});
  }
  render(){
    const divStyle = {
      height: window.innerHeight
    }
    return (
      <div className="content intro" style={divStyle}>
        <div>
          <h1>Hello. My name is Peter Daily and I'm a new web developer.</h1>
          <p>A succesful Business Analyst and Operational Manager, I've recently found a passion for front end web development.</p>
          <p>Scroll down to see what I've been up to!</p>
        </div>
      </div>
    );
  }

}
