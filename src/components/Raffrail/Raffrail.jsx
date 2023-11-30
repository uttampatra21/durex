import React from "react";

const Raffrail = ({ x }) => {
  return (
    <div>
      <tr>
        <td>
          <p>{x.username}</p>
        </td>
        <td>
          <span className={`status ${x.class}`}>{x.status}</span>
        </td>
      </tr>
    </div>
  );
};

export default Raffrail;
