import React from "react";
import { useState } from "react";
import "../tailwind.css";
import {
  EmojiIcon,
  GIFIcon,
  ImageIcon,
  PollIcon,
  ScheduleIcon,
} from "../icons/Icons";
import { collection, addDoc } from "firebase/firestore";
import db from "../Firebase";
const TweetBox = () => {
  const [content, setContent] = useState("");
  const sendTweet = async () => {
    if (content !== "") {
      await addDoc(collection(db, "feed"), {
        displayName: "Bedirhan",
        username: "bedirhhanaydin",
        content,
        timestamp: Date.now(),
        image: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
        avatar:
          "https://pbs.twimg.com/profile_images/1269787539025600514/s5oE587o_400x400.jpg",
      });

      setContent("");
    }
  };
  return (
    <div className="flex flex-col flex-1 mt-2 px-2 ">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's happening"
        onChange={(e) => setContent(e.target.value)}
        value={content}
      ></textarea>
      <div className="flex items-center justify-between">
        <div className="flex -ml-3">
          <div className="tweetBoxIconStyle">
            <ImageIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="tweetBoxIconStyle">
            <GIFIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="tweetBoxIconStyle">
            <PollIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="tweetBoxIconStyle">
            <EmojiIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="tweetBoxIconStyle">
            <ScheduleIcon className="w-6 h-6 text-primary-base" />
          </div>
        </div>
        <button
          className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
          onClick={sendTweet}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;
