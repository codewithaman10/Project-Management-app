import { Fragment, useState } from "react";
import { Actions } from "../../context/ProjectContext";

// Get the List of Tasks and convert them to JSX
export default function TaskList({ tasks, dispatch }) {

    return(
        <ul className="taskList">
            {
                tasks.map(task => (
                    <li key={task.id}>
                        <Task task={task} dispatch={dispatch}/>
                    </li>
                ))
            }
        </ul>
    );
}

export function Task({task, dispatch}) {
    // Here we can update the task title if required and can mark the task as done after clicking on the checkbox
    const [updatedTitle, setUpdatedTitle] = useState(task.title);
    const [isEditing, setIsEditing] = useState(false);

    const handleCheckBox = (event) => {
        dispatch({
            type: Actions.UPDATE_TASK,
            newTask: {
                ...task,
                done: event.target.checked,
                updatedAt: Date.now(),
            }
        });
    }

    // We already know which task to update and which task to delete based on the task prop
    const handleTitleUpdate = () => {
        dispatch({
            type: Actions.UPDATE_TASK,
            newTask: {
                ...task,
                title: updatedTitle,
                updatedAt: new Date().toISOString(),
            }
        });
        
        // Once the action is dispatched to update the Task List set isEditing to false again
        setIsEditing(false);
    }

    const handleTaskDelete = () => {
        dispatch({
            type: Actions.DELETE_TASK,
            id: task.id,
        });
    }

    return(
        <Fragment>
            <input type="checkbox" checked={task.done} onChange={handleCheckBox}/>
            {
                !isEditing ? 
                <>
                    <span >{task.title}</span>
                    {/* <span className="timeStamp">{task.updatedAt}</span> */}
                    <button onClick={() => setIsEditing(true)}>Edit</button>      {/* This button will update the local isEditing state of Task component */}
                    <button onClick={handleTaskDelete}>Delete</button>  {/* This button will dispatch the DELETE action to the Reducer */}
                </>
                : 
                // Show the input text box to update the title
                <>
                    <input type="text" value={updatedTitle} onChange={
                        (e) => {
                            {/* Just update the local state to track the updated title */}
                            setUpdatedTitle(e.target.value);
                        }} 
                    />
                    <button onClick={handleTitleUpdate}>
                        Save
                    </button>
                </> 
            }
        </Fragment>
    );
}