import React from "react";

import { Container, provide, inject } from "injection";
@provide()
export class UserModel {
  get(uid:string){
    return 'aa:'+uid
  }
}

@provide()
export class UserService {
 
  @inject('userModel')
  userModel: UserModel | undefined;

   getUser(userId: string) {
    return  this.userModel?.get(userId);
  }
}

// const container = new Container(); // 1、创建容器
// const userService =  container.get('userService');

export default () => {

  // const userService: UserService = container.get("userService"); //3、容器中获取实例
  // userService.setUser("123", "robin");
  // const user = userService.getUser("123");
  // console.log("得到用户12344444:", user); //得到用户123: robin
  return <div className="index">hello,ioc装饰器(看控制台)</div>;
};
