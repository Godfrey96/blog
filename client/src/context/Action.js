// this is going to start the login and wait for successful or failer & not return anything
export const LoginStart = (userCredentials) => ({
    type: 'LOGIN_START'
})

// this is going to return user information
export const LoginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user
})

export const LoginFailer = () => ({
    type: 'LOGIN_FAILER'
})

export const Logout = () => ({
    type: 'LOGOUT'
})

export const UpdateStart = (userCredentials) => ({
    type: 'UPDATE_START'
})

// this is going to return user information
export const UpdateSuccess = (user) => ({
    type: 'UPDATE_SUCCESS',
    payload: user
})

export const UpdateFailer = () => ({
    type: 'UPDATE_FAILER'
})