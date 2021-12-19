import React from 'react';
import {PlusIcon, XIcon} from "@heroicons/react/solid";

const ToggleButton = ({toggle,  setToggle}) => {
    return (

            <button type={'reset'} className={'flex justify-end p-2 m-2 bg-gray-200 rounded-full'} onClick={()=> setToggle(!toggle) } >
                {  toggle ? <XIcon className={'text-red-400  font-bold h-5 w-5'}/> :<PlusIcon className={'text-green-400  font-bold h-5 w-5'} />  }
            </button>
    );
}



export default ToggleButton;