//eerst framework import
import React, { useState } from "react";

// third party packages import
/*nothing*/
//custom/own import code

import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";
import Todo from "../components/Todo";
import Container from "../components/Container";
import Row from "../components/Row";
import "../style/components/add-Todo.css";

const Todos = () => {
  const [placeholderTodos] = useState([{ id: 1 }, { id: 2 }]);
  return (
    <main>
      <AppHeader />
      <Row>
        <Container>
          {
            <div className="c-add-todo">
              <button className="c-add-todo-button">
                <svg
                  className="c-add-todo-button__icon"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </button>
              <div className="c-add-todo-data">
                <input
                  placeholder="what tf am i doing?"
                  className="c-add-todo-data__input"
                  type="text"
                  name=""
                  id=""
                ></input>
                <select className="c-add-todo-data__select" name="" id="">
                  <option value="hobby">hobby</option>
                  <option value="school">school</option>
                  <option value="work">Work</option>
                </select>
              </div>
            </div>
          }
          {placeholderTodos.map((t) => (
            <Todo />
          ))}
        </Container>
      </Row>

      <AppFooter />
    </main>
  );
};

export default Todos;
