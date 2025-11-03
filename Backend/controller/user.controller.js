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
        res.status(201).json({ message: "User Created successfully"})


    } catch (error) {
        console.log("error", error.message)
        res.status(500).json({message: "internal error"})
    }
}