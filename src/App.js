import React from 'react';
import Table from './Table';

const characters = [
  {
    'name': 'Charlie',
    'job': 'Janitor'
  },
  {
      'name': 'Mac',
      'job': 'Bouncer'
  },
  {
      'name': 'Dee',
      'job': 'Aspring actress'
  },
  {
      'name': 'Dennis',
      'job': 'Bartender'
  }
];

class App extends React.Component{
  state = { characters };

  removeCharacter = index => {
    const characters = this.state.characters;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  }

  render() {
    return (
      <div className="container">
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
      </div>
    );
  }
}

export default App;