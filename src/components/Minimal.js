import React from 'react';
import PropTypes from 'prop-types';
const FirstComponent = props =>(
    <div>Hello,{props.name} I am a FirstComponent</div>
);
FirstComponent.proTypes ={
    name:PropTypes.string.isRequired,
}
export default FirstComponent;