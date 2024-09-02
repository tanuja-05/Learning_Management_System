const { default: AppError } = require("../utils/appError");
const User =require('../models/user.model');

const register = async (req,res) =>{
      const {fullName,email,password} = req.body;
      if(!fullname || !email || !password){
        return next(new AppError('All fields are required',400));
      }
    const userExists =await User.findOne({email});

    if(userExists){
        return next(new AppError('Email already exists',400))
    }
    const user = await User.create({
       fullName,
       email,
       password,
       avatar:{
        public_id:email,
        secure_url:'some cloudinary.com'
       }
    });
    if(!User){
        return next(new AppError('User registration falied,please try again !',400))
    }
  // upload user picture
    await user.save();
 
    //set jwt token in cookie

    user.password=undefined;
    res.status(200).json({
        success:true,
        message:'User registered successfully ',
        //user
    })
}

const login =(req,res) =>{



}

const logout = (req,res) => {




}

const getProfile = (req,res) =>{


}

module.exports={
    register,
    login,
    logout,
    getProfile
}