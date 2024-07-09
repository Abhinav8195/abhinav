import "./listItem.css";
 import { IoMdAdd } from "react-icons/io";
 import { FaPlay } from "react-icons/fa";
 import { MdOutlineThumbUp } from "react-icons/md";
 import { MdOutlineThumbDown } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function ListItem({ index, item }) {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get("https://abhinav-kappa.vercel.app/api/movies/find/" + item, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  const handleClick = () => {
    navigate("/watch", { state: { movie: movie } });
  };

  return (
    <div onClick={handleClick}>
    <div
      className="listItem"
      style={{ center: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie?.img} alt="" />
      {isHovered && (
        <>
          <video src={movie?.trailer} autoPlay={true} loop />
          <div className="itemInfo" style={{color:'white'}}>
            <div className="icons">
              <FaPlay className="icon" />
              <IoMdAdd className="icon" />
              <MdOutlineThumbUp className="icon" />
              <MdOutlineThumbDown className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>{movie?.duration}</span>
              <span className="limit">+{movie?.limit}</span>
              <span>{movie?.year}</span>
            </div>
            <div className="desc">{movie?.desc}</div>
            <div className="genre">{movie?.genre}</div>
          </div>
        </>
      )}
     
    </div>
    </div>
  );
}


// import { IoMdAdd } from "react-icons/io";
// import { FaPlay } from "react-icons/fa";
// import { MdOutlineThumbUp } from "react-icons/md";
// import { MdOutlineThumbDown } from "react-icons/md";
// <FaPlay className="icon" />
// <IoMdAdd className="icon" />
// <MdOutlineThumbUp className="icon" />
// <MdOutlineThumbDown className="icon" />
