import { useEffect, useState } from "react";

import React from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return (
    <div>
      <h1>Total Blogs: {blogs.length}</h1>
    </div>
  );
};

export default Blogs;
