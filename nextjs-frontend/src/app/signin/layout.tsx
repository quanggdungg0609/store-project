
import "./Signin.css"

export default function SignInLayout({children,}: { children: React.ReactNode}){
    return(
        <section className="main-signin">
            {children}
        </section>
    )
}