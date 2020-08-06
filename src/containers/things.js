import { connect } from 'react-redux';
import React, { Component } from 'react';
import Submit from '../components/submit';

class Things extends Component {

    render(){
        return (
            <div>
                <h1>Things worked out!</h1>
                <Submit/>
                
            </div>
        )
    }

}


const mapStateToProps = state => ({
    allVeg:state.allVeg
})
export default connect(mapStateToProps)(Things)