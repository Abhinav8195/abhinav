import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./home.css";
import List from "../../components/list/List";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user && user.accessToken) {
        try {
          console.log("Fetching lists with type:", type, "and genre:", genre);
          const res = await axios.get(
            `https://abhinav-kappa.vercel.app/api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
            {
              headers: {
                token: "Bearer " + user.accessToken,
              },
            }
          );
          console.log("Response data:", res.data);
          setLists(res.data);
        } catch (err) {
          console.error("Error fetching lists:", err);
        }
      } else {
        console.error("User is not logged in or accessToken is missing");
      }
    };

    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {lists.map((list, index) => (
        <List key={index} list={list} />
      ))}
    </div>
  );
};

export default Home;
