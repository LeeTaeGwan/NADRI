export const LOGIN_CLICK = 'LOGIN_CLICK'
export const SIGNUP_CLICK = 'SIGNUP_CLICK'

export const loginModal = (LoginModalState) => {
  return {
    type: LOGIN_CLICK,
    payload: {
      LoginModalState
    }
  }
}

export const signupModal = (SignupModalState) => {
  return {
    type: SIGNUP_CLICK,
    payload: {
      SignupModalState
    }
  }
}