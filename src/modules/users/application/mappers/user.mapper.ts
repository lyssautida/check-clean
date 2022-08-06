import { User as EntityUser } from '../../domain/entities/user/user';
import { Password } from '../../domain/entities/user/value-objects/password';
import { UserModel } from '../../infra/repositories/models/user.model';
import { ICreateUserDTO } from '../usecases/dtos/create-user.dto';
import { IOutputUserDTO } from '../usecases/dtos/output-user.dto';

export class UserMapper {
  public static toOutputDTO(user: EntityUser): IOutputUserDTO {
    return {
      id: user.id,
      email: user.email,
      phone: `+${user.phone.ddi} (${user.phone.ddd}) ${user.phone.number}`,
    };
  }

  public static toRepository(user: EntityUser): UserModel {
    return {
      id: user.id,
      email: user.email,
      ddi: user.phone.ddi,
      ddd: user.phone.ddd,
      number: user.phone.number,
      password: user.password.value,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    };
  }

  public static toDomain(user: ICreateUserDTO): EntityUser {
    return new EntityUser({
      ...user,
      password: new Password(user.password, false),
    });
  }

  public static toApplication(user: UserModel): EntityUser {
    return new EntityUser({
      ...user,
      id: user.id,
      phone: {
        ddi: user.ddi,
        ddd: user.ddd,
        number: user.number,
      },
      password: new Password(user.password, true),
    });
  }
}