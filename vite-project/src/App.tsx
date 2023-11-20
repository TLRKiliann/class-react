import { Component } from 'react'
import SecondClass from './components/SecondClass'
import './App.css'

type DataProps = {
  name: string;
  age: number;
}

class App extends Component<{}, DataProps> {
  state: DataProps = {
      name: "Esteban Catanea",
      age: 44
  }
  
  render () {

    const {name, age} = this.state;

    return (
      <>
        <h1>first class app</h1>
        {name}
        <hr />
        <SecondClass
          name={name}
          age={age}
        />
      </>
    )
  }
}

export default App;
