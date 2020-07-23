import React, {useState, useEffect, useMemo} from 'react';
import {getSingle} from "../utils";
import {useSingleHook} from "../utils";

export default function HooksExample({id}){
    const [data, setData] = useState();
    const [dommyData, setDommyData] = useState(0);

    useEffect(()=>{
        console.log('functional component with hook: 1 - useEffect');
        const data = getSingle(id);
        console.log(data);
        setData(data);
    }, [id]);
    useEffect(()=>{
        console.log('functional component with hook: 2 - useEffect with dommy data:');
    },[dommyData]);
    const memoData=useMemo(()=>{
        console.log('functional component with hook: 3 - useMemo')
        return getSingle(id);
    }, [id]);

    const hookData = useSingleHook(id);

    return(
        <React.Fragment>
          <pre>
              HooksExample
              {JSON.stringify({data}, null, 2)}
              <br/>
              {JSON.stringify({memoData}, null, 2)}
              <br/>
              {JSON.stringify({hookData}, null, 2)}
          </pre>
            <button onClick={()=>setDommyData(dommyData+1)}>change dommy data</button>
        </React.Fragment>
    )
};