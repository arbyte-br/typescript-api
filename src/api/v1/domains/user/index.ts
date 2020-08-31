import { Router, Request, Response } from 'express';
import UserController from './controllers/UserController';

const routes = Router();
const controller = new UserController();
const prefix = '/users';

routes.get(`${prefix}/`, (req: Request, res: Response) => controller.getUSer()
    .then(result => res.send(result))
    .catch(error => console.error(error))
);

routes.post(`${prefix}/`, (req: Request, res: Response) => controller.createUSer({ ...req.body })
    .then(result => res.send(result))
    .catch(error => console.error(error))
);

routes.put(`${prefix}/:id`, (req: Request, res: Response) => controller.updateUser(req.params, req.body)
    .then(result => res.send(result))
    .catch(error => console.error(error))
);

routes.delete(`${prefix}/:id`, (req: Request, res: Response) => controller.deleteUser(req.params)
    .then(result => res.send(result))
    .catch(error => console.error(error))
);

export default routes;