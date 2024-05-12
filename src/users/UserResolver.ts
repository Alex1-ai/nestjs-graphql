import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { User } from '../graphql/models/User';
import { CreateUserInput } from 'src/utils/CreateUserInput';
import { UserService } from './UserService';
import { UserSettingService } from './UserSettingService';

// export let incrementalId = 4;
// we are passing the resolver beccause
// of => User
@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private userSettingService: UserSettingService,
  ) {}
  @Query(() => [User])
  getUsers() {
    return this.userService.getUsers();
  }

  @Query(() => User, { nullable: true })
  getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserById(id);
  }

  //   @ResolveField(() => UserSetting, { name: 'settings', nullable: true })
  //   getUserSettings(@Parent() user: User) {
  //     return this.userSettingService.getUserSettingById(user.id);
  //   }

  @Mutation(() => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return this.userService.createUser(createUserData);
  }
}
