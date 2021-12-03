import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import ToggleButton from "./toggleButton";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import { Popover } from '@headlessui/react'
import {itemActions} from '../../state'
const ItemForm = (props) => {
    const [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()
    const {ADD_ITEM} = bindActionCreators(itemActions, dispatch)
    const {register, handleSubmit, formState:{errors}} = useForm()
    const onSubmit = data => {
        console.log(data);
        ADD_ITEM(data)
    }
    return (
        <div className={'sticky top-10 bg-white p-4 m-4 w-full md:w-2/3 lg:w-1/3 flex flex-col justify-center '}>

                <form onSubmit={handleSubmit((data)=> ADD_ITEM(data))}>
                    <div className={' flex items-center justify-end'}>
                        <ToggleButton toggle={toggle} setToggle={setToggle}/>
                    </div>
                    {
                        toggle &&
                        <div>
                            <div className={'m-2 rounded-md' }>
                                <input  className={'w-full rounded-md'} type="text" {...register('title', {required:true})}  />
                            </div>
                            {errors.title && <span className={'text-pink-800 font-thin text-sm m-2'} >Title is required</span>}
                            <div className={'m-2 '}>
                                <textarea  className={'w-full rounded-md '} name="" id=""  {...register('details')}/>
                            </div>
                            <div className={'flex items-center justify-end'}>
                                <button type={"submit"} className={' p-2 m-2 text-white bg-black font-semibold'}>Add item</button>
                            </div>
                        </div>
                    }


                </form>

        </div>
    );
}

export default ItemForm;