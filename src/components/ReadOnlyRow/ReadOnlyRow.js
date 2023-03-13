import React from "react";

import "./ReadOnlyRow.css";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const ReadOnlyRow = ({
  user,
  deleteUser,
  clickEditUser,
  selectUser,
  selectedRowIds,
}) => {
  const index = selectedRowIds.findIndex((id) => id === user.id);
  const Checked = index === -1 ? false : true;

  return (
    <>
      <td>
        <input
          type="checkbox"
          onChange={() => selectUser(user)}
          checked={Checked}
        />
      </td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td className="role">{user.role}</td>
      <td>
        <FaEdit className="editButton" onClick={() => clickEditUser(user)} />{" "}
        <FaTrashAlt
          className="deleteButton"
          onClick={() => deleteUser(user.id)}
        />
      </td>
    </>
  );
};

export default ReadOnlyRow;