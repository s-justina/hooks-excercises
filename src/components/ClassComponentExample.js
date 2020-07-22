import React from "react";
import {getSingle} from "../utils";

export default class ClassComponentExample extends React.Component {
    state = {
        data: {},
    };

    componentDidMount() {
        console.log('ComponentDidMount:')
    }

    componentDidUpdate(prevProps){
        console.log('ComponentDidUpdate:')
    }

    render(){
    return(
        <pre>
            ClassComponentExample
            {JSON.stringify(this.state.data, null, 2 )}
        </pre>
    )
    }
}