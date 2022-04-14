const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employeeController')
const itemController = require('../controllers/reimbursementController')
const adminController = require('../controllers/adminController')
const {authenticationMiddleWare} = require('../middleware/authentication')
const upload = require('../middleware/multer')
const {  uploadImagekit } = require('../middleware/uploadImageKit')


// admin
router.post('/adminlogin',adminController.adminLogin)
router.post('/adminregister',adminController.adminRegister)
router.get('/users', adminController.getUser)
router.get('/usersid',authenticationMiddleWare, adminController.getUserId)

// Employeee
router.post('/employeelogin',employeeController.employeeLogin)
router.post('/employeeregister', employeeController.employeeRegister)

// Reimburement
router.get('/reimbursement', itemController.getReimbursement)
router.get('/action', itemController.getAction)
router.post('/reimbursement',authenticationMiddleWare,upload.single("receipt"),uploadImagekit, itemController.addReimbursement)
router.get('/reimbursementid',authenticationMiddleWare, itemController.getReimbursementId)
router.patch('/status/:id', itemController.updateStatus)

//User
router.put('/users/:id', employeeController.editUser)
module.exports = router