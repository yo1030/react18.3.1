import React from "react";

interface propsType {
  color: string,
  time: Date
}

export const Clock: React.FC<propsType> = (props) => {
  return (
    <h1 style={{ color: props.color }}>
      {props.time.toLocaleDateString()}
    </h1>
  );
}
