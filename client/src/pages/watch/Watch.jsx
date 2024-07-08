import { IoMdArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import "./watch.css";

export default function Watch() {
  const location = useLocation();
  const movie = location.state?.movie;

  console.log(movie); 
  console.log(movie.video)
  

  return (
    <div className="watch">
    <Link to="/">
      <div className="back">
        <IoMdArrowBack />
        Home
      </div>
    </Link>
    <video className="video" autoPlay  progress controls src={movie.video} />
  </div>
  );
}



// import { IoMdArrowBack } from "react-icons/io";
// <IoMdArrowBack />