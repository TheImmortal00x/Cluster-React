import {useEffect, useState} from 'react'
import {GetTimer} from "./GetTimer";
import {View} from "./View";

export default function App() {
    const [currencyData, setCurrencyData] = useState(<View/>);
    const [errors, setErrors] = useState(false);
    const [isReady, setReady] = useState(false);
    const getData = () => {
        setReady(false);
        fetchData();
    };

    async function fetchData() {
        const res = await fetch('https://api.ifcityevent.com/currency');

        res.json()
            .then(res => {
                setReady(true);
                setCurrencyData(res);
            })
            .catch(err => setErrors(err));
    }

    useEffect(_ => fetchData(), [setCurrencyData]);

    return (
        <div>
            {errors ? <span>No info!</span> :
             <><View data={currencyData} ready={isReady}/><hr/></>}
                
            <button disabled={!isReady} onClick={getData}>Update</button>
            <GetTimer fetchData={getData}/>
        </div>
    );
}