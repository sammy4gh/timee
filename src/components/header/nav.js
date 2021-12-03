import React, {Fragment} from 'react';
import NavigationLink from "./navigationLink";
import ProfileImage from "./profileImage";
import { Menu, Transition } from '@headlessui/react'
import Notification from "../Notification/Notification";
import {MenuIcon} from "@heroicons/react/solid";


const Nav = (props) => {
    return (
            <div  className="text-left nav ">
                <Menu as={'div'}>
                    <Menu.Button className={'fixed right-0 top-0 m-4'}>
                        <MenuIcon className={'text-black font-bold h-5 w-5'} />
                    </Menu.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className={'absolute right-0  w-56 mt-4 mr-2 p-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'}>
                        {({active})=>(
                            <>
                                <Menu.Item>
                                    <ProfileImage />
                                </Menu.Item>
                                <Menu.Item>
                                    <Notification />
                                </Menu.Item>
                                <Menu.Item>
                                    <NavigationLink linkName={'SignUP'} active={active} />
                                </Menu.Item>
                            </>
                        )}

                    </Menu.Items>
                        </Transition>
                </Menu>

            </div>
        )
    }

export default Nav;