import react, { Component } from 'react';
import { connect } from 'react-redux';
import { addName, updateName } from '../actions/nameActions';

class NameCard extends Component {
    render(){
        return (<ul> { this.props.allname.map(c => <li>{c.name}</li>)} </ul>)
    }
}
const mSTP = state => ({ allname: state.all })
export default connect (mSTP)(NameCard);