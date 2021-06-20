import Satellite from '@cryptosat/cryptosim/lib/satellite';
import Universe from '@cryptosat/cryptosim/lib/universe';
import GroundStationNetwork from '@cryptosat/cryptosim/lib/groundStationNetwork';
import SimulatedClock from '@cryptosat/cryptosim/lib/clocks/simulatedClock';

const clock = new SimulatedClock(new Date(2021, 2, 1, 2, 30, 0, 0));
clock.setSpeed(10);
clock.play();
const universe = new Universe(clock);

const ISS_TLE = [
  '1 25544U 98067A   21027.77992426  .00003336  00000-0  68893-4 0  9991',
  '2 25544  51.6465 317.1909 0002399 302.6503 164.1536 15.48908950266831',
];

const RBLE_TLE = [
  '1 43021U 98067NJ  21130.93518525  .00169040  23633-4  28154-3 0  9999',
  '2 43021  51.6252  22.9400 0003190 190.1758 169.9188 16.02572645198642',
];

const KE2M_TLE = [
  '1 42982U 98067NE  21130.23731665  .00051060  12134-4  16669-3 0  9993',
  '2 42982  51.6283  34.1214 0000609 175.9980 184.1031 15.91220852202660',
];

const sat1 = new Satellite(universe, 'crypto1', ISS_TLE[0], ISS_TLE[1]);
const sat2 = new Satellite(universe, 'crypto2', RBLE_TLE[0], RBLE_TLE[1]);
const sat3 = new Satellite(universe, 'crypto3', KE2M_TLE[0], KE2M_TLE[1]);
const gsnetwork = GroundStationNetwork.load(
    universe, require('@cryptosat/cryptosim/data/rbcNetwork'));

// Make variables accessable to console for debugging
window.universe = universe;
window.gsnetwork = gsnetwork;
window.sat1 = sat1;
window.sat2 = sat2;
window.sat3 = sat3;

export {universe, gsnetwork};
