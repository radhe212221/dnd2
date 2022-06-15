import React, { useEffect, useState } from 'react'
import Header from '../comp/header'
import About from '../comp/about'
import Contact from '../comp/contact'
import Services from '../comp/services'
import Team from '../comp/team'
import Price from '../comp/price'
import Map from '../comp/map'
import Footer from '../comp/footer'
import axios from 'axios'
import { transform } from '../services'
const site = 'https://fbecomm-8bab6-default-rtdb.firebaseio.com/dndsite.json'
export default function Site() {
    const [ob,setob]=useState(null)
    const boot = () => {
        axios.get(site)
            .then(d => transform(d.data))
            .then(d=>d[0])
            .then(d=>d.data)
            .then(d=>JSON.parse(d) )
            .then(d=>setob(d))
    }
    useEffect(boot, [])
    if(!ob) return null
    return (
        <div>
            <Header {...ob} />
            <About {...ob}  />
            <Contact {...ob}  />
            <Services {...ob}  />
            <Team {...ob}  />
            <Price {...ob} />
            <Map {...ob} />
            <Footer {...ob} />
        </div>
    )
}
