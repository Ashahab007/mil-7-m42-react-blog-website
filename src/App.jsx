import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Blogs from "./components/Blogs/Blogs";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          <Suspense fallback={<h2>Blogs are Loading . . . </h2>}>
            <Blogs></Blogs>
          </Suspense>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading Time: 0</h1>
          <h1>Bookmarked Count: 0</h1>
        </div>
      </div>
    </>
  );
}

export default App;
