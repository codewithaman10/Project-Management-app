import { useEffect, useRef } from "react";
import Input from "./Input";

export default function NewProject({handleSaveNewProject}) {
    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    const handleSave = () => {
        const title = titleRef.current.value;   // .value since all the textarea and input html tag have value in which they stores the value
        const description = descriptionRef.current.value;
        const dueDate = dueDateRef.current.value;

        // Validation of these values
        const newProject = {
            title: title,
            description: description, 
            dueDate: dueDate
        };

        handleSaveNewProject(newProject);
    }

    useEffect(() => {
        // Once this component is mounted we'll focus the title input area
        titleRef.current.focus();

        // No CleanUp function is required
        return () => {
            console.log("CleanUp is called for NewProject.");
        };
    }, []);

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button onClick={() => console.log()} className="text-stone-800 hover:text-stone-950">Cancel</button>     
                </li>
                <li>
                    <button onClick={handleSave} className="bg-stone-800 text-stone-50 hover:bg-stone-950 px-6 py-2 rounded-md">Save</button>
                </li>
            </menu>
            <div>
                <Input ref={titleRef} label="TITLE" placeholder="Enter Project Title"/>
                <Input ref={descriptionRef} label="DESCRIPTION" isTextArea placeholder="Description about the project..."/>
                <Input ref={dueDateRef} label="DUE DATE" type="date" />
            </div>
        </div>
    );
}