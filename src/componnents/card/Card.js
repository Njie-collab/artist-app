import React from "react";
import "./Card.css";
import { useState } from "react";
import BsHeartFill from "react-icons/bs";
import FaComments from "react-icons/fa";
import BiShareAlt from "react-icons/bi";
// import FaComments from "react-icons/fa";
// import BiShareAlt from "react-icons/bi";
// import CardData from "../CardData";
import cardDataInfo from "../card/CardData"
const Card = ({ message }) => {
  const [card, setCard] = useState();

  return (
    <>
      Card
      <div className="card">
        {card ? (
          <div>
            {cardDataInfo.map((post) => {
              
              <Card key={post.id} post={post} />;
            })}
            <span className="spancard">{card}</span>
            <img src={message.userImage} alt="" />
            <p>{message.username}</p>
            <p>{message.fullname}</p>
            <div>
              {/* <img src={BsHeartFill} />
              <img src={FaComments} />
              <img src={BiShareAlt} /> */}
            </div>
          </div>
        ) : null}
        <button onClick={() =>setCard()}>Click</button>
      </div>
    </>
  );
};

export default Card;
