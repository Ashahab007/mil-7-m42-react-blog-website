import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Blogs from "./components/Blogs/Blogs";
import { Suspense, useState } from "react";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [countTime, setCountTime] = useState(0);

  const handleBookMark = (blog) => {
    // console.log(blog);
    const isBookMarked = [...bookmark, blog];
    setBookmark(isBookMarked);
  };
  // console.log(bookmark);

  const handleCountTime = (time, id) => {
    const totalTime = countTime + time;
    setCountTime(totalTime);
    handleRemoveBookmark(id);
  };
  console.log(countTime);

  const handleRemoveBookmark = (id) => {
    console.log(id);
    const remainingBookmark = bookmark.map((mark) => mark.id != id);
    setBookmark(remainingBookmark);
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Suspense fallback={<h2>Blogs are Loading . . . </h2>}>
            <Blogs
              handleBookMark={handleBookMark}
              handleCountTime={handleCountTime}
            ></Blogs>
          </Suspense>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading Time: {countTime}</h1>
          <h1>Bookmarked Count: {bookmark.length}</h1>
          <div className="mt-8">
            {bookmark.map((bookmarked, index) => (
              <p key={index} className="mt-4 bg-amber-100 p-4 rounded-2xl">
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
