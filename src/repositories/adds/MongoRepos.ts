import { User } from "../../entities/User";
import { IUtilities } from "../../useCases/IUtilities";
import { UsersDTO } from "../UsersDTO";
import bcrypt from 'bcryptjs';
let users: User[] = [];

export class MongoRepos implements IUtilities{

  async findByEmail(email: string): Promise<User> {
    const user = users.find(item => item.email === email);
    return user;
  }

  async save(user: User): Promise<void> {
    users.push(user);
  }

  // async login(data: Omit<UsersDTO, 'name'>): Promise<User> {
  //   const { email, password } = data;
  //   return user;
  // }
}

export { users };