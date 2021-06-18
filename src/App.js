import React from 'react';
import './App.css';
import Map from './components/Map';
import { Console } from '@cryptosat/jsconsole';
import ControlBar from './components/ControlBar';
import CoverageArea from './components/CoverageArea';
import SatelliteInfoBar from './components/SatelliteInfoBar';
import Trajectory from './components/Trajectory';
import {universe, gsnetwork} from './demo';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      satelliteId: universe.satellites().keys().next().value,
      displayCoverage: false,
      displayTrajectory: false,
    };
  }

  setSatellite(satelliteId) {
    this.setState({satelliteId: satelliteId});
  }

  setCoverageDisplay(value) {
    this.setState({displayCoverage: value});
  }

  setTrajectoryDisplay(value) {
    this.setState({displayTrajectory: value});
  }

  render() {
    const payload = {
      universe: universe,
    }
    const sat = universe.satellites().get(this.state.satelliteId);
    let trajectory = this.state.displayTrajectory ? <Trajectory satellite={sat}/> : null;
    let coverage = this.state.displayCoverage ? <CoverageArea satellite={sat}/> : null;
    return (
      <div className='main split-pane-horizontal'>
        <div className='left-pane' style={{backgroundColor: '#282c34', position: 'fixed', left: 0, top: 0, width: '50%', height: '100%'}}>
          <h1>Hello, World!</h1>
        </div>
        <div className='right-pane' style={{position: 'fixed', left: '50%', height: '100%', top: 0}}>
          <div className='top-pane' style={{backgroundColor: '#282c34', overflowY: 'scroll', height: '50%'}}>
            <Console payload={payload} />
          </div>
          <div className='bottom-pane' style={{position: 'fixed', height: '50%', width: '100%'}}>
            <ControlBar universe={universe}
                setSatellite={this.setSatellite.bind(this)}
                setCoverageDisplay={this.setCoverageDisplay.bind(this)}
                setTrajectoryDisplay={this.setTrajectoryDisplay.bind(this)}/>
            <Map universe={universe}>
              {coverage}
              {trajectory}
            </Map>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
