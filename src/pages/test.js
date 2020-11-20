import React, { useState } from 'react'
import Layout from "../components/layout"
import Gauge from '../components/Guage'
import { RangeInput } from 'grommet';
import "../styles/gauge.css";

const Test = () => {

    const [ gaugeValue, setGaugeValue ] = useState(50);

    return (
        <Layout  title="test">
            <div className='gauge-content-container'>
                <Gauge 
                    value={gaugeValue}
                    // label=''
                />
                <div className="range-input-container">
                    <RangeInput
                        value={gaugeValue}
                        onChange={event => setGaugeValue(event.target.value)}
                    />
                </div>
            </div>
        </Layout>
    );
}

export default Test;