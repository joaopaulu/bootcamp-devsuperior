export type clientsResponse = {
  content: Client[];
  totalPages: number;
};

export type Client = {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  date: string;
};
