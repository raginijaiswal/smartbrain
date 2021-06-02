import React,{Component} from 'react'
import './App.css';
import Clarifai,{version} from 'clarifai';
import Navigation from './components/Navigation/navigation';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Particles from 'react-particles-js';
import FaceRecognization from './components/FaceRecognization/FaceRecognization'


const app = new Clarifai.App({
  apiKey: '8557edecb35341d3a53c529149937f7a'

});

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
      imageUrl:''
    }
  }

onInputChange = (event) => {
  this.setState({input: event.target.value});
}

onButtonSubmit =() => {
  this.setState({imageUrl: this.state.input});
  console.log(this.state.imageUrl);
  app.models.predict(
    {id:'f76196b43bbd45c99b4f3cd8e8b40a8a', version:{version}}, 
    this.state.input)
    .then(
      function(response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
      },
      function(err) {
        // there was an error
      }
);
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
        <FaceRecognization imageUrl={this.state.imageUrl}/>
        {/*    
        
        
        <header className="App-header">
          
        </header> */}
      </div>
    );
  }
  
}

export default App;
