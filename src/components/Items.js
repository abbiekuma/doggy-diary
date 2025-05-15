import React, { useState } from "react";

const Item = ({
  id,
  task,
  completed,
  toggleComplete,
  deleteItem,
  editTask,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task);

  const handleEdit = () => {
    if (editText.trim()) {
      editTask(id, editText.trim());
      setIsEditing(false);
    }
  };

  return (
    <li className="flex justify-between items-center border-b py-2 font-primary">
      {isEditing ? (
        <div className="flex-grow flex items-center">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border p-2 flex-grow rounded bg-mainTl text-mainT2d font-secondary"
          />
          <button
            onClick={handleEdit}
            className="ml-2 bg-mainT2 text-mainTl px-2 py-1 rounded hover:bg-mainT2d"
          >
            Save
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="ml-2 bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      ) : (
        <>
          <span
            onClick={() => toggleComplete(id)}
            className={`cursor-pointer flex-grow ${
              completed ? "line-through text-gray-500" : ""
            }`}
          >
            {task}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="text-mainT2 hover:text-mainT"
            >
              Edit
            </button>
            <button
              onClick={() => deleteItem(id)}
              className="text-mainT hover:text-mainT2"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default Item;
