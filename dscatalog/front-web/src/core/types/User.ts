export type UsersResponse = {
  content: User[];
  totalPages: number;
};

export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
};
