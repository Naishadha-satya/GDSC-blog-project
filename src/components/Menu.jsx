import React from "react"
import axios from "axios"
import  { useEffect , useState } from "react";
import{Link} from "react-router-dom";


const Menu = ({cat}) => {
  const  [posts,setPosts] = useState([]);
  useEffect(()=>{
    const fetchData = async ()=>{
      try{
      const res=await axios.get(`/posts/?cat=${cat}`);
      setPosts(res.data);
      }catch(err){
        console.log(err);
      }
    };
    fetchData();
  },[cat]);
 /*   const posts = [
        {
           id: 1,
           title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
           desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://t4.ftcdn.net/jpg/03/14/81/65/240_F_314816591_yBAWvMvnpTW05AP0q4DCs5B6y2gnL9xA.jpg",
         },
         {
           id: 2,
           title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
           desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
         img: "https://cdn.elearningindustry.com/wp-content/uploads/2022/11/shutterstock_1798672534.jpg",
         },
         {
           id: 3,
           title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
           desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
           img: "https://t4.ftcdn.net/jpg/03/14/81/65/240_F_314816591_yBAWvMvnpTW05AP0q4DCs5B6y2gnL9xA.jpg",
         },
         {
          id:4,
          title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
          desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
          img: "https://cdn.elearningindustry.com/wp-content/uploads/2022/11/shutterstock_1798672534.jpg",
        },
       ];
    */
    return (
        
      <div className="menu">
        <h1>Other posts</h1>
        {posts.map((post) =>(
            <div className="post" key={post.id}>
                <img src={`../upload/${post?.img}`} alt="" />
                <h2>{post.title}</h2>
                <Link to={`/post/${post.id}`} className="read-more-link">
                <button className="read-more-button">Read More</button>
              </Link>
                
            </div>
        ))}

      </div>
    );
};
export default Menu;