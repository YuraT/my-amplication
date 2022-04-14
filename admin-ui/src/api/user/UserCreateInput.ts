export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  Nickname?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
