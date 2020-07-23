import React, {useState, useEffect} from 'react';
import {getSingle} from "../utils";

export default function HooksExample({id}){
    const [data, setData] = useState();
    const [dommyData, setDommyData] = useState(0)
    useEffect(()=>{
        console.log('functional component with hook: 1');
        const data = getSingle(id);
        console.log(data);
        setData(data);
    }, [id]);
    useEffect(()=>{
        console.log('functional component with hook: 2 - dommy data:');
    },[dommyData]);

    return(
        <React.Fragment>
          <pre>
              HooksExample
              {JSON.stringify({data}, null, 2)}
          </pre>
            <button onClick={()=>setDommyData(dommyData+1)}>change dommy data</button>
        </React.Fragment>
    )
};