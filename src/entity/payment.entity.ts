export type Payment = {
  id?: number;
  orderId: string;
  tokenAddress: string;
  tokenId: string;
  amount: string;
  createdAt?: Date;
};
