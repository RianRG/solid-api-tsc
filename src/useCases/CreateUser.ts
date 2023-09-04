import { User } from "../entities/User";
import { UsersDTO } from "../repositories/UsersDTO";
import { MongoRepos } from "../repositories/adds/MongoRepos";

export class CreateUser{
  constructor(
    private userRepos: MongoRepos
  ){};

  async execute(data: UsersDTO){
    const alreadyExists = await this.userRepos.findByEmail(data.email);
    if(alreadyExists){
      throw new Error('Unavailable email!');
    }

    const user = new User(data);

    await this.userRepos.save(user);
  }
}