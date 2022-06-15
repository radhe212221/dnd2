import axios from 'axios'
const users = 'https://fbecomm-8bab6-default-rtdb.firebaseio.com/dndusers.json'
const site = 'https://fbecomm-8bab6-default-rtdb.firebaseio.com/dndsite.json'


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

export const allSites = async () => {
    let resp = await axios.get(site).then(d => transform(d.data)).catch(e => null)
    return resp
}

export const mySite = async (userId) => {
    let resp = await allSites()
    if (!resp) return null
    let myData = resp.find(x => x.uid === userId)
    return myData
}

export const exists = async userId => {
    let exists = await mySite(userId)
    return !!exists
}

export const create = async (payload) => {
    let { uid, data } = payload
    let condition = await exists(uid)
    if (condition) {
        // patch
    }
    else {
        // post
    }
}