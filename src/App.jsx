import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import DefaultScreen from "./components/DefaultScreen";

function App() {
  const [projectState, setProjectState] = useState(
    {
      selectedProjectId: undefined,
      projects: []
    }
  );

  console.log(projectState);

  const handleAddNewProject = () => {
    // this is an Updater function which react will queue and will run during the rendering
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId: null,
      }
    });
  }

  const handleNewProject = (newProject) => {
    const newProjectId = projectState.projects.length;
    newProject.id = newProjectId + 1;
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [
          ...prev.projects,
          newProject
        ]
      }
    });
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject handleSaveNewProject={handleNewProject} />;
  } else {
    content = <DefaultScreen onStartAddProject={handleAddNewProject}/>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Project</h1> */}
      <ProjectSidebar onStartAddProject={handleAddNewProject}/>
      {content}
    </main>
  );
}

export default App;
