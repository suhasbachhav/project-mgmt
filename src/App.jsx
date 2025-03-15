import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectState] =useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  });
  function handleStartAddProject(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleSelectProject(id){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  function handleCancelAddProject(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleDeleteProject(){
    setProjectState(prevState=>{
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects:prevState.projects.filter((proj)=> proj.id !== prevState.selectedProjectId)
      }
    })
  }

  function handleAddTask(text){
    setProjectState(prevState=>{
      const taskID = Math.random();
      const newTask = {
        text:text,
        projectId: prevState.selectedProjectId,
        id: taskID
      }

      return {
        ...prevState,
        tasks :[newTask, ...prevState.tasks]
      }
    });
    
  }
  function handleDeleteTask(id){
    setProjectState(prevState=>{
      return {
        ...prevState,
        tasks:prevState.tasks.filter((task)=> task.id !== id)
      }
    })
  }


  function handleAddProject(projectData){
    setProjectState(prevState=>{
      const projectID = Math.random();
      const newProject = {
        ...projectData,
        id: projectID
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects:[...prevState.projects, newProject]
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  console.log(projectsState)
  let content = <SelectedProject 
    project={selectedProject} 
    onDelete={handleDeleteProject}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
    tasks={projectsState.tasks}
  />;

  if(projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
  } else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar 
        onStartAddProject={handleStartAddProject} 
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
