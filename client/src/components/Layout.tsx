import React, { Fragment } from "react"
import { TopBar} from "./Topbar"

type Props = {
    children?: React.ReactNode,
  }

export const Layout = ({children} : Props) => {
    const [showNav,setShowNav] = React.useState<boolean>(true);
    const [isMobile,setIsMobile] = React.useState<boolean>(false);

    function handleResize(){
        if (innerWidth <= 640){
            setShowNav(false);
            setIsMobile(true);
        } else {
            setShowNav(true);
            setIsMobile(false);
        }
    }

    React.useEffect(() => {
        if (typeof window != undefined){
            addEventListener("resize", handleResize);
        }

        return () => {
            removeEventListener("resize" , handleResize);
        }
    },[]);

    return (
        <>
            <TopBar showNav={showNav} setShowNav={setShowNav}/>
            <main className="pt-16 transition-all duration-300 z-50">
                <div className="">
                    {children}
                </div>
            </main>
        </>
    )
}