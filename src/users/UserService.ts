import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/graphql/models/User';
import { CreateUserInput } from 'src/utils/CreateUserInput';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getUsers() {
    return this.userRepository.find({
      relations: ['settings'],
    });
  }

  getUserById(id: number) {
    return this.userRepository.findOne({
      where: { id },
      relations: ['settings'],
    });
  }

  createUser(createUserData: CreateUserInput) {
    const newUser = this.userRepository.create(createUserData);
    return this.userRepository.save(newUser);
  }
}
