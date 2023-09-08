import { Request, Response } from "express";
import { CreateUser } from "./CreateUser";
import { LoginUser } from "./LoginUser";

export class UserController{
  constructor(
    private createUser: CreateUser,
    private loginUsers: LoginUser
  ){};

  async handle(req: Request, res: Response){
    const { name, email, password } = req.body;

    try{
      await this.createUser.execute({
        name, 
        email,
        password
      })

      res.status(201).json({msg: "User registered with succesfully!"});
    } catch(err){
      console.log(err);
      res.status(400).json({msg: 'Unexpected error!'});
    }
  }

  async loginUser(req: Request, res: Response){
    const { email, password } = req.body;

    try{
      await this.loginUsers.execute({
        email,
        password,
      })

      res.status(201).json({msg: "User logged with succesfully!"});
    } catch(err){
      console.log(err);
      res.status(400).json({msg: 'Unexpected error!'});
    }
  }
}