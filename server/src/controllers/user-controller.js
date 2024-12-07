import {getAllUsersService, userLoginService, userRegisterService} from "../services/user-service.js";

export const userRegister = async (req ,res)=>{
      await  userRegisterService(req,res);
}

export const userLogin = async (req ,res)=>{
      await userLoginService(req,res);
}


export const getAllUsers = async (req ,res)=>{
      await getAllUsersService(req,res);
}