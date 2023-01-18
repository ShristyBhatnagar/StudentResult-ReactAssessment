import * as react  from 'react'
import * as yup from 'yup';
import axios from 'axios'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './index.scss'

import {
    FormProvider,
    SubmitHandler,
    useForm,
} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { PrimaryButton } from '@fluentui/react';
import { Student_Data } from './scorehelp';
import dynamicfield from '../sharedcomponents/dynamicfield';
import { useParams } from 'react-router-dom';

// import { useNavigate } from "react-router-dom";

const StudentResult = () => {
    //created interface
    interface Idata{
        name?:string;
        rollnumber?:string;
        english?:number;
        hindi?:number;
        social?:number;
        science?:number;
        telugu?:number;
        activities?:number;
        totalmarks?:number;

    }
    //schema declaring
        const StudentSchema:yup.SchemaOf<Idata>=yup.object().shape({
            name:yup.string().required().min(5),
            rollnumber:yup.string().required(),
            english:yup.number().max(100),
            hindi:yup.number().max(100),
            social:yup.number().max(100),
            telugu:yup.number().max(100),
            science:yup.number().max(100),
            activities:yup.number().max(100),
            totalmarks:yup.number(),
        });
        const StudentResultMethods=useForm<any>({
            mode:"all",
            resolver:async (data,context,options) => {
                return yupResolver(StudentSchema)(data,context,options)
            },
        });
        const [submittedData,setSubmittedData]=react.useState();
        const id=useParams();
         const navigation= useNavigate();
        const StudentResultSubmit:SubmitHandler<any>=async (data:any) => {
            setSubmittedData(data);
            if (id.id){
                editForm(data);
            }
            else{
                createForm(data);
            }
            StudentResultMethods.reset({})
            navigation('/View')
        }


        const getAdditionalProps=(item:any)=>{
            item.control= StudentResultMethods.control;
            item.setValue= StudentResultMethods.setValue;
            item.register= StudentResultMethods.register;
          return item;
        }
       
        const [data,setData]=useState<any>();
        const getStudentData=async () => {
            try{
                const result=await axios.get(`http://localhost:5000/data/${id.id}`)
                setData(result.data)
            }
            catch(err){
                console.log(err)
            }
           
        }
       
        const editForm=async (updatedData:any) => {
            try{
                const result=await axios.put(`http://localhost:5000/data/${id.id}`,updatedData)
                setData(result.data)
            }
            catch(err){
                console.log(err)
            }
            
        }
        
       

        const createForm=async (updatedData:any)=>{
            const generateNumber:any=Math.random();
            const addedData={...updatedData,'id':generateNumber}
            try{
                const result=await axios.post(`http://localhost:5000/data`,addedData)
                setData(result.data)
            }
            catch(error)
            {
                console.log(error)
            }
        }
        useEffect(()=>{
            getStudentData()
        },[id]) 

        useEffect(()=>{
            data&& 
            Object.entries(data).forEach(([key,value]:any)=>{
                StudentResultMethods.setValue(key,value,{shouldValidate:true})
            }) 
        },[data])
        console.log(StudentResultMethods.watch(),StudentResultMethods.formState.errors)
        
  return (
    <div className='container'>
        
        <div className='container__header'>
            <h1>Student Result </h1>
      
                    
        </div>
        <div className='container__formbox'>
<FormProvider {...StudentResultMethods}>
    <form onSubmit={StudentResultMethods.handleSubmit(StudentResultSubmit)}>
    {Student_Data?.map((rows:any)=>{
                return(
                    <div className={`rowCard ${rows.className}`}>
                        {rows.controls?.map((item:any)=>{
                            const upDatedItem=getAdditionalProps(item);
                            return dynamicfield(item.type,upDatedItem);
                        
                        })}
                       
                    </div>
  )})}

    </form>

</FormProvider>
<PrimaryButton type='submit' onClick={StudentResultMethods.handleSubmit(StudentResultSubmit)}>Submit</PrimaryButton>
</div>
</div>
  )
}

export default StudentResult