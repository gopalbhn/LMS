import { getAuth } from "@clerk/express"


export const authenticateUser = async (req,res,next)=>{
    const user =  await getAuth(req)
    if(user){
        next()
    }else{
        return res.status(404).json({
            message:"Not Authenticated"
        })
    }
}