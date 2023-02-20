import React, { useEffect, useState } from "react";
import TweetBox from "../components/TweetBox";
import { PopulerIcon } from "../icons/Icons";
import Divider from "../components/Divider";
import db from "../Firebase";
import { collection, getDocs } from "firebase/firestore";
import FeedList from "../components/FeedList";
const Content = () => {
  const [tweets, setTweets] = useState([]);

  const fetchPost = async () => {
    await getDocs(collection(db, "feed")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setTweets(newData);
      console.log(tweets, newData);
    });
  };
  //boş dizi 1kere yap anlamında
  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <main className=" flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
        <span className="font-bold text-xl">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex px-4 py-3 space-x-4">
        <img
          src="https://pbs.twimg.com/profile_images/1269787539025600514/s5oE587o_400x400.jpg"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />
        <TweetBox />
      </div>
      <Divider />
      <FeedList tweets={tweets} />
    </main>
  );
};

export default Content;
