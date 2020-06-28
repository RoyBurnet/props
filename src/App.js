import React, {Component} from 'react';

class App extends Component {
render(){
  return (
    <div className="App">
      <h1>App Component</h1>
      <PersonInfo name="Jermain" occupation="software engineer" />
      <TotalScore points="3" />
    </div>
  );
}
}

const PersonInfo = ({ name, occupation }) => {
  return (
    <div>
      <h2>Display name: {name} </h2>
      <h3>occupation: {occupation}</h3>
    </div>
  );
};

const TotalScore = (props) => {
  return (
    <div>
      score: {props.points}
    </div>
  )
}

export default App;
