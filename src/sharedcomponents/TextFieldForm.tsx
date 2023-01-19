import * as react from 'react'
import { Control, Controller, useFormContext } from "react-hook-form";
import {TextField} from '@fluentui/react'


interface ITextField{
    name: string | number |any,
    typeOf: string | number,
    label:string,
    isRequired?:boolean,
    isDisabled?:boolean,
    placeholder?:string,
    defaultValue?: string
}

const TextFieldForm =({
    name,
    label,
    isRequired,
    isDisabled,
    placeholder,
    defaultValue,
    typeOf

}:ITextField)=>{
    const {control,register}=useFormContext();
    return(
        <>
        <Controller
        control={control}
        name={name}
        render={({
            field,
            fieldState:{error},})=>{
                return(
                 <>
                 <div className={isRequired?(error? "errorGroup":"errorGroupStar"):""}>
                    <TextField 
                    type={typeOf === 'number'? 'number': 'text'}
                    label={label}
                    styles={{fieldGroup:{background:"whitesmoke",border:0}}}
                    disabled={isDisabled}
                    placeholder={placeholder}
                    {...field}
                    errorMessage={error?error.message:""}

                    />
                    </div>
                 </>
                )

            } }
        
        
        />
        
        </>
    )
}
export default TextFieldForm