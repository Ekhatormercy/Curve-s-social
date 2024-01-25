import { useState } from "react"
import "./Login.css"
import { useNavigate } from "react-router"
import { Link } from "react-router-dom"
import { FaEyeSlash } from "react-icons/fa"
import { FaRegEye } from "react-icons/fa6"
import mercyimg from "../../assets/mercyimg.jpeg"
import favourspics from "../../assets/favourspics.jpg"
import ellaspics from "../../assets/ellaspics.jpg"
import henpics from "../../assets/henpics.jpg"
import marospics from "../../assets/marospics.jpg"


const userDetails = [
    {
        name: "mercy",
        email: "mercy@gmail.com",
        password: "mercy",
        image: mercyimg

        
    },
    {
        name: "Favor",
        email: "favor@gmail.com",
        password: "favour",
        image: favourspics,
        
    },
    {
        name: "Ella",
        email: "ella@gmail.com",
        password: "ella",   
        image: ellaspics
    },
  
    {
        name: "Henry",
        email: "henry@gmail.com",
        password: "henry",
        image: henpics
       
    },
    {
        name: "Maro",
        email: "maro@gmail.com",
        password: "maro",
        image: marospics
       
    },
    {
        name: "Jerry",
        email: "jerry@gmail.com",
        password: "jerry",
       
    },
  
]
const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    // const [role, setRole] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState({ isError: false, type: '', message: '' })
    const [admin, setAdmin] = useState(false)

    

    const userD = userDetails.find((e) => email == e.email && password == e.password  ? e : null)
    console.log(userD)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const Nav = useNavigate()



    const handleLogin = (e) => {
        e.preventDefault()
        setLoading(true)


        if (!email && !email.includes("@")) {
            setError({ isError: true, type: "email", message: "input email" }
            )
            setLoading(false)
        } else if (!email.includes('@')) {
            setError({ isError: true, type: 'email', message: 'Email must contain @' })
            setLoading(false)
        } else if (password === "") {
            setError({ isError: true, type: "password", message: "input password" })
            setLoading(false)
        } else {
            if (userD) {
                localStorage.setItem("loggedUser", JSON.stringify(userD))
                localStorage.setItem("user", JSON.stringify(userDetails))
                localStorage.setItem("email",email)
                Nav("/create");
            } else {
                alert("wrong credentials")
                setLoading(false)
            }


        } 


    }
    return (
        <div className="verifybox1">
            <div className="vwrapper1">
                <div className="verdiv1">
                    <h1>THE CURVE'S SOCIAL</h1>
                    <div className="innputt">
                    <div className="sinput">

                        <input type="text" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                        {error.isError && error.type === "email" ? <p style={{ color: "red", fontSize: '15px' }}>{error.message}</p> : null}
                    </div>
                    <div className="pass">
                        <input type={showPassword ? "text" : "password"} value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        {
                            showPassword ? <FaRegEye onClick={handleShowPassword} style={{ fontSize: "20px" }} /> : <FaEyeSlash onClick={handleShowPassword} style={{ fontSize: "25px" }} />
                        }
                        {error.isError && error.type === "password" ? <p style={{ color: "red", fontSize: "15px" }}>{error.message}</p> : null}

                    </div>
                    </div>


                    <div className="downss">
                        <button className="sbtn" onClick={handleLogin}>LOGIN</button>
                        Don't have an Account?
                        <Link to='/signup' style={{ textDecoration: "none" }}>
                            Sign Up
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login