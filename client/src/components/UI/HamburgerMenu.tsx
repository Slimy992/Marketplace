import { Menu, Transition } from "@headlessui/react"
import { Bars3Icon } from "@heroicons/react/24/solid"
import { ArrowRightOnRectangleIcon, HomeIcon }  from "@heroicons/react/24/outline"
import Link from "next/link"
import { Fragment } from "react"

export const HamburherMenu = () =>{
    return (
    <Menu as="div" className="relative inline-block text-left">
    <div>
        <Menu.Button className=" inline-flex w-full justify-center items-center text-action">
                <div className=" bg-secondary rounded-full p-2 text-action hover:bg-primary  cursor-pointer border-[3px] border-action ">
                    <Bars3Icon className="h-8 w-8 "/>
                </div>
        </Menu.Button>
    </div>
    <Transition as={Fragment}
    enter="transition ease-out duration-300" enterFrom="transform scale-95" enterTo="transform scale-100"
    leave="transition ease-in scale-100" leaveFrom="transfrom scale-100" leaveTo="transfrom scale-95">
        <Menu.Items className=" absolute left-0 w-56 mt-2 origin-top-right bg-secondary rounded-2xl shadow-2xl border-[3px] border-action">
            <div className="px-2">
                <Menu.Item>
                    <Link href="/" className="flex justify-center  text-action py-2 my-2 rounded-2xl text-sm transition-colors items-center border-[3px] border-action hover:bg-primary">
                        <HomeIcon className=" h-6 w-6 mr-2"/>
                        Home
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/Connection" className="flex justify-center  text-action py-2 my-2 rounded-2xl text-sm transition-colors items-center border-[3px] border-action hover:bg-primary">
                        <ArrowRightOnRectangleIcon className=" h-6 w-6 mr-2"/>
                        Login / Register
                    </Link>
                </Menu.Item>
            </div>
        </Menu.Items>
    </Transition>
</Menu>
)}