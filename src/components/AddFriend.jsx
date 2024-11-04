import Button from "./Button";

function AddFriend({ formData, handleForm, handleSubmit }) {
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👭 Friend Name:</label>
      <input
        type="text"
        name="friendName"
        value={formData.friendName}
        onChange={handleForm}
        required
      />
      <label>🖼 Image Url</label>
      <input
        type="text"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={handleForm}
        required
      />
      <Button>Add</Button>
    </form>
  );
}

export default AddFriend;
