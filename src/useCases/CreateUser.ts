import { User } from "../entities/User";
import { UsersDTO } from "../repositories/UsersDTO";
import { MongoRepos } from "../repositories/adds/MongoRepos";
import bcrypt from 'bcryptjs';

export class CreateUser{
  constructor(
    private userRepos: MongoRepos
  ){};

  async execute(data: UsersDTO){
    const { name, email, password } = data;
    const alreadyExists = await this.userRepos.findByEmail(data.email);
    if(alreadyExists){
      throw new Error('Unavailable email!');
    }
    const passHash = await bcrypt.hash(data.password, 10);
    const user = new User({
      name,
      email,
      password: passHash
    });
    
    await this.userRepos.save(user);
  }
}