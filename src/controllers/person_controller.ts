import { Request, Response } from "express";
import * as personService from "../services/person_service";
import { PersonDetails } from "../types/interfaces";

export const getPersonById = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  const personId = req.params.id;
  if (!personId || typeof personId !== "string") {
    //BW - Consider adding additional validation to make sure it's a number
    return res.sendStatus(400);
  }
  const personDetails: PersonDetails | null = await personService.getPersonById(
    personId
  );
  if (!personDetails) return res.sendStatus(400);
  res.status(200).json(personDetails);
};
