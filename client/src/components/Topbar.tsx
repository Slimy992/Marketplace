import { Bars3Icon} from "@heroicons/react/24/solid";
import { AccountMenu } from "./UI/AccountMenu";
import { HamburherMenu } from "./UI/HamburgerMenu";

type TopBarProps = {
    showNav : boolean,
    setShowNav : any,
}

export const TopBar = ( props : TopBarProps ) => {
    return (
        <div className="sticky top-0 z-10 w-full h-16 flex justify-between items-center transition-all duration-300 align-middle bg-secondary drop-shadow-2xl shadow-black">
            <div className="mx-2 md:mr-auto">
                <HamburherMenu/>
            </div>
            <div className=" flex items-center justify-center  place-items-center pr-2  mt-1 py-2">
                <AccountMenu/>
            </div>
        </div>
    )


}