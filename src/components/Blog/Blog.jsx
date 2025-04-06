import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog }) => {
  console.log(blog);
  const { id, author, author_img, posted_date, title, cover } = blog;

  return (
    <div>
      <div className="card bg-base-100">
        <figure className="px-10 pt-10">
          <img src={cover} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">{title}</h2>
          <div className="flex items-center gap-4">
            <img className="w-8" src={author_img} alt="" srcset="" />
            <p>{author}</p>
            <FaBookmark size={20} />
          </div>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Mark As Read</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
