import React from "react";
import {getSingle} from "../utils";

export default class ClassComponentExample extends React.Component {
    state = {
        data: {},
    };

    componentDidMount() {
        console.log('ComponentDidMount:');
        const data = getSingle(this.props.id);
        this.setState({data})
    };

    componentDidUpdate(prevProps){
        console.log('ComponentDidUpdate:');
        if(prevProps.id !== this.props.id){
            const data = getSingle(this.props.id);
            this.setState({data})
        }
    };

    render(){
    return(
        <pre>
            ClassComponentExample
            {JSON.stringify(this.state.data, null, 2 )}
        </pre>
    )
    }
}