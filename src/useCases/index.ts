import { MongoRepos } from "../repositories/adds/MongoRepos";
import { CreateUser } from "./CreateUser";
import { LoginUser } from "./LoginUser";
import { UserController } from "./UserController";

const mongoRepos = new MongoRepos();
const createUser = new CreateUser(
  mongoRepos
);
const loginUser = new LoginUser(mongoRepos);
const userController = new UserController(
  createUser,
  loginUser
)

export { createUser, userController };