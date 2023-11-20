import { Component } from "react";

type LastProps = {
    name: string;
    strName: string;
    newName: string[];
}

class ThirdClass extends Component<{name: string}, LastProps> {
    constructor(props: {name: string}) {
        super(props)
        this.state = {
            name: this.props.name,
            strName: "",
            newName: []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { value } = e.target;
        this.setState((prevState) => ({
            ...prevState,
            strName: value
        }));
    }

    handleClick = () => {
        const { strName } = this.state;
        let newArray = []; 
        newArray.push(strName);
        this.setState({newName: newArray})
        this.setState({strName: ""})
    }

    render () {

        // name converted from props to state
        const { name, strName, newName } = this.state;

        return (
            <>
                <h2>Third Class</h2>
                <p>{name}</p>
                
                <input type="text" value={strName} onChange={(e) => this.handleChange(e)} />
                <button type="button" onClick={this.handleClick}>Enter</button>
                <p>{newName}</p>
            </>
        )
    }
}

export default ThirdClass;
