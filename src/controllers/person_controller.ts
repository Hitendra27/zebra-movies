import { Request, Response } from "express";
import * as personService from "../services/person_service";

export const getPersonById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const personId = req.params.id;
  if (!personId || typeof personId !== "string") {
    return res.sendStatus(400);
  }
  const personDetails = await personService.getPersonById(personId);
  if (!personDetails) return res.sendStatus(400);
  res.status(200).json(personDetails);
};
