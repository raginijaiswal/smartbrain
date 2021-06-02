import React,{Component} from 'react'
import './App.css';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';

const particlesOptions ={
  interactivity: {
    
    events: {
      // onClick: {
      //   enable: true,
      //   mode: "push",
      // },
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },  
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5,
      },
    },
  },
  number: {
    density: {
      enable: true,
      value_area: 800,
    },
    value: 80,
  },
}

class App extends Component {
  constructor(){
    super();
    this.state ={
      input: '',
    }
  }

onInputChange = (event) => {
  console.log(event.target.value);
}

onButtonSubmit =() => {
  console.log('click')
}

  render(){
    return (
      <div className="App">
         
        <Particles 
        className='particles'
        
          params = {particlesOptions}
        />
        
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}/>
        {/*    
        
        <FaceRecognization />
        <header className="App-header">
          
        </header> */}
      </div>
    );
  }
  
}

export default App;
