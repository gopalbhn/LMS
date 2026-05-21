import { authenticateRequest,getAuth} from "@clerk/express";
import express from "express";
import { getUserInfo,LoginUser } from "../controller/user.controller.js";


const router = express.Router();

router.get('/me',authenticateRequest,getUserInfo);
router.post('/login',LoginUser);
router.get("/protected", (req, res) => {
    const auth = getAuth(req);

    if(!auth.authenticateUser){
        res.status(401).json({
            status: false,
            message: "Unauthorized"
        })
    }
    res.status(200).json({
        status: true,
        message: "Protected route accessed successfully",
        user: auth.user
    })
  });

router.get("/sign-in",(req,res) =>{
    res.render("sign-in")    
})

// router.post("/register",registerUser);
router.post('/login',LoginUser);
// router.put('/change-password',changePassword);
// router.delete('/delete-account',deleteAccount);


export default router