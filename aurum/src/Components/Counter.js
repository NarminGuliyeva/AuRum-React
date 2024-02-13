import React from 'react'
import { useEffect, useState } from 'react';
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

function Counter() {
    const [counterOn, setCounterOn] = useState(false);

    return (
        <section className='counter'>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                <div className='container row'>
                    <div className='col-sm-4'>
                        <h1>
                            {counterOn && <CountUp start={0} end={90} duration={2} delay={0} />}
                        </h1>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>
                    <div className='col-sm-4'>
                        <h1>
                            {counterOn && <CountUp start={0} end={142} duration={2} delay={0} />}
                        </h1>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>
                    <div className='col-sm-4'>
                        <h1>
                            {counterOn && <CountUp start={0} end={59} duration={2} delay={0} />}
                        </h1>
                        <h2>Lorem Ipsum</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>
                </div>
            </ScrollTrigger>
        </section>
    )
}

export default Counter