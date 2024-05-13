import React from "react"
import {Link,useLocation}  from "react-router-dom"
import axios from "axios"
import  { useEffect , useState } from "react";
import bgmain from "../images/bgmain.png";
const Home = () => {
         const  [posts,setPosts] = useState([]);
       
const cat = useLocation().search


    useEffect(()=>{
      const fetchData = async ()=>{
        try{
        const res=await axios.get(`posts${cat}`);
        setPosts(res.data);
        }catch(err){
          console.log(err);
        }
      };
      fetchData();
    },[cat]);
  /*  const  posts =[ {
            id: 1,
        title: "Exploring the Creative Frontiers: A Dive into Generative AI",
       desc: "In the realm of artificial intelligence, there exists a fascinating subfield that pushes the boundaries of creativity and innovation – Generative AI. This blog post aims to delve into the captivating world of Generative AI, exploring its principles, applications, and the profound impact it has on various domains.",
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
    ]; */
      
         const getText = (html) =>{
          const doc = new DOMParser().parseFromString(html, "text/html")
          return doc.body.textContent
        }
      
        const truncateDescription = (desc) => {
          // Split description into words
          const words = desc.split(" ");
          // Check if the number of words is greater than 40
          if (words.length > 60) {
            // Join the first 40 words and append "..." at the end
            return words.slice(0, 60).join(" ") + "...";
          } else {
            // Return the original description if it's already short
            return desc;
          }
        };

    return (
      
      
        <div className="home">
      
      <img className="bgmain" src={bgmain}alt=""/>
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
              
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{truncateDescription(getText(post.desc))}</p>
              <Link to={`/post/${post.id}`} className="read-more-link">
                <button className="read-more-button">Read More</button>
              </Link>

             
            </div>
          </div>
        ))}
      </div>
    </div>
    
        
    );
};
export default Home;