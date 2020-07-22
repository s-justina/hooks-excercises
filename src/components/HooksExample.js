import React, {useState} from 'react';
import {getSingle} from "../utils";

export default function HooksExample({id}){
    const [data, setData] = useState();

    return(
        <React.Fragment>
          <pre>
              HooksExample
              {JSON.stringify({data}, null, 2)}
          </pre>
        </React.Fragment>
    )
};