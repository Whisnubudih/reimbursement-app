const { User,Reimbursement,Action} = require('../models/index')


const getReimbursement = async (req,res,next) => {
    try {
        const result = await Reimbursement.findAll({
            include: [
                {
                    model: Action,
                    
                },
                {
                    model: User,
                    
                }
            ]
        })

        res.status(200).json(result)
        
    } catch (error) {
        next(err)
    }
}



const getReimbursementId = async (req,res,next) => {
    try {
        const result = await Reimbursement.findOne({
            where:{
                id:req.user.id
            },
            include: Action
        })
    if (!result) {
        throw { name: "notFound"}
    }
        res.status(200).json(result)
        
    } catch (err) {
        next(err)
    }
}

const addReimbursement = async (req,res,next) => {
    try {
        const UserId = req.user.id
        
        const { datePurchase, description, amount, receipt, status,ActionId } = req.body
        const result = await Reimbursement.create({datePurchase, description, amount, receipt, status:"submitted",UserId,ActionId:1})
       
        res.status(201).json(result)

    } catch (err) {
        next(err)
    }
}

const updateStatus = async (req,res,next) => {
    try {
        
        const { id } = req.params
        const { ActionId } = req.body
       
        const findReimbursement = await Reimbursement.findByPk(id)
        
        if (!findReimbursement) {
            throw { name: "notFound"}
        } 
       
        const result = await Reimbursement.update({
            ActionId
        },
        {
           where: {id},
           returning: true
            
        })
        if (result[1][0].ActionId == 3) {
            result[1][0].status = 'Rejected';
            const result1 = await Reimbursement.update(
              {
                status: result[1][0].status,
              },
              {
                where: { id },
                returning: true,
              }
            );
          } else if(result[1][0].ActionId == 2) {
            result[1][0].status = 'On Going';
            const result2 = await Reimbursement.update(
              {
                status: result[1][0].status,
              },
              {
                where: { id },
                returning: true,
              }
            );
          }
        
            res.status(201).json(result[1][0])       
    } catch (err) {
        next(err)
 }

}

const getAction = async (req,res,next) => {
    try {
        const result = await Action.findAll()

        res.status(200).json(result)
        
    } catch (error) {
        next(err)
    }
}




module.exports = {getReimbursement,getReimbursementId,getAction , updateStatus,addReimbursement}