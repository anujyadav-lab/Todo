import React from 'react'
class Car extends React.Component{
    render(props){
        return<h1>Hi,I am a car {this.props.color}!</h1>
    }
}
export default Car;
