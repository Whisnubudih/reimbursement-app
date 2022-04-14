const FormData = require("form-data")
const axios = require("axios")


const uploadImagekit =  (req,res,next) => { 
    const privateKey = "private_0nfFW3cdzB3vHV+mtltJsVwuvRk="
    if (!req.file) {
        next()


    } else {
        const form = new FormData()
        form.append("file",req.file.buffer.toString("base64"))
        form.append("fileName", req.file.originalname)
        axios({
            url: "https://upload.imagekit.io/api/v1/files/upload",
            method: "post",
            data: form,
            headers: form.getHeaders(),
            auth: {
                username: privateKey
            },
        })
        
        .then((result) =>{
            req.body.receipt = result.data.url
            next()
        })
        .catch((err) =>{
            console.log(err)
            next(err)
        })
        
    }
    


}
module.exports = {  uploadImagekit }