import { User } from "../entities/User";
import { UsersDTO } from "../repositories/UsersDTO";

export interface IUtilities{
  findByEmail(email: string): Promise<User>;
  save(user: User): Promise<void>;
  login(data: UsersDTO): Promise<User>;
}