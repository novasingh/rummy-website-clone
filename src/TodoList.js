import { useEffect, useState } from "react";
import { getListFromLocalStorage, setListToLocalStorage } from "./utility";
import dayjs from "dayjs";
import { Button, Form, InputGroup } from "react-bootstrap";
import 'todo.scss';

const TodoList = () => {

    const [newTask, setNewTask] = useState("");
    const [list, setList] = useState([]);
    const [selectedDate, setSelectedDate] = useState(new Date());
  
    useEffect(() => {
      const storedList = getListFromLocalStorage();
      setList(storedList);
    }, []);
  
    const onListSave = (task) => {
      if (task !== "" && task !== undefined) {
        const updatedList = [
          ...list,
          { task, date: new Date().toISOString(), status: false },
        ];
        setList(updatedList);
        setListToLocalStorage(updatedList);
        setNewTask("");
      } else {
        alert("Add new Task is not empty.");
      }
    };
  
    const uniqueDates = new Set();
    const filteredDates = list.filter((item) =>
      !uniqueDates.has(new Date(item.date).toISOString().substr(0, 10))
        ? uniqueDates.add(new Date(item.date).toISOString().substr(0, 10))
        : false
    );
  
    const handleTaskClick = (index) => {
      console.log("index:", index);
      const updatedTasks = list.map((task, i) => {
        if (i === index) {
          return { ...task, status: !task.status };
        }
        return task;
      });
  
      setList(updatedTasks);
      setListToLocalStorage(updatedTasks);
    };

    return(
        <div className="d-flex justify-content-center align-items-center mt-4">
      <div className="todo-list">
        <div className="todo-list-header">
          <h1 className="date-text text-center">
            {dayjs(new Date()).format("dddd, MMMM D, YYYY")}
          </h1>
          <div className="form-element py-5">
            <InputGroup className="mb-3 shadow">
              <Form.Control
                placeholder="Add new task "
                aria-label="Add new task "
                aria-describedby="basic-addon2"
                onChange={(e) => setNewTask(e.target.value)}
                value={newTask}
                required
              />
              <Button
                variant="secondary"
                id="button-addon2"
                onClick={() => onListSave(newTask)}
              >
                +
              </Button>
            </InputGroup>
          </div>
        </div>
        <div className="todo-list-container shadow ">
          <div className="todo-sidebar p-4">
            {filteredDates.length > 0 ? filteredDates.map((item, index) => (
              <div
                className={`todo-date-item ${
                  dayjs(item.date).format("YYYY-MM-DD") ===
                  dayjs(selectedDate).format("YYYY-MM-DD")
                    ? "active-date"
                    : ""
                }`}
                key={index}
                onClick={() => setSelectedDate(item.date)}
              >
                {dayjs(item.date).format("MMM D, YYYY")}
              </div>
            )) : <div className="todo-date-item active-date">Today</div>}
          </div>
          <div className="todo-content p-4">
            <ul>
              {list.length > 0 ? list.map(
                (item, index) =>
                  dayjs(item.date).format("YYYY-MM-DD") ===
                    dayjs(selectedDate).format("YYYY-MM-DD") && (
                    <li
                      className={`todo-content-item text-truncate ${
                        item.status ? "text-strikeout" : ""
                      }`}
                      title={item.task}
                      key={index}
                      onClick={() => handleTaskClick(index)}
                    >
                      {item.task}
                    </li>
                  )
              ): 'No task added yet.'}
            </ul>
          </div>
        </div>
      </div>
    </div>
    )
}
export default TodoList;