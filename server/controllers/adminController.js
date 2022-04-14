const {User} = require('../models/index')
const bcrypt = require('bcrypt')
const {signToken} = require('../helpers/jwt')

const adminRegister = async(req,res,next)=>{
    try {
        const {name,password,employeeID,role,bankAccount} = req.body
        const result = await User.create({
            name,password,employeeID,role:'admin',bankAccount
        })
        res.status(201).json({
            id:result.id,
            employeeID:result.employeeID,
            
        })

    } catch (error) {
        next(error)
    }
}

const adminLogin = async(req,res,next)=>{
    try {
        const {employeeID,password} = req.body
        if(!employeeID){
            throw {name: "employeeID is required"}
        }
        if(!password){
            throw {name: "Password is required"}
        }

       const result = await User.findOne({
           where:{employeeID}
       })
       if(!result){
        throw {name: "Invalid employeeID/password"}
       }

       if(result.role == 'employee'){
        throw {name : "UNAUTHORIZED"}
    }

       const isPassword = bcrypt.compareSync(password, result.password)
       if(!isPassword){
        throw {name: "Invalid employeeID/password"}
       }
       const payload ={
           id:result.id,
           employeeID:result.employeeID
       }

       const access_token = signToken(payload)
       res.status(200).json({access_token: access_token})

    } catch (error) {
        next(error)
    }
}

const getUser = async (req,res,next) => {
    try {
        const result = await User.findAll()

        res.status(200).json(result)
        
    } catch (error) {
        next(err)
    }
}

const getUserId = async (req,res,next) => {
    try {
        const result = await User.findOne({
            where:{
                id:req.user.id
            }
        })
    if (!result) {
        throw { name: "notFound"}
    }
        res.status(200).json(result)
        
    } catch (err) {
        next(err)
    }
}



module.exports = {adminRegister, adminLogin,getUser,getUserId}