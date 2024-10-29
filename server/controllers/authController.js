const Admin = require("../models/Admin")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const signup = async(req,res) =>{
    try{

        const {username,password} = req.body;

        let admin = await Admin.findOne({username})

        if(admin){
            return res.status(400).json({success:false,message:"Please login."})
        }

        
        //hash password
        const hashedPassword = await bcrypt.hash(password,10);

        admin = new Admin({
            username,
            password:hashedPassword
        })

        await admin.save()

        res.status(201).json({success:true,message:"Admin created successfully."})


    }catch(error){
        res.status(500).json({success:false,message:"Server error."})
    }
}

const login = async(req,res) =>{
    try{
    const {username,password} = req.body;

    let admin = await Admin.findOne({username})

    if(!admin){
        return res.status(404).json({success:false,message:"Admin not found."})
    }
    
    const comparePassword = await bcrypt.compare(password,admin.password)

    if(!comparePassword){
        return res.status(400).json({success:false,message:"Wrong credentials."})
    }

    const token = jwt.sign({id:admin._id},process.env.JWT_SECRET,{expiresIn:"1d"}) 

    res.status(200).json({success:true,message:"Login successfull.", token,admin:admin.username})


    }catch(error){
        res.status(500).json({success:false,message:"Server error."})
    }
}

module.exports = {
    signup,
    login
}