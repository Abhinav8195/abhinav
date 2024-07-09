import { CiCircleInfo } from "react-icons/ci";
import "./featured.css";
import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getrandomcontent = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.accessToken) {
        try {
          const res = await axios.get(
            `https://abhinav-kappa.vercel.app/api/movies/random?type=${type}`,
            {
              headers: {
                token: "Bearer " + user.accessToken,
              },
            }
          );

          if (res.data.length > 0) {
            setContent(res.data[0]);
          } else {
            console.log("No content found");
          }
        } catch (error) {
          console.error("Error fetching random content:", error);
        }
      } else {
        console.error("User is not logged in or accessToken is missing");
      }
    };

    getrandomcontent();
  }, [type]);

  const handleClick = () => {
    navigate("/watch", { state: { movie: content } });
  };

  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre" onChange={(e) => setGenre(e.target.value)}>
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content?.img} alt="" />
      <div className="info">
        <img src={content?.imgTitle} alt="" />
        <span className="desc">{content?.desc}</span>
        <div className="buttons">
          <button className="play" onClick={handleClick}>
            <FaPlay />
            <span>Play</span>
          </button>
          <button className="more">
            <CiCircleInfo />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
