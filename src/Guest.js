import React,{Component} from 'react'
export default class Guest extends Component{
    render(){
        return(
            <>
                <h1>Welcome Guest</h1>
                <button onClick={this.props.clickData}>login</button>
            </>
        )
    }
}


