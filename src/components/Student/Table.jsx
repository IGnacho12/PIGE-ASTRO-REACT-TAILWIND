import React from "react";

export function Table({ children }) {
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      {children}
    </table>
  );
}

Table.Header = function Header({ children }) {
  return <thead>{children}</thead>;
};

Table.Body = function Body({ children }) {
  return <tbody>{children}</tbody>;
};

Table.Row = function Row({ children, striped = false }) {
  return (
    <tr style={{ backgroundColor: striped ? "#f9f9f9" : "white" }}>
      {children}
    </tr>
  );
};

Table.Head = function Head({ children }) {
  return (
    <th
      style={{
        border: "1px solid #ddd",
        padding: "8px",
        textAlign: "left",
        backgroundColor: "#f4f4f4",
      }}
    >
      {children}
    </th>
  );
};

Table.Cell = function Cell({ children = "?" }) {
  return (
    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
      {children}
    </td>
  );
};
