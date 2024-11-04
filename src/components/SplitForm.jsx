import React from "react";
import Button from "./Button";
import { useState } from "react";

function SplitForm({ selectedFriend, formData, setFormData, onSplitBill }) {
  const friendShare = formData.totalBill
    ? Number(formData.totalBill) - Number(formData.yourExpense)
    : 0;

  const handleBillChanges = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleBillSplit = (e) => {
    e.preventDefault();
    if (!formData.totalBill || !formData.yourExpense) return;

    onSplitBill(formData.whoIsPaying === "user" ? yourExpense : -friendShare);
  };
  return (
    <>
      <form className="form-split-bill" onSubmit={handleBillSplit}>
        <h2>Split the bill with {selectedFriend.name} </h2>
        <label> 💰 Bill value:</label>
        <input
          type="text"
          name="totalBill"
          value={formData.totalBill}
          placeholder="0"
          onChange={handleBillChanges}
        />
        <label>👧 Your expense:</label>
        <input
          type="text"
          name="yourExpense"
          placeholder="0"
          value={formData.yourExpense}
          onChange={handleBillChanges}
        />
        <label>👬{selectedFriend.name}'s expense:</label>
        <input type="text" readOnly disabled value={friendShare} />
        <label>🤑 Who's paying the bill?</label>
        <select onChange={handleBillChanges}>
          <option value="you">You</option>
          <option value={selectedFriend.name}>{selectedFriend.name} </option>
        </select>
        <Button>Split the Bill</Button>
      </form>
    </>
  );
}

export default SplitForm;
