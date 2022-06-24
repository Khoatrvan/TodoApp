import React, { useContext, useState } from "react";
import Header from "../home/header/Header";
import SideBar from "../home/sidebar/Sidebar";
import { Link } from "react-router-dom"
import "./style.css"
import { v4 as uuidv4 } from 'uuid';
import { useForm } from "react-hook-form";
import { GlobalContext } from "../../context/GlobalState";

function AddTask() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [title, setTitle] = useState("")
    const [creator, setCreator] = useState("")
    const [description, setDescription] = useState("")
    const { addTask, tasks } = useContext(GlobalContext)

    const onHandleSubmit = () => {
        const newTask = {
            id: uuidv4(),
            title: title,
            creator: creator,
            status: "New",
            description: description,
        }
        addTask && addTask(newTask)
    }
    return (
        <div className="container">
            <Header />
            <div className="main">
                <SideBar />
                <div className="add-task">
                    <form className="add-task-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input type="text" placeholder="Place hoder" id="title"
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="creator">Creator:</label>
                            <input type="text" placeholder="Name of creator" id="creator"
                                value={creator} onChange={(e) => { setCreator(e.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="desciption">Desciption:</label>
                            <input type="text" placeholder="Desciption Details" id="desciption"
                                value={description} onChange={(e) => { setDescription(e.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <Link to="/">
                                <button type="submit"
                                    onClick={onHandleSubmit}
                                >Save</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    );
}

export default AddTask;