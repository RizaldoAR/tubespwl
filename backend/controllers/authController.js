const User = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req, res, next) =>{
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({
                error: err
            })
        }
        let user = new User ({
            username: req.body.username,
            password : hashedPass,
            isAdmin : req.body.isAdmin
        })
        user.save()
        .then(user => {
            res.json({
                message: 'User Added Successfully'
            })
        })
        .catch(error =>{
            res.json({
                message: 'An error occured!'
            })
        })
    })
    
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({username:username})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err){
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({name: user.name}, 'secretValue',{ expiresIn: '1h'})
                    let isAdmin = user.isAdmin
                    res.json({
                        
                        message: 'Login Successfull!',
                        token, isAdmin
                    })
                }else{
                    res.status(401).json({
                        message: 'Password does not matched!'
                    })
                }
            })
        }else {
            res.status(401).json({
                message:'user not found '
            })
        }
    })
}

module.exports = {
    register, login
}