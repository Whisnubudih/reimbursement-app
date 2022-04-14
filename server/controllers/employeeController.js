const {User } = require('../models/index')
const bcrypt = require('bcrypt')
const {signToken} = require('../helpers/jwt')

const employeeRegister = async(req,res,next)=>{
    try {
        const {name,password,employeeID,role,bankAccount} = req.body
        const result = await User.create({
            name,password,employeeID,role: 'employee',bankAccount
        })
        res.status(201).json({
            id:result.id,
            employeeID:result.employeeID,
            
        })

    } catch (error) {
        next(error)
    }
}

const employeeLogin = async(req,res,next)=>{
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

       if(result.role == 'admin'){
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

const editUser = async (req,res,next) => {
    try {
        
        const { id } = req.params
        const {name,bankAccount} = req.body
       
        const findUser = await User.findByPk(id)
        if (!findUser) {
            throw { name: "notFound"}
        } 
      
        const result = await User.update({
            name,bankAccount
        },
        {
            where: {id},
            returning: true
        })
    
        res.status(201).json(result[1][0])
    } catch (err) {
        next(err)
    }
}

module.exports = {employeeLogin, employeeRegister,editUser}