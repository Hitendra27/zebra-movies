import { Request, Response } from "express";
import * as personService from "../services/person_service";

export const getPerson = async (
  req: Request<object, object, object, { personId: string | undefined }>,
  res: Response
) => {
  const personId = req.query.personId;
  const personDetails = await personService.getPersonDetails(personId);
  if (!personDetails) return res.sendStatus(400);

  res.status(200).json(personDetails);
};
