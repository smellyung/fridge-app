import React from 'react';

const imagesPath = {
  o: require('../img/fridge-open.svg'),
  c: require('../img/fridge-close.svg')
}

class Logo extends React.Component {
  state = {
    open: true
  }
  toggleImage = () => {
    this.setState(state => ({ open: !state.open }))
  }

  getImageName = () => this.state.open ? 'c' : 'o'

  render() {
    const imageName = this.getImageName();
    return (
      <>
        <h1>Fridge-App</h1>
        <img style={{ height: '15vmin' }} src={imagesPath[imageName]} alt='Fridge' onClick={this.toggleImage} />
      </>
    );
  }
}

export default Logo;
