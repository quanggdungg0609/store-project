
import {headers} from "next/headers"
import FormSection from "./components/FormSection/FormSection"
import FormSectionMobile from "./components/FormSectionMobile/FormSectionMobile"

export default function SignIn(){
    const headersList= headers()
    const userAgent= headersList.get("user-agent")

    //check if is mobile view
    let isMobileView= userAgent!.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
    
    return (
        <div
            className=" flex justify-center items-center w-screen h-screen"
        >
            {isMobileView?<FormSectionMobile/>:<FormSection/>}
        </div>
    )
}