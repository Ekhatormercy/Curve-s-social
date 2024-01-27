import "./Postpage.css"
import { IoIosHeartEmpty } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaRegCommentDots } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import mercyimg from "../../assets/mercyimg.jpeg"
import ellaspics from "../../assets/ellaspics.jpg"
import favourspics from "../../assets/favourspics.jpg"
import henpics from "../../assets/henpics.jpg"
import jerrypics from "../../assets/Jerrypics.jpg"
import marospics from "../../assets/marospics.jpg"
const Postpage = () => {

    const [like, setLike] = useState("")
    const [myLike, setMyLike] = useState("")
    const [imageholer, setImageHolder] = useState("")

    const Nav = useNavigate()

    const go = () => {
        Nav("/create")
    }
    const loggedUser =JSON.parse(localStorage.getItem("loggedUser"))
    console.log(loggedUser);
    const post = JSON.parse(localStorage.getItem("postDetails"))
    const detail = JSON.parse(localStorage.getItem("user"))
    console.log(post);
    
    const handlelike = (index) => {
        const data = post.map((e,i)=>{
            if(index===i){
             const find= e.likers.findIndex(e=>e===loggedUser.email)
             console.log(find);
             if(find > -1){
                return e
             }else{
                return{
                    ...e,
                    likers: [...e.likers, loggedUser.email]
                }
             }
            }else{
                return e
            }
        })
        localStorage.setItem("postDetails", JSON.stringify(data))
    }
    const logout = () => {
        Nav("/")
    }




    const imagehold = (e) => {
        const file = e.target.files[0]
        const url =
            URL.createObjectURL(file)
        setImageHolder(url)
    }


    return (
        <div className="Postpage">
            <div className="postpagewrap">
                <div className="leftside">
                    <div className="upleft">
                        <div className="cir">
                            <img src={loggedUser.image} alt="" />
                        </div>
                        <input type="file" id="n" onChange={imagehold} hidden />
                        <h1>mercy</h1>
                        <div className="poost">

                            <div className="first">
                                <p>13</p>
                                <h3>Post</h3>
                            </div>
                            <div className="first">
                                <p>34k</p>
                                <h3>Followers</h3>
                            </div>
                            <div className="first">
                                <p>23k</p>
                                <h3>Following</h3>
                            </div>
                        </div>
                    </div>

                    <div className="home">
                        <h3>HOME</h3>
                        <div className="fhome">Feed</div>
                        <div className="fhome">Explore</div>
                        <div className="fhome">Global</div>
                        <div className="fhome">Direct Message</div>
                        <div className="fhome">IGTV</div>

                    </div>
                    <div className="utnnnn">
                        <button onClick={go} className="Crbtn">Create Post</button>
                    </div>
                    <div className="utnnnn">
                        <button onClick={logout} className="Crbtn">Logout</button>
                    </div>
                </div>
                <div className="right">
                    <div className="righhtwrap">
                        {/* < div className="header"> */}
                        <div className="rightup">
                            <h1>Feed</h1>
                            <div className="endpeth">
                                <IoIosHeartEmpty style={{ fontSize: "20px" }} />
                                <h3>Notification</h3>
                                <input type="text" placeholder="Search" />
                            </div>
                        </div>
                        <div className="rrrii">
                            <h1>Stories</h1>
                            <h1>Watch All</h1>
                        </div>
                        <div className="circle5">
                            <div className="cir1">
                                <div className="cirrrrrr">
                                    <img src={mercyimg} alt="" />
                                </div>
                                Your story
                            </div>

                            <div className="cir1">
                                <div className="cirrrrrr">
                                    <img src={favourspics} alt="" />
                                </div>
                                Favour
                            </div>
                            <div className="cir1">
                                <div className="cirrrrrr">
                                    <img src={ellaspics} alt="" />
                                </div>
                                Ella
                            </div>
                            <div className="cir1">
                                <div className="cirrrrrr">
                                    <img src={henpics} alt="" /></div>
                                Henry
                            </div>
                            <div className="cir1">
                                <div className="cirrrrrr">
                                    <img src={jerrypics} alt="" />
                                </div>
                                Jerry
                            </div>
                            <div className="cir1">
                                <div className="cirrrrrr">
                                    <img src={marospics} alt="" />
                                </div>
                                Maro
                            </div>
                            {/* </div> */}
                        </div>


                        <div className="piccc">
                            {
                                post?.map((e,index) => (

                                    <div className="div">
                                        <div className="rrpic">
                                            <img src={e.image} alt="" />
                                        </div>
                                        <input type="file" id="n" onChange={imagehold} hidden />
                                        <div className="icondiv1">
                                            <div className="ic">
                                                {/* {
                                                    like ? <CiHeart style={{ fontSize: "35px" }} onClick={()=>handlelike(index)} /> : <FaHeart style={{ fontSize: "35px", color: "red", cursor: "pointer" }} onClick={()=>handlelike(index)} />
                                                } */}
                                                {
                                                e.likers.findIndex(e=>e===loggedUser.email) > -1 ? <FaHeart className="iconic"  style={{ fontSize: "35px", color: "red", cursor: "pointer" }} onClick={()=>handlelike(index)} /> : <CiHeart  className="iconic"  style={{ fontSize: "35px" }} onClick={()=>handlelike(index)} />
                                                }
                                                <FaRegCommentDots  className="iconic"  style={{ fontSize: "35px" }} />
                                                <FiSend  className="iconic"  style={{ fontSize: "35px" }} />
                                            </div>
                                            <p>
                                                {
                                                    e.likers.map(e=> e).length 
                                                }
                                                 like
                                            </p>

                                            <p>{e.name}</p>

                                            <p>{e.comment}</p>
                                        </div>


                                    </div>
                                )
                                )
                            }




                        </div>



                    </div>

                </div>
            </div>
        </div>
    )
}
export default Postpage