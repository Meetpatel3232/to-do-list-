import { useState } from "react";
import { addList } from "../jsapi/api";

const AddList = () => {
    const [task, setTask] = useState("");

    const addTasks = async () => {
        if (!task.trim()) return;

        try {
            const response = await addList(task);

            if (response?.success) {
                setTask("");
            }

        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-0">
            <label>Enter the task</label>

            <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
                type="text"
                className="bg-white"
            />

            <button
                className="text-black bg-emerald-300"
                onClick={addTasks}
            >
                Add
            </button>
        </div>
    );
};

export default AddList;