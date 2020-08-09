import { connect } from 'react-redux';
import React, { Component } from 'react';
// import Submit from '../components/submit';

class Things extends Component {
    state = { userInput: "" }
    
    handleChange = e => this.setState({ userInput: e.target.value })

    updateList = e =>  {
        e.preventDefault();
        this.props.addVeg(this.state.userInput);
        this.setState({ userInput: ""})
    }
    
    render() {
        const renderThings = this.props.things.map((th, i)=> <li key={i}>{th}</li>)
        
    return (
        <div> 
        <form>
            <input type="text" id="veg" name="veg" onChange={this.handleChange} value={this.state.userInput} ></input>
            <input type="submit" value="Submit" onClick={this.updateList} ></input>
        </form>

        <ul>
        { renderThings }
        </ul>
        </div>
    )
    }
}

const mapStateToProps = state => ({
    things:state.allVeg
})

const mapsDispatchToProps = dispatch =>({
    addVeg: thing => dispatch({ type: "ADD_THINGS", payload: thing})
})

export default connect(mapStateToProps, mapsDispatchToProps)(Things)