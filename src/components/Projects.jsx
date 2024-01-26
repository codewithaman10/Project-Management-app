export default function Projects({ projects, onSelect, selectedProjectId }) {
    return (
        <ul className="mt-8">
            {
                projects.map(project => {
                    let cssClass = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
                    if (project.id === selectedProjectId) {
                        cssClass += ' bg-stone-800 text-stone-200';
                    } else {
                        cssClass += ' text-stone-400';
                    }

                    return (
                        <li key={project.id}>
                            <button onClick={() => onSelect(project.id)}
                                className={cssClass}>
                                {project.title}
                            </button>
                        </li>
                    )
                })
            } 
        </ul>
    );
}

