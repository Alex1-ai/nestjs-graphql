import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class createUserSettingsInput {
  @Field(() => Int)
  userId: number;

  @Field({ nullable: true, defaultValue: false })
  receiveNotifications: boolean;

  @Field({ defaultValue: false, nullable: true })
  receiveEmails: boolean;
}
