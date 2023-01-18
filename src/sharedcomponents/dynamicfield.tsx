import React from 'react'
import TextFieldForm from './TextFieldForm'

const dynamicfield = (fieldName:string,item:any) => {
    switch(fieldName){
        case ("TextField"):
        return <TextFieldForm {...item}/>
    
    default: return "Component Missing"
    
    }
}

export default dynamicfield