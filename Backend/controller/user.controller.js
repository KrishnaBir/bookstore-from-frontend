import User from "../model/user.model.js"
import bcrypptjs from "bcryptjs"

export const signup = async(req, res)=>{
    try {
        const {fullname, email, password} = req.body

        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message: "User already exists"})
        }
        
        //agar nhi hai
        const hashPassword = await bcrypptjs.hash(password,10)
        const createdUser = new User({
            fullname, email, password: hashPassword
        })

        await createdUser.save()
        res.status(201).json({ 
            message: "User Created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.fullname
            }
        })


    } catch (error) {
        console.log("error", error.message)
        res.status(500).json({message: "internal error"})
    }
}

export const login = async (req, res)=>{
    try {
        const{email, password} = req.body
        
        const user = await User.findOne({email})
        const isMatch = await bcrypptjs.compare(password, user.password)
    
        if(!user || !isMatch){
            res.status(400).json({message: "invalid credentials"})
        }else{
            res.status(200).
                json({
                    message: "successfully login",
                    user:{
                        _id: user._id,
                        fullname: user.fullname,
                        email: user.email
                    }
                })
        }
    } catch (error) {
        console.log("error", error.message)
        res.status(500).json({message: "internal error"})
    }

}