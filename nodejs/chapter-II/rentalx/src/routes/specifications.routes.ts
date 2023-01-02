import { Router } from "express";

import { SpecificationsRepository } from "../modules/cars/repositories/SpecificationsRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";

const specificationRoutes = Router();
const specificationsRepository = new SpecificationsRepository();

specificationRoutes.post("/", (request, response) => {
  const { description, name } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationsRepository
  );
  createSpecificationService.execute({ description, name });

  return response.status(201).send();
});

export { specificationRoutes };
