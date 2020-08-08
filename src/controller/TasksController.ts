import {Request, Response} from "express";
import {Tasks} from "../entity/Tasks";
import {getRepository} from "typeorm";

class TasksController{
    async index(req: Request, res: Response){
        const tasksRepository = getRepository(Tasks);
        const tasks = await tasksRepository.find();
        return res.json(tasks);
    }

    async show(req: Request, res: Response){
        const { id } = req.params;
        const task = await getRepository(Tasks).findOne(id);
        return res.json(task);
    }

    async store(req: Request, res: Response){
        const task = await getRepository(Tasks).save(req.body);
        return res.json(task);
    }

    async update(req:Request, res: Response){
        const { id } = req.params;
        const task = await getRepository(Tasks).update(id, req.body);

        if(task.affected === 1){
            const updatedTask = await getRepository(Tasks).findOne(id);
            return res.json(updatedTask);
        }

        return res.status(404).json({ message: "Task Not Found!"});
    }

    async delete(req:Request, res: Response){
        const { id } = req.params;
        const task = await getRepository(Tasks).delete(id);

        if(task.affected === 1){
            return res.json({ message: "Deletado com sucesso"});
        }

        return res.status(404).json({ message: "Task Not Found!"});
    }
}

export default new TasksController();