import React from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from "react-redux";

import Header from './components/header';
import HeroesList from './components/heroesList'
import {
  selectHeroes
} from "./store/actions/index";

class App extends React.Component {
  heroesSelectedHandler = key => {
    this.props.onSelectHeroes(key);
  };
  render() {
    return (
      <View>
        <Header />
        <HeroesList heroes={heroes} onItemSelected={this.heroesSelectedHandler}/>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    heroes: state.heroes.heroes,
    selectedHeroes: state.heroes.selectedHeroes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelectHeroes: key => dispatch(selectHeroes(key))
  };
};

const heroes = [
  {
     name: 'Thor',
     status: 'Heroes',
     avatar: 'http://i.annihil.us/u/prod/marvel/i/mg/d/d0/5269657a74350.jpg',
     desc: 'As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he\'s quite smart and compassionate.  He\'s self-assured, and he would never, ever stop fighting for a worthwhile cause.'
  },
  {
    name: 'Hulk',
    status: 'Heroes',
    avatar: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0.jpg',
    desc: 'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.'
 },
  {
    name: 'Thanos',
    status: 'Villains',
    avatar: 'http://i.annihil.us/u/prod/marvel/i/mg/6/40/5274137e3e2cd.jpg',
    desc: 'The Mad Titan Thanos, a melancholy, brooding individual, consumed with the concept of death, sought out personal power and increased strength, endowing himself with cybernetic implants until he became more powerful than any of his brethren.'
  },
  {
    name: 'Deadpool',
    status: 'Anti-Heroes',
    avatar: 'http://i.annihil.us/u/prod/marvel/i/mg/9/90/5261a86cacb99.jpg',
    desc: ''
  },
  {
    name: 'Wolverine',
    status: 'Heroes',
    avatar: 'http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf.jpg',
    desc: 'Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he\'s a premiere member of both the X-Men and the Avengers.'
  }
 ];

 export default connect(mapStateToProps, mapDispatchToProps)(App);