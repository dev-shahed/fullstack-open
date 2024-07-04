import React from "react";

export default function Notification({ value }) {
  const { message, status } = value;
  if (message === null) {
    return null;
  }
  const className = status === "success" ? "success" : "error";

  return <div className={className}>{message}</div>;
}
