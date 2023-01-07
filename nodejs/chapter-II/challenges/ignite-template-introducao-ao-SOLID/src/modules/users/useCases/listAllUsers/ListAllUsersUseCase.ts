import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string | string[];
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    if (Array.isArray(user_id)) {
      throw new Error("Should not provide more than one user id");
    }

    const userFound = this.usersRepository.findById(user_id);

    if (!userFound.admin) {
      throw new Error("Requesting user is not an admin");
    }

    const allUsers = this.usersRepository.list();

    return allUsers;
  }
}

export { ListAllUsersUseCase };
