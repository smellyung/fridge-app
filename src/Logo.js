import React from 'react';
// import logo from './img/fridge-close.svg';

const imagesPath = {
  o: require('./img/fridge-open.svg'),
  c: require('./img/fridge-close.svg')
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
        {/* <img src={logo} className='App-logo' alt='logo' /> */}
        <img style={{ height: '15vmin' }} src={imagesPath[imageName]} alt='Fridge' onClick={this.toggleImage} />
      </>
    );
  }
}

export default Logo;
