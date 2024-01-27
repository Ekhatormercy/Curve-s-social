import { useState } from "react"
import "./Createpage.css"
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Createpage = () => {

    const Nav = useNavigate()
      const post =()=>{
      Nav("/post")
      }

    const [name, setName] =useState()
    const[comment, setComment] =useState()
    // const [image, setImage] = useState("");
    const [imageholder, setImageHolder] = useState("")

    const email = localStorage.getItem("email")
   

  const handlepost =()=>{
    const allData=  {
     
        comment,
        email,
        image: imageholder,
        likes: 0,
        likers: [],


    }

       
    const oldData = JSON.parse(localStorage.getItem("postDetails")) || [];
    const newData= [...oldData, allData]
    localStorage.setItem("postDetails", JSON.stringify(newData)) 
   
  }

  
    // const [like, setLike] = useState("")
    

    const imagehold = (e) => {
        const file = e.target.files[0]
        const url =
            URL.createObjectURL(file)
        setImageHolder(url)
        // setImage(url)
        localStorage.setItem("Image", JSON.stringify(file))
        
    }

    return (
        <div className="hOmepage">
             <h1>THE CURVE'S <span>SOCIALS</span></h1>

            <div className="pageholder">
                <div className="uppath">
                   
                    <h1>Keep The Zeal Going!!!</h1>
                </div>

                <div className="ImageT">
                    <div className="immg">
                        <div className="image">
                            <img src={imageholder} alt="profile" />
                        </div>
                        <input type="file" id="n" onChange={imagehold} hidden />
                        <label htmlFor="n">upload Image</label>
                    </div>

                    <div className="icondiv">
                       {/* <input className="inpuu" type="text" placeholder="Write Your Name" value={name} onChange={(e)=>setName(e.target.value)}/> */}
                       <input className="inpuu1" type="text" placeholder="Write Your Comment" value={comment} onChange={(e)=>setComment(e.target.value)}/>
                       
                       



                    </div>
                  
                </div>

                <>
               <button className="Postbtn" onClick={handlepost}><NavLink className="Postbtn" style={{textDecoration: "none"}} to ="/post">Post </NavLink></button>
               <button className="BL"><NavLink  className= "BL"to ="/">Go Back to Login</NavLink></button>
               </>
                
                {/* <button className="Postbtn" onClick={post} >Post page</button>  */}

            </div>
        </div>
    )
}
export default Createpage