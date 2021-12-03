import { PrismaClient } from "@prisma/client";
import { UserDto } from "../dtos/userDto";

const prisma = new PrismaClient();

export class UsersService {
  listAll() {
    const users = prisma.user.findMany();
    return users;
  }

  async create(user: UserDto) {
    const { name, email } = user;

    const createdUser = await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    if (createdUser) {
      return createdUser;
    }
  }
}
