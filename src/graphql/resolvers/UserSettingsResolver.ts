import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserSetting } from '../models/UserSetting';
import { createUserSettingsInput } from 'src/utils/CreateUserSettingsInput';
import { UserSettingService } from 'src/users/UserSettingService';

@Resolver()
export class UserSettingsResolver {
  constructor(private userSettingService: UserSettingService) {}
  @Mutation(() => UserSetting)
  async createUserSettings(
    @Args('createUserSettingsData')
    createUserSettingsData: createUserSettingsInput,
  ) {
    // console.log(createUserSettingsData);
    const userSetting = await this.userSettingService.createUserSettings(
      createUserSettingsData,
    );

    return userSetting;
  }
}
