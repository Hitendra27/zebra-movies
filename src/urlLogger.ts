import { Request, Response, NextFunction } from "express";

const urlLogger = (req: Request, res: Response, next: NextFunction) => {
  const url = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  console.log("Requested URL:", url);
  next();
};

export default urlLogger;
