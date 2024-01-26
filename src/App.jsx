import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectSidebar from "./components/ProjectSidebar";
import DefaultScreen from "./components/DefaultScreen";
import ProjectDetails from "./components/ProjectDetails";
import { ProjectProvide } from "./context/ProjectContext";

function App() {

  const handleAddNewProject = () => {
    // this is an Updater function which react will queue and will run during the rendering
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId: null,
      }
    });
  }

  const handleCancleEvent = () => {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId: undefined
      }
    })
  }

  const handleProjectSelect = (projectId) => {
    console.log(projectId);
    // Update the state so that the selectedProjectId should reflect the id of the project the userClicked
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId: projectId
      }
    });
  }

  const handleNewProject = (projectData) => {
    console.log(projectData);
    const newProject = {
      ...projectData,
      id: projectState.projects.length
    }
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

  const handleProjectDeletion = () => {
    setProjectState(prev => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter(project => project.id !== project.selectedProjectId)
      }
    });
  }

  const handleProjectTaskUpdate = (updatedTasks) => {
    let project = projectState.projects.filter(project => project.id === projectState.selectedProjectId);
    const updatedProject = {
      ...project,
      tasks: updatedTasks
    };

    setProjectState(prev => {
      return {
        ...prev,
        projects: [
          prev.projects.filter(project => project.id !== prev.selectedProjectId),
          updatedProject
        ]
      }
    });
  }

  let content;
  if (projectState.selectedProjectId === null) {
    content = <NewProject handleSaveNewProject={handleNewProject} handleCancleEvent={handleCancleEvent} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <DefaultScreen onStartAddProject={handleAddNewProject}/>;
  } else {
    const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);
    content = <ProjectDetails project={selectedProject} onDelete={handleProjectDeletion} onProjectTaskUpdate={handleProjectTaskUpdate}/>;
  }

  return (
    <ProjectProvide>
      <main className="h-screen my-8 flex gap-8">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Project</h1> */}
      <ProjectSidebar projects={projectState.projects} onStartAddProject={handleAddNewProject} onSelect={handleProjectSelect} selectedProjectId={projectState.selectedProjectId}/>
      {content}
    </main>
    </ProjectProvide>
  );
}

export default App;
