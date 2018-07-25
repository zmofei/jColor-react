import React from 'react';
import jColor from 'jcolor';

class JColorReact extends React.Component {

    constructor(){
        super();
    }

    componentDidMount() {
        console.log(this.props)
        new jColor(this.refs.box, this.props );
    }

    render() {
        return (
            <div ref="box" />
        );
    }
}

export default JColorReact;
