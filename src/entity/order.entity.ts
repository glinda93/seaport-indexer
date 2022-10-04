export type Order = {
  id?: string;
  seller: string;
  buyer: string;
  transactionHash: string;
  createdAt?: Date;
};
