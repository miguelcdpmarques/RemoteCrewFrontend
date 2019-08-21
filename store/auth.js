import axios from 'axios'

export const state = () => ({
    infoMessages: [],
    userIsAuthenticated: false,
    role: 'admin',
    token: null,
})

export const mutations = {
    setToken(state, token) {
        state.token = token
    },
    clearToken(state) {
        state.token = ''
    },
    setInfoMessage(state, message) {
        state.infoMessages.push(message)
    },
    clearInfoMessages(state) {
        state.infoMessages = []
    }
}

export const actions = {
    loginUser(context, authData) {
        return axios.post('http://127.0.0.1:5000/api/login', authData)
            .then(response => {
                console.log("Data being received", response.data)
                context.commit('setToken', response.data.access_token)
            })
            .catch(error => {
                console.log("There is an error in the action", error)
                context.commit('setInfoMessage', error.response.data.message)
                setTimeout(() => context.commit('clearInfoMessages'), 3000)
            })
    },
    registerUser(context, authData) {
        return axios.post('http://127.0.0.1:5000/api/register', authData)
            .then(response => {
                console.log("Data being received", response.data)
                context.commit('setToken', response.data.access_token)
            })
            .catch(error => {
                console.log("There is an error in the action", error)
                context.commit('setInfoMessage', error.response.data.message)
                setTimeout(() => context.commit('clearInfoMessages'), 3000)
            })
    }
}

export const getters = {
    isAuthenticated(state) {
        return state.token != null
    }
}