export type clientsResponse = {
  content: Client[];
  totalPages: number;
};

export type Client = {
  id: number;
  name: string;
  cpf: string;
  picture: string;
  income: number;
  birthDate: string;
  children: number;
};
