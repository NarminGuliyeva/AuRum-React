import React from 'react'
import Layout from '../Components/Layout'
import Whyus from '../Components/Whyus'
import Counter from '../Components/Counter'
import Partners from '../Components/Partners'
import Ceo from '../Components/Ceo'
import Certificates from '../Components/Certificates'
import Team from '../Components/Team'

function About() {
  return (
    <Layout>
      <Whyus/>
      <Ceo/>
      <Certificates/>
      <Partners/>
      <Team/>
      <Counter/>
    </Layout>
  )
}

export default About