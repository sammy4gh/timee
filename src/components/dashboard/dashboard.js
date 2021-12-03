import React from 'react';
import ItemForm from "../ItemForm/itemForm";
import Items from "../Items/Items";

const Dashboard = (props) => {

    return (
        <div className={'h-full  w-full  scrollbar-hide flex flex-col items-center m-0 p-4 justify-center'}>
            <ItemForm/>
            <Items/>
        </div>
    );
}

export default Dashboard;