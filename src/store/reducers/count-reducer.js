import { ACTION } from "../actions/count-action";
  export const reducer=(stste,{type,payload})=>{

    switch(type){
  case ACTION.UP:
    return {...stste,count:stste.count+1}
    case ACTION.DOWN:
    return {...stste,count:stste.count-1}
    case ACTION.REST:
    return {...stste,count:0};
    case ACTION.INPUT:
        return {...stste,input:payload};
    default:
      throw new Error();
    }
  }

