import { useEffect, useReducer } from "react";
import { Reducer as reducer, initialState } from "../reducer/Reducer";
import TaskList from "./TaskList";
import AddTasks from "./AddTasks";

export default function Tasks({ onTaskUpdate, projectTasks }) {
    /**
     * In Case of useState we'll only have to pass the initial state and the useState will return 2 thing:
     * 1. Variable which will hold the current value of state variable per render
     * 2. A function to update the state variable
     * 
     * In case of useReducer we've to pass a Reducer function as well as the initial state and useReducer will return following 2 things:
     * 1. Variable which will hold the current value of state variable per render
     * 2. A dispatch function which will dispatch actions to Reducer in reponse of user doing something
     */
    const [tasks, dispatch] = useReducer(reducer, projectTasks);

    // I know this is the worst thing someone can do in React but for time being i am 
    // putting the callback of the parent in the useEffect of child component
    // useEffect(() => {
    //     onTaskUpdate(tasks);

    // }, [tasks]);

    return(
        <section>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
            <AddTasks dispatch={dispatch} />
            {tasks.length > 0 ? <TaskList tasks={tasks} dispatch={dispatch} /> :
               <p className="text-stone-800 my-4">No Task recorded for this project</p> }
        </section>
    );
}