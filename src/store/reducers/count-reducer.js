import { ACTION } from "../actions/count-action";
  export const reducer=(stste,{type,payload})=>{

    switch(type){
  case ACTION.UP:
    return {count:stste.count+1}
    case ACTION.DOWN:
    return {count:stste.count-1}
    case ACTION.REST:
    return {count:0};
    default:
      throw new Error();
    }
  }

