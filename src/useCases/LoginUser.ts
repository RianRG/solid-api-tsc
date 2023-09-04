import { User } from "../entities/User";
import { UsersDTO } from "../repositories/UsersDTO";
import { MongoRepos } from "../repositories/adds/MongoRepos";

export class LoginUser{
  constructor(
    private userRepos: MongoRepos
  ){};

  async execute(data: Omit<UsersDTO, 'name'>){
    const userLog = await this.userRepos.login(data);
    if(!userLog){
      throw new Error('Unexpected error!');
    }
  }
}