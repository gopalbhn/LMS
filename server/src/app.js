import express from "express";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import  userRouter  from "./routes/user.routes.js"
const app = express();

app.use(cors());
app.use(express.json());


app.use(clerkMiddleware())

app.use("/api/v1/user",userRouter)

export { app };