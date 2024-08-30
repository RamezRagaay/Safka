import React from 'react'
import { BiSolidCircle } from "react-icons/bi";
import { MdDone } from "react-icons/md";

const ProgressBar = ({formNumber}) => {
	return (
		<div className="relative w-3/4 flex justify-around items-center">
			<div className="absolute h-1.5 bottom-0 bg-slate-400 w-full"></div>
			<div className={`absolute h-1.5 bottom-0 bg-primary transition-all duration-300`}
			style={
				formNumber === 1 ? {right: '0%',width:'0%'} 
				: 
				formNumber === 2 ? {right: '0%', width: '25%'} 
				:
				formNumber === 3 ? {right: '0%',width: '50%'} 
				:
				formNumber === 4 ? {right: '0%',width: '75%'} 
				: 
				{width: '100%'} 
			}>
			</div>
			<div className ={`absolute h-10 w-10 rounded-full border-2 
			${(formNumber>1) ? 'border-primary bg-primary' :
			(formNumber==1) ? 'border-primary bg-white ' : 'border-slate-500 bg-white '} 
				flex justify-center items-center  z-40 right-[0%] -top-6`}>
				{
					(formNumber>1) ? 
					<MdDone className="text-white" size={30}/> 
					: 
					<BiSolidCircle className={`${(formNumber==1) ? 'text-primary' : 'text-slate-500'}`}/>
				}
			</div>
			<div className ={`absolute h-10 w-10 rounded-full border-2 
			${(formNumber>2) ? 'border-primary bg-primary' :
			(formNumber==2) ? 'border-primary bg-white ' : 'border-slate-500 bg-white '}  
			flex justify-center items-center z-40  right-[25%] -top-6`}>
				{
					(formNumber>2) ?
					<MdDone className="text-white" size={30}/>
					: 
					<BiSolidCircle className={`${(formNumber==2) ? 'text-primary' : 'text-slate-500'}`}/>
				}
			</div>
			<div className ={`absolute h-10 w-10 rounded-full border-2 
			${(formNumber>3) ? 'border-primary bg-primary' :
			(formNumber==3) ? 'border-primary bg-white ' : 'border-slate-500 bg-white '}  
			flex justify-center items-center z-40 right-[50%] -top-6`}>
				{
					(formNumber>3) ? 
					<MdDone className="text-white" size={30}/> 
					: 
					<BiSolidCircle className={`${(formNumber==3) ? 'text-primary' : 'text-slate-500'}`}/>
				}
			</div>
			<div className ={`absolute h-10 w-10 rounded-full border-2 
			${(formNumber>4) ? 'border-primary bg-primary' :
			(formNumber==4) ? 'border-primary bg-white ' : 'border-slate-500 bg-white '}  
			flex justify-center items-center z-40 right-[75%] -top-6`}>
				{
					(formNumber>4) ? 
					<MdDone className="text-white" size={30}/> 
					: 
					<BiSolidCircle className={`${(formNumber==4) ? 'text-primary' : 'text-slate-500'}`}/>
				}
			</div>
			<div className ={`absolute h-10 w-10 rounded-full border-2 
			${(formNumber>5) ? 'border-primary bg-primary' :
			(formNumber==5) ? 'border-primary bg-white ' : 'border-slate-500 bg-white '}  
			flex justify-center items-center z-40 right-[100%] -top-6`}>
				{
					(formNumber>5) ? 
					<MdDone className="text-white" size={30}/> 
					: 
					<BiSolidCircle className={`${(formNumber==5) ? 'text-primary' : 'text-slate-500'}`}/>
				}
			</div>
		</div>
	)
}

export default ProgressBar