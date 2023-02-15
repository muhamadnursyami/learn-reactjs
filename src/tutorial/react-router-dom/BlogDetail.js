import React from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const params = useParams();

  return <div>Ini Blog Detail :{params.id} </div>;
}
