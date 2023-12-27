import React from 'react'
import Layout from '../Components/Layout'
import Apply from '../Components/Apply'

function Elaqe() {
    return (
        <Layout>
            <section className='bg-section contact-section'>
                <div className='container'>
                    <div className='col-sm-4 contact'>
                        <p>Bakı şəh., Üzeyir Hacibeyov, 5/34A</p>
                        <p>
                            <span>Tel:</span>
                            <span>
                                <p>+994 55 6666600</p>
                                <p>+994 55 6666600</p>
                            </span>
                        </p>
                        <p>
                            <span>Mail:</span>
                            <span>info@aurum.com</span>
                        </p>
                    </div>
                    <div className='contact-apply'>
                        <Apply />
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Elaqe