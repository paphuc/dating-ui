import React from "react";

export default function Hook() {
  const getAge = (age: string): string => {
    return (new Date().getFullYear() - new Date(age).getFullYear()).toString();
  };
  return {
    getAge,
  };
}
