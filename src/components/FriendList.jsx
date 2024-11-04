import React, { useState } from "react";
import Friend from "./Friend";
import Button from "./Button";
import AddFriend from "./AddFriend";

function FriendList({
  onselection,
  selectedFriend,
  setShowAddfriend,
  showAddFriend,
  friendlist,
  setfriendlist,
}) {
  const handleClick = () => {
    setShowAddfriend((prev) => !prev);
  };
  const [formData, setformData] = useState({
    friendName: "",
    imageUrl: "",
  });
  const handleForm = (e) => {
    const { name, value } = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newFriend = {
      //   id: Math.floor(100 + Math.random() * 900),
      id: crypto.randomUUID(),
      name: formData.friendName,
      image: formData.imageUrl,
      balance: 0,
    };
    setfriendlist((prevList) => [...prevList, newFriend]);
   
    setformData({ friendName: "", imageUrl: "" });
    setShowAddfriend(false);
  };
  return (
    <>
      <ul>
        {friendlist.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            onselection={onselection}
            selectedFriend={selectedFriend}
          />
        ))}
        {showAddFriend && (
          <AddFriend
            formData={formData}
            setformData={setformData}
            handleForm={handleForm}
            handleSubmit={handleSubmit}
          />
        )}
        <li>
          <Button onclick={handleClick}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </li>
      </ul>
    </>
  );
}

export default FriendList;
