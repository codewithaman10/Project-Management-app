import { useState } from "react";
import { useProjectDispatch } from "../hooks/customHook";
import { Actions } from "../../context/ProjectContext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function AddTasks() {
    const dispatch = useProjectDispatch();
    const [title, setTitle] = useState('');

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setTitle(event.target.value);
    }

    const handleAddTask = (e) => {
        console.log("Dispatching action: ", Actions.ADD_TASK);
        // Here we are telling React "what the user just did" by dispatching the below action
        // Unlike instead of telling react "what to do" by setting state
        dispatch({
            type: Actions.ADD_TASK,
            title: title,
        });

        setTitle('');
    }

    return(
        <div className="flex items-center gap-4">
            <input value={title} className="w-11/12 px-2 py-1 rounded-md bg-stone-200" placeholder="# Add new Task"
            onChange={handleInputChange} onKeyDown={(e) => {
                if(e.key === 'Enter') handleAddTask(e);
            }}/>
            <button className="text-stone-750 hover:text-stone-950 w-1/12 disabled:text-gray-500 " onClick={handleAddTask} disabled={title === ''}>
                Add Task
            </button>
        </div>
    );
}