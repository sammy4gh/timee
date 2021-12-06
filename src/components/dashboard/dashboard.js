import React from 'react';
import ItemForm from "../ItemForm/itemForm";
import Items from "../Items/Items";
import {db} from "../../config/firebaseConfig";

const Dashboard = (props) => {
    return (
        <div className={'h-full  w-full  scrollbar-hide flex flex-col items-center m-0 p-4 justify-center'}>
            <ItemForm/>
            {
                db.doc !== undefined ? <h3 className={'text-center'}>Loading...</h3> : <Items/>
            }

        </div>
    );
}

export default Dashboard;