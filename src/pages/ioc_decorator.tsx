import React from "react";

import { Container } from "injection";
class UserService {
  private userModel: any;
  setUser(uid: string, name: string) {
    this.userModel = this.userModel || {};
    this.userModel[uid] = name;
  }
  getUser(uid: string) {
    return this.userModel[uid];
  }
}

export default () => {
  const container = new Container(); // 1、创建容器
  container.bind("userService", UserService); // 2、容器中绑定实例
  const userService: UserService = container.get("userService"); //3、容器中获取实例
  userService.setUser("123", "robin");
  const user = userService.getUser("123");
  console.log("得到用户12344444:", user); //得到用户123: robin
  return <div className="index">hello,ioc装饰器(看控制台)</div>;
};
