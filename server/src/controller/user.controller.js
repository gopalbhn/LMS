import { getAuth } from "@clerk/express";
import { User } from "../models/user.model.js";


const registerUser = async(req,res) =>{
    const {name,email,password,role} = req.body;
    if(!name || !email || !password || !role){
        res.status(404).json({
            status:false,
            message:"Some field are missing"
        })
    }
    const isUserExist = await User.findOne({email});
    if(isUserExist){
        res.status(404).json({
            status:false,
            message:"User already exist"
        })
    }
    const user = await User.create({
        name,email,password,role
    })
    if(user){
        res.status(200).json({
            status:true,
            message:"User registered successfully",
            data:user
        })
    }
    else{
        res.status(404).json({
            status:false,
            message:"User registration failed"
        })
    }
}


const LoginUser = async(req,res) =>{
    const {email,password} = req.body;
    if(!email || !password){
        res.status(404).json({
            status:false,
            message:"Some field are missing"
        })
    }
    const user = await  User.findOne({email,password});
    if(user){
        res.status(200).json({
            status:true,
            message:"User logged in successfully",
            data:user
        })
    }
    else{
        res.status(404).json({
            status:false,
            message:"Invalid email or password"
        })
    }
}

const getUserInfo = async(req,res) =>{
    const {userId} = await getAuth(req);
    const user = await User.findById(userId);
    if(user){
        res.status(200).json({
            status:true,
            message:"User found",
            data:user
        })
    }
    else{
        res.status(404).json({
            status:false,
            message:"User not found"
        })
    }
}

export {LoginUser,getUserInfo}