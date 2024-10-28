import React from "react";
import fileService from "../appwrite/file";
import { Link } from "react-router-dom";

const Postcard = ({ id, title, featuredimage }) => {
  return (
    <Link to={`/post/${id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 h-full ">
        <div className="w-full justify-center mb-4 h-3/4 ">
          <img
            className=" h-full rounded-xl mx-auto"
            src={fileService.getFilePreview(featuredimage)}
            alt={title}
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default Postcard;
