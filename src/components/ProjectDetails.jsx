import { Actions } from "../context/ProjectContext";
import Tasks from "./Tasks/Tasks";
import { useProject, useProjectDispatch } from "./hooks/customHook";

export default function ProjectDetails({ project, projectTasks }) {
    const dispatch = useProjectDispatch();
    
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const handleOnDelete = () => {
        dispatch({
            type: Actions.DELETE_PROJECT
        });
    }


    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <button className="text-stone-600 hover:text-stone-950" onClick={handleOnDelete}>Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks projectTasks={projectTasks} dispatch={dispatch}/>
        </div>
    );
}