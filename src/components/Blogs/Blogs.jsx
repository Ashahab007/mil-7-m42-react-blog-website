import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

import React from "react";

const Blogs = ({ handleBookMark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  // console.log(blogs);
  return (
    <div>
      <h1>Total Blogs: {blogs.length}</h1>
      <div className="all-blogs grid grid-cols-2">
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog.id} handleBookMark={handleBookMark}>
            Selected Blog
          </Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
