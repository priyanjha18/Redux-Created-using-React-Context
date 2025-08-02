import {useState,useEffect} from "react"
let globalState={}
let listeners=[];
let actions={}

export const useStore=()=>{
    const setState=useState(globalState)[1]
   useEffect(()=>{
    listeners.push(setState)
    return ()=>{
        listeners=listeners.filter(li=>li!==setState)
    }
   },[])
}
const dispatch=actionIdentifier=>{
    const newState=actions[actionIdentifier](globalState)
    globalState={...globalState,...newState}
    for(const listener of listeners){
        listener(globalState)
    }
    return [globalState,dispatch]
}
export const initStore=(userAction,initialState)=>{
    if(initialState){
        globalState={...globalState,...initialState}
    }
    actions={...actions,...userAction}
}