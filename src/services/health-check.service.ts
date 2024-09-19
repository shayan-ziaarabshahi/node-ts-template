import {Request, Response} from "express";

export const getHealthCheck = (req: Request, res: Response) => res.sendStatus(200)