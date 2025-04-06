import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookMark, handleCountTime }) => {
  // console.log(blog);
  //   const { id, author, author_img, posted_date, title, cover, hashtags } = blog;

  return (
    <div>
      <div className="card bg-base-100">
        <figure className="px-10 pt-10">
          <img src={blog.cover} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">{blog.title}</h2>
          <div className="flex items-center gap-4">
            <img className="w-8" src={blog.author_img} />
            <p>{blog.author}</p>

            <button onClick={() => handleBookMark(blog)}>
              <FaBookmark size={20} />
            </button>
          </div>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="flex gap-1">
            {blog.hashtags.map((hash, index) => (
              <button className="btn" key={index}>
                {hash}
              </button>
            ))}
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleCountTime(blog.reading_time)}
              className="btn btn-primary"
            >
              Mark As Read
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
