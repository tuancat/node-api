import express, { Request, Response } from "express";
import {ItemInterface} from "./item.interface";
import {addItem, findAll} from "./items.service";

export const itemsRouter = express.Router();


itemsRouter.get('/', async (req, res )=>{
   try {
       const items: Array<ItemInterface> = await findAll();
       res.status(200).send(items);
   } catch (e) {

   }
});

itemsRouter.post('/', async (req: Request, res: Response) => {
   const newItem = await addItem(req.body.item);
});
