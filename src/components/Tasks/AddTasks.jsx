import { useState } from "react";
import { Actions } from "../reducer/Reducer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

// dispatch method will come from the parent of AddTask in form of a prop
export default function AddTasks({ dispatch }) {
    const [title, setTitle] = useState('');

    const handleInputChange = (event) => {
        console.log(event.target.value);
        setTitle(event.target.value);
    }

    const handleAddTask = (e) => {
        console.log("Dispatching action: ", Actions.ADD_TASK);
        // Here we are telling React "what the use just did" by dispatching the below action
        // Unlike instead of telling react "what to do" by setting state
        dispatch({
            type: Actions.ADD_TASK,
            title: title,
        });

        setTitle('');
    }

    return(
        <div className="flex items-center gap-4">
            <input value={title} className="w-64 px-2 py-1 rounded-md bg-stone-200" placeholder="# Add new Task"
            onChange={handleInputChange} onKeyDown={(e) => {
                if(e.key === 'Enter') handleAddTask(e);
            }}/>
            <button className="text-stone-750 hover:text-stone-950 disabled:text-gray-500" onClick={handleAddTask} disabled={title === ''}>
                Add Task
            </button>
        </div>
    );
}