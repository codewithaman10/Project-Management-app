import Button from "./Button";
import NewProject from "./NewProject";
import Project from "./Project";

export default function ProjectSidebar({onStartAddProject}) {

    const handleButtonClick = () => {
        console.log("Button is clicked to add a new project");
    }

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
            <div>    
                <Button onClick={onStartAddProject}>+ Add Project</Button>
            </div>
            <Project />
        </aside>
    );
}