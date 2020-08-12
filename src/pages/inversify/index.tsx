import React from "react";
import { myContainer } from "./inversify.config";
import { Warrior } from "./interfaces";

const ninja = myContainer.get<Warrior>(Warrior);

console.log(ninja.fight());
console.log(ninja.sneak());

export default () => {
  return <div className="index">hello,inversify</div>;
};
