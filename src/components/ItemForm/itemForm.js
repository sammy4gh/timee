import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import ToggleButton from "./toggleButton";
import {useDispatch, useSelector} from "react-redux";
import {bindActionCreators} from "redux";
import {formActions, itemsActions} from '../../state'
import {GET_ITEMS} from "../../state/actionCreators/itemsActions";

const ItemForm = (props) => {
    const [toggle, setToggle] = useState(false)
    const items = useSelector(state => state.items)
    const auth = useSelector(state => state.auth)
    const form = useSelector(state=> state.form)
    const dispatch = useDispatch()
    const {ADD_ITEM, UPDATE_ITEM} = bindActionCreators(formActions, dispatch)
    const {GET_ITEMS} = bindActionCreators(itemsActions, dispatch)
    const {register, handleSubmit, formState:{errors}, control , setValue } = useForm()

    setValue('title', form && form.title)
    setValue('details',form && form.details)
    setValue('id', form && form.id)

    const onSubmit =( data, uid )=> {
        console.log({...data, userID : uid})
        ADD_ITEM({...data, userID : uid})
    }

    const onUpdate = data =>{
        console.log('updating ', data.title)
        UPDATE_ITEM(data)

    }



    return (
        <div className={` sticky top-10 bg-white p-4 m-4 w-full  ${toggle && 'shadow-lg' }  rounded-lg md:w-2/3 lg:w-1/3 flex flex-col justify-center `}>
                <form onSubmit={handleSubmit((data)=> form === null?  onSubmit(data, auth.uid) : onUpdate(data)  )}>
                    <div className={' flex items-center justify-end '}>
                        <ToggleButton toggle={toggle} setToggle={setToggle}/>
                    </div>
                    {
                        toggle &&
                        <div>
                            <div className={'m-2 rounded-md' }>
                                <input   className={'w-full rounded-lg'} type="text" {...register('title', {required:true})}  />
                            </div>
                            {errors.title && <span className={'text-pink-800 font-thin text-sm m-2'} >Title is required</span>}
                            <div className={'m-2 '}>
                                <textarea  className={'w-full rounded-lg '} name="" id=""  {...register('details')}/>
                            </div>
                            <div className={'flex items-center justify-end'}>
                                <button type={"submit"} className={` p-2 m-2 text-white ${form === null? 'bg-green-400' : 'bg-yellow-400'} font-semibold rounded-lg`}> {form === null ? 'Add item' : 'Update Item'}</button>
                            </div>
                        </div>
                    }


                </form>

        </div>
    );
}

export default ItemForm;