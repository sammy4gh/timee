import React, {useEffect} from 'react';
import ItemForm from "../ItemForm/itemForm";
import Items from "../Items/Items";
import {collection, query} from "firebase/firestore";
import {useLocation, Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {db} from "../../config/firebaseConfig";

const Dashboard = (props) => {
    const auth = useSelector(state => state.auth)

    let location = useLocation()

    useEffect(() => {
        return () => {
            if(!auth){
                return <Navigate to={'/login'} state={{from : location}} />
            }
        };
    }, []);

    return (
        <div className={'h-full  w-full  scrollbar-hide flex flex-col items-center m-0 p-4 justify-center'}>
            <ItemForm/>
            {
                !query(collection(db,'items' )) ? <h3 className={'text-center'}>There are no items</h3> : <Items/>
            }

        </div>
    );
}

export default Dashboard;