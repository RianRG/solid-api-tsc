import { User } from "../entities/User";
import { UsersDTO } from "../repositories/UsersDTO";
import { MongoRepos } from "../repositories/adds/MongoRepos";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export class LoginUser{
  constructor(
    private userRepos: MongoRepos
  ){};

  async execute(data: Omit<UsersDTO, 'name'>){
    const userLog = await this.userRepos.findByEmail(data.email);
    if(!userLog){
      throw new Error('Unexpected error!');
    } 

    const verifPass = await bcrypt.compare(data.password, userLog.password);
    if(!verifPass){
      throw new Error('unexpected error!');
    }

    const token = jwt.sign({id: userLog.id}, process.env.SECRET, { expiresIn: '1d' });
    userLog.token = token;
    console.log(userLog);
  }
}