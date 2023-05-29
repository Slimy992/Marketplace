import { Menu, Transition } from "@headlessui/react"
import { CogIcon, CreditCardIcon, UserIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid"
import { UserIcon as UserIconOutline}  from "@heroicons/react/24/outline"
import Link from "next/link"
import { Fragment } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateLogged } from "src/store"

export const AccountMenu = () =>{

    const dispatch = useDispatch();
    const isLogged = useSelector((state : any) => state.isLogged.value);
    const user = useSelector((state : any) => state.user.token);

    return (
    <>
    <Menu as="div" className="relative inline-block text-left">
    <div>
        <Menu.Button className=" inline-flex w-full justify-center items-center text-action">
            <div className=" bg-secondary rounded-full  p-2 text-actionhover:bg-dark-light cursor-pointer border-[3px] border-action hover:bg-primary"> 
                <UserIconOutline className="h-8 w-8 "/>
            </div>
        </Menu.Button>
    </div>
    <Transition as={Fragment}
    enter="transition ease-out duration-300" enterFrom="transform scale-95" enterTo="transform scale-100"
    leave="transition ease-in scale-100" leaveFrom="transfrom scale-100" leaveTo="transfrom scale-95">
        <Menu.Items className=" absolute right-0 w-56 mt-2 origin-top-right bg-secondary rounded-2xl shadow-2xl border-[3px] border-action">
            <div className="px-2">
                {isLogged ? 
                <Menu.Item>
                    <Link href="/Connection" className="flex justify-center  text-action py-2 my-2 rounded-2xl text-sm transition-colors items-center border-[3px] border-action hover:bg-primary">
                        <ArrowRightOnRectangleIcon className=" h-6 w-6 mr-2"/>
                        Login / Register
                    </Link>
                </Menu.Item>
                
                :
                <>
                <Menu.Item>
                    <div className="my-4">
                        <span className="flex justify-center text-action rounded-2xl text-sm transition-colors items-center ">
                               {user}
                        </span>
                        <div className=" border-action border-[1px] w-full rounded-2xl mx-auto my-1"/>
                    </div>
                </Menu.Item>
                <Menu.Item>
                    <Link href="#" className="flex justify-center  text-action py-2 my-2 rounded-2xl text-sm transition-colors items-center border-[3px] border-action hover:bg-primary">
                        <UserIcon className=" h-6 w-6 mr-2"/>
                        Account
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="#" className="flex justify-center  text-action py-2 my-2 rounded-2xl text-sm transition-colors items-center border-[3px] border-action hover:bg-primary">
                        <CreditCardIcon className=" h-6 w-6 mr-2"/>
                        Payments
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link  href="#" className="flex justify-center text-action py-2 my-2 rounded-2xl text-sm transition-colors items-center border-[3px] border-action hover:bg-primary">
                        <CogIcon className=" h-6 w-6 mr-2"/>
                        Settings
                    </Link>
                </Menu.Item>
                <Menu.Item>
                        <Link  onClick={() => dispatch(updateLogged(true))}  href="/Connection" className="flex justify-center hover:bg-dark-light  text-action py-2 my-2 rounded-2xl text-sm transition-colors items-center border-[3px] border-action hover:bg-primary">
                            <ArrowRightOnRectangleIcon className=" h-6 w-6 mr-2"/>
                            Logout
                        </Link>
                </Menu.Item> 
                </>
                }
            </div>
        </Menu.Items>
    </Transition>
</Menu> 

             
    
</>
)}