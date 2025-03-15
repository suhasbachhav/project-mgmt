import noProjImg from '../assets/no-projects.png'
import Button from './Buttons';

export default function NoProjectSelected({onStartAddProject}){
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjImg} alt="An empty task list" className="w-16 h-16 object-contain mx-auto "/>
            <h2 className="text-xl font-bold text-stone-500 my-4 ">No Projects selected</h2>
            <p className="text-stone-400 mb-4 ">Select a project or get started with new one</p>
            <p className="mb-8">
                <Button onClick={onStartAddProject}>
                    Create New Project
                </Button>
            </p>
        </div>
    );
}