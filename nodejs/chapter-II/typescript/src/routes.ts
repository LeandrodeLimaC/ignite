import { Request, Response } from "express";

import CreateCourseSevice from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
  CreateCourseSevice.execute({
    name: "NodeJS",
    duration: 10,
    educator: "Dani",
  });

  return response.send();
}
