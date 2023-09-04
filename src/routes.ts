import { Router } from "express";
import { userController } from "./useCases";
import { users } from "./repositories/adds/MongoRepos";

const router = Router();

router.post('/users', (req, res) =>{
  return userController.handle(req, res);
})

router.get('/users', (req, res) =>{
  res.json(users);
})

router.post('/userslogin', (req, res) =>{
  return userController.loginUser(req, res);
})

export { router };