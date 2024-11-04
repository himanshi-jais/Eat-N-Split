import React from "react";
import Button from "./Button";

function Friend({ friend, onselection, selectedFriend }) {
  const isSelected = selectedFriend?.name === friend.name;
  return (
    <>
      <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt="" />
        <h3>{friend.name}</h3>
        {friend.balance === 0 ? (
          <p>{`You and ${friend.name} are even `}</p>
        ) : friend.balance > 0 ? (
          <p className="green">{`${friend.name} owes you $${friend.balance}`}</p>
        ) : (
          <p className="red">{`You owe ${friend.name} $${Math.abs(
            friend.balance
          )}`}</p>
        )}

        <Button onclick={() => onselection(friend)}>
          {isSelected ? "Close" : "Select"}
        </Button>
      </li>
    </>
  );
}

export default Friend;
