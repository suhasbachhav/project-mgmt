import { useRef } from "react";
import Button from "./Buttons";
import Input from "./Input";

export default function NewProject({onAdd}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const entereDueDate = dueDate.current.value;

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: entereDueDate
        })
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><Button>Cancel</Button></li>
                <li><Button onClick={handleSave}>Save</Button></li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} label="Description" textarea/>
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>
        </div>
    )

}