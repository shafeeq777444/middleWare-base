import React from 'react'

function testMiddleWare({dispatch,getState}) {
  return (next)=>{
    return (action)=>{
        console.log("previous",getState());
        next(action)
        console.log("after",getState());
    }
  }
}
export default testMiddleWare
