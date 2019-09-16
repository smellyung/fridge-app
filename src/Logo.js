import React from 'react';
import fridgeOpen from './fridge-open.svg';
import fridgeClose from './fridge-close.svg';



const imagesPath = {
    minus: { fridgeOpen },
    plus: { fridgeClose }
  }
  
  class Logo extends React.Component {
    state = {
      open: true
    }
    toggleImage = () => {
      this.setState(state => ({ open: !state.open }))
    }
  
    getImageName = () => this.state.open ? 'plus' : 'minus'
  
    render() {
      const imageName = this.getImageName();
      return (
        <div id="root">
          <img style={{maxWidth: '50px'}} src={imagesPath[imageName]} alt='Fridge' onClick={this.toggleImage} />
        </div>
      );
    }
  }

export default Logo;
