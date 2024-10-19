import { createStore, combineReducers,applyMiddleware } from "redux";
import testMiddleWare from "./testMiddleWare";

function increment(){
    return {type:"COUNT",payload:1}
    }
    function decrement(){
     return {type:"COUNT",payload:-1}
    }
function label(boo){
    return {type:"checkbox",
        payload:boo
      }
}
const count = (prestate = 0, action) => {
    switch (action.type) {
        case "COUNT":
            return prestate + action.payload;

        default:
            return prestate;
    }
};
const show = (prestate = true, action) => {
    switch (action.type) {
        case "checkbox":
            return action.payload;

        default:
            return prestate;
    }
};
//function as variable has not full hoisted so when we write this above the count,showlabel are function as variables so its have not fully hoisted property so combineReducer write in bottom,when we write the both are in normal function the combine reducer write in top`
const reducer = combineReducers({
    count,       /* if key and name are same we can write only in key */
    showlabel:show 
});

const store = createStore(reducer,applyMiddleware(testMiddleWare));
export default store;
export {increment,decrement,label}/* direct export kodkunnadh inte pakarem ivde export ayi kodkam */