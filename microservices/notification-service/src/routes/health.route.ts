import { Request, Response } from "express";
import catchErrors from "@notifications/utils/catchErrors.util";

const healthCheckHandler = catchErrors(async (_req: Request, res: Response) => {
  res.status(200).json({
    status: "Notification Service is healthy.",
  });
});

export default healthCheckHandler;
