import React, {Component} from 'react';

import data from '../data/showcase-data';

import Codepen from '../components/codepen';
import Description from '../components/description';


export default class Showcase extends Component {
  constructor(){
    super();
    this.state = {
      activeIdx: null,
      showcases: data
    };
  }
  render() {
    return (
      <div id="work">
        {this.state.showcases.map((showcase, i) => {
          let content = null;
          const idName = showcase.title.replace(/\s/g, '-');
          if (this.state.activeIdx === i) {
            content = (
              <div className='main'>
                <Codepen hash={showcase.hash} height={showcase.height}/>
                <Description content={showcase.description} />
              </div>
            )
          }
          return (
            <div
              className={showcase.fullWidth ? 'showcase full-width' : 'showcase'}
              id={idName}
              key={i}
              >
              <a href={`#${idName}`}>
                <h2
                  onClick={() => this.handleClick(i)}
                  className={this.state.activeIdx === i ? 'active': ''}
                  >
                {showcase.title}
                </h2>
              </a>
              {content}
            </div>
          );
        })}
      </div>
    )
  }
  handleClick(i){
    if (i === this.state.activeIdx) {
      this.setState({
        activeIdx: null
      });
    } else {
      this.setState({
        activeIdx: i
      });
    }
  }
}
