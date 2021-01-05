import React, { useEffect, useState } from 'react'
import styles from '../scss/master.scss';

export default function Home() {
    const [apiText, setApiText] = useState("");

    useEffect(() => {
        fetch("/api/example/hello")
            .then(res => res.json())
            .then(json => setApiText(json.helloText.text))
            .catch(err => console.log(err.message));
    });
    
    return (
        <div>
            Home page
            <br/>
            Api response: {apiText}
        </div>
    );
};