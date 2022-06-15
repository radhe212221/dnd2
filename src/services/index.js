import axios from 'axios'
const users = 'https://fbecomm-8bab6-default-rtdb.firebaseio.com/dndusers.json'
const site = 'https://fbecomm-8bab6-default-rtdb.firebaseio.com/dndsite'


const transform = ob => {
    let x = Object.keys(ob)
    let y = Object.values(ob)
    let temp = []
    for (let i = 0; i < x.length; i++) {
        temp.push({
            id: x[i],
            ...y[i]
        })
    }
    return temp
}

export const loginService = async (data) => {
    const { email, password } = data
    let resp = await axios.get(users).then(d => transform(d.data)).catch(e => null)
    if (!resp) return null
    let user = resp.find(x => x.email === email && x.password === password)
    if (!user) return null
    return user
}
export const signupService = async (data) => {
    let resp = await axios.post(users, data).then(d => d?.data?.name).then(id => ({ ...data, id })).catch(e => null)
    return resp
}



