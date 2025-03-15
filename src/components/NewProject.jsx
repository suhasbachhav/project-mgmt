import { useRef } from "react";
import Button from "./Buttons";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAdd, onCancel}){
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const entereDueDate = dueDate.current.value;

        if(enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            entereDueDate.trim() === ''
        ){
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: entereDueDate
        })
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Inputs</h2>
                <p className="text-stone-600 mb-4 ">Oops...</p>
                <p className="text-stone-600 mb-4 ">Please provide correct inputs for every input field</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><Button onClick={onCancel}>Cancel</Button></li>
                    <li><Button onClick={handleSave}>Save</Button></li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" textarea/>
                    <Input type="date" ref={dueDate} label="Due Date" />
                </div>
            </div>
        </>
    )

}