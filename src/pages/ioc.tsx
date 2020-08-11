import React from "react";
import { Container } from "injection";
//控制反转
class UserService {
  private userModel: any;
  getUser(uid: string) {
    return { name: "robin", uid };
  }
}

const container = new Container(); // 1、创建容器
container.bind("userService", UserService); // 2、容器中绑定实例
const userService: UserService = container.get("userService"); //3、容器中获取实例
const user = userService.getUser("123");

export default () => {
  console.log("得到用户:", user); //得到用户: {name: "robin", uid: "123"}
  return <div className="index">hello,ioc</div>;
};
