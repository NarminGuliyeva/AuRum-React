import React from 'react'
import { useEffect, useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            setCounter(prevCounter => (prevCounter < 90 ? prevCounter + 1 : prevCounter));
          };
 

      window.addEventListener('scroll', handleScroll);

    //   return () => {
    //     window.removeEventListener('scroll', handleScroll);
    //   };
    }, []);
  return (
    <section className='counter'>
        <div className='container row'>
            <div className='col-sm-4'>
                <h1>{counter}</h1>
                <h2>Lorem Ipsum</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
            </div>
            <div className='col-sm-4'>
                <h1>90</h1>
                <h2>Lorem Ipsum</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
            </div>
            <div className='col-sm-4'>
                <h1>90</h1>
                <h2>Lorem Ipsum</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
            </div>
        </div>
    </section>
  )
}

export default Counter