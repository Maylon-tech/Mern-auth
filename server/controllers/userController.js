import User from '../models/userModel.js'


export const userLogin = async (req, res) => {
    res.json({
        message: "this is the Login Controlelr from User SignIn Auth"
    })
}


export const Register = async (req, res) => {
    res.json({
        message: "this is the Register Controller for Fisrt Create"
    })
}

export const logOut = async (req, res) => {
    res.json({
        message: "Loggin Out with user Credentials."
    })
}