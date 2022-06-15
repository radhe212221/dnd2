import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux'

const TEAM = { src: "", h2: "", h3: "", h4: "", a: "#" }
const PRICE = { name: "", price: "", a: "" }
const url = `https://fbecomm-8bab6-default-rtdb.firebaseio.com/dndsite.json`
export default function CRUD() {
    const state = useSelector(s => s)
    const ref = useRef()
    const [ob, setob] = useState({
        header: { data: { logo: "", links: '' } },
        about: { data: '' },
        contact: { data: '' },
        services: { data: '' },
        team: { data: [TEAM] },//pending
        price: { data: [PRICE] },//pending
        map: { data: '' },
        footer: { data: '' },
    })

    const addmoreteam = () => {
        setob({ ...ob, team: { data: [...ob.team.data, TEAM] } })
    }
    const addmoreprice = () => {
        setob({ ...ob, price: { data: [...ob.price.data, PRICE] } })
    }
    const handleChange = e => {

    }

    const create = () => {
        let temp = {}
        let c = ref?.current?.querySelectorAll("input")
        c = Array.from(c)
        c = c.map(x => ({ [x.placeholder]: x.value }))
        // c=c.map(x=>({name:x.placeholder,val:x.value}))
        // console.log("lkj", c)
        for (let item of c) {
            temp = { ...temp, ...item }
        }
        // console.log("lkj", temp)
        // setob(temp)
        let payload = {
            uid: state?.user?.id,
            data: JSON.stringify(temp)
        }
        axios.post(url, payload)
    }

    return (
        <div className='crud'>
            <h1>CRUD-form</h1>
            {JSON.stringify(ob)}
            <div ref={ref}>
                <input onChange={handleChange} placeholder='header.data.logo' />
                <input onChange={handleChange} placeholder='header.data.links' />
                <br />
                <input onChange={handleChange} placeholder='about.data' />
                <input onChange={handleChange} placeholder='contact.data' />
                <input onChange={handleChange} placeholder='services.data' />
                {ob.team.data.map((x, i) => <div>
                    <input onChange={handleChange} placeholder={`team.data[${i}].src`} />
                    <input onChange={handleChange} placeholder={`team.data[${i}].h2`} />
                    <input onChange={handleChange} placeholder={`team.data[${i}].h3`} />
                    <input onChange={handleChange} placeholder={`team.data[${i}].h4`} />
                    <input onChange={handleChange} placeholder={`team.data[${i}].a`} />
                    <button onClick={addmoreteam}>+</button>
                </div>)}
                {ob.price.data.map((x, i) => <div>
                    <input onChange={handleChange} placeholder={`price.data[${i}].name`} />
                    <input onChange={handleChange} placeholder={`price.data[${i}].price`} />
                    <input onChange={handleChange} placeholder={`price.data[${i}].a`} />
                    <button onClick={addmoreprice}>+</button>
                </div>)}

                <input onChange={handleChange} placeholder='map.data' />
                <input onChange={handleChange} placeholder='footer.data' />

                <button onClick={create}>create</button>

            </div>
        </div>
    )
}
