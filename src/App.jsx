import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Blogs from "./components/Blogs/Blogs";
import { Suspense, useState } from "react";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const handleBookMark = (blog) => {
    // console.log(blog);
    const isBookMarked = [...bookmark, blog];
    setBookmark(isBookMarked);
  };
  console.log(bookmark);

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Suspense fallback={<h2>Blogs are Loading . . . </h2>}>
            <Blogs handleBookMark={handleBookMark}></Blogs>
          </Suspense>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading Time: 0</h1>
          <h1>Bookmarked Count: {bookmark.length}</h1>
          <div className="mt-8">
            {bookmark.map((bookmarked, index) => (
              <p key={index} className="mt-4">
                {bookmarked.title}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
