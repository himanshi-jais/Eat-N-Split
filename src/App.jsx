import { useState } from "react";
import FriendList from "./components/FriendList";
import SplitForm from "./components/SplitForm";
import "./App.css";

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  
  ];
  const [friendlist, setfriendlist] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(false);
  const [showAddFriend, setShowAddfriend] = useState(false);

  const [formData, setFormData] = useState({
    totalBill: "",
    yourExpense: "",
    whoIsPaying: "you",
  });

  const handleSelect = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? false : friend));
    setShowAddfriend(false);
    setFormData({ totalBill: "", yourExpense: "", whoIsPaying: "you" });
  };
  function handleSplitBill(value) {
    setfriendlist((friend) =>
      friend.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList
            onselection={handleSelect}
            selectedFriend={selectedFriend}
            setShowAddfriend={setShowAddfriend}
            showAddFriend={showAddFriend}
            friendlist={friendlist}
            setfriendlist={setfriendlist}
          />
        </div>
        {selectedFriend && (
          <SplitForm
            selectedFriend={selectedFriend}
            formData={formData}
            setFormData={setFormData}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </>
  );
}

export default App;
