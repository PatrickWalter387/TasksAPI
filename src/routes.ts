import { Router, Request, Response} from "express";
import TasksController from "./controller/TasksController";

const routes = Router();

routes.get('/', (req: Request, res: Response) => {
    return res.json({ message: "Hello World!" });
});

routes.get("/tasks", TasksController.index);
routes.post("/tasks", TasksController.store);
routes.get("/task/:id", TasksController.show);
routes.put("/tasks/:id", TasksController.update);
routes.delete("/tasks/:id", TasksController.delete);

export default routes;