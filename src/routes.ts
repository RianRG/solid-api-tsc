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

router.post('/userslogin', async (req, res) =>{
  return await userController.loginUser(req, res);
})

router.get('/listloggers', async (req, res) =>{
  
  try{

      const { authorization } = req.headers;
    const auth = authorization.split(' ')[1];
    console.log(auth);

    users.forEach(item =>{
      if(auth == item.token){
        return res.status(200).json(item);
      }
    })

  } catch(err){
    return res.status(400).json({msg: 'Error'});
  }

})

export { router };