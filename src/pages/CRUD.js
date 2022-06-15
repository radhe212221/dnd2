import React, { useState } from 'react'

const TEAM = { src: "", h2: "", h3: "", h4: "", a: "#" }
const PRICE = { name: "", price: "", a: "" }

export default function CRUD() {
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

    return (
        <div className='crud'>
            <h1>CRUD-form</h1>
            {JSON.stringify(ob)}
            <div>
                <input onChange={handleChange} placeholder='header.data.logo' />
                <input onChange={handleChange} placeholder='header.data.links' />
                <br />
                <input onChange={handleChange} placeholder='about.data' />
                <input onChange={handleChange} placeholder='contact.data' />
                <input onChange={handleChange} placeholder='services.data' />
                {ob.team.data.map((x, i) => <div>
                    <input onChange={handleChange} placeholder={`team.data.${i}.src`} />
                    <input onChange={handleChange} placeholder={`team.data.${i}.h2`} />
                    <input onChange={handleChange} placeholder={`team.data.${i}.h3`} />
                    <input onChange={handleChange} placeholder={`team.data.${i}.h4`} />
                    <input onChange={handleChange} placeholder={`team.data.${i}.a`} />
                    <button onClick={addmoreteam}>+</button>
                </div>)}
                {ob.price.data.map((x, i) => <div>
                    <input onChange={handleChange} placeholder={`price.data.${i}.name`} />
                    <input onChange={handleChange} placeholder={`price.data.${i}.price`} />
                    <input onChange={handleChange} placeholder={`price.data.${i}.a`} />
                    <button onClick={addmoreprice}>+</button>
                </div>)}

                <input onChange={handleChange} placeholder='map.data' />
                <input onChange={handleChange} placeholder='footer.data' />


            </div>
        </div>
    )
}
