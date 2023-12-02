import React from "react";

const RaffrailNames = ({ x }) => {
  return (
    <tr>
      <td>
        <p>{x.username}</p>
      </td>
      <td>
        <span className={`status ${x.className}`}>{x.status}</span>
      </td>
    </tr>
  );
};

export default RaffrailNames;
