import { Component } from 'react'
import ThirdClass from './ThirdClass'

type DataProps = {
    name: string;
    age: number;
    strchg: string;
    register: string[];
}

class SecondClass extends Component<{name: string, age: number}, DataProps> {
    constructor(props: {name: string, age: number}) {
        super(props)
        this.state = {
            name: this.props.name,
            age: this.props.age,
            strchg: "",
            register: []
        }  
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
     
    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = e.target;
        this.setState({strchg: value});
    }

    handleClick = () => {
        let { strchg } = this.state;
        let simplyArr = [];
        simplyArr.push(strchg);
        this.setState({register: simplyArr});
    }

    render () {

        console.log(this.props.name)

        const { name } = this.props;
        // age converti de props en state
        const { strchg, register, age } = this.state;

        return (
            <>
                <h2>SecondClass</h2>
                
                <p>{name}</p>
                <p>{age}</p>
                
                <input type="text" value={strchg} onChange={(e) => this.handleChange(e)} />
                <button type="button" onClick={this.handleClick}>Click</button>

                {register.map((regi) => (
                    <p key={regi}>{regi}</p>
                ))}
                <hr />
                <ThirdClass name={name} />
            </>
        )
    }
}

export default SecondClass;

/*
Peut aussi fonctionner avec simple state, mais sans constructor() ni super().
Mais c'est pas bon, car le constructor et l'initialisateur de la class.
Il faut comprendre que l'on passe dans le constructor uniquemment les props
qui viennent du précédent component.

    state: DataProps = {
        name: this.props.name,
        age: this.props.age,
        strchg: "",
        register: []
    }
*/