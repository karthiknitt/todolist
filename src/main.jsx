import { createRoot } from "react-dom/client";
import "./index.css";

import "./index.css";

const Todo = (
  <div className="container">
    <div className="item">
      <div className="date">
        <div className="day">12</div>
        <div className="month">Jan</div>
      </div>
      <div className="content">
        <div className="title">
          <h2>Learn React19</h2>
        </div>
        <div className="desc"> Study Lesson 11 on Codex.</div>
      </div>
    </div>
  </div>
);

createRoot(document.getElementById("root")).render(Todo);
