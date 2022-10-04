import { OrderItem } from "../../entity/order-item.entity";
import { Order } from "../../entity/order.entity";
import { Payment } from "../../entity/payment.entity";
import { OrderFulfilledEvent } from "../../typechain-types/contracts/Seaport";

export const parseOrderFulfilledEvent = (event: OrderFulfilledEvent) => {
  const order: Order & { id: string } = {
    id: event.args.orderHash,
    transactionHash: event.transactionHash,
    seller: event.args.offerer,
    buyer: event.args.recipient,
    // createdAt: event.blockTimestamp - This is not possible @see https://github.com/ethers-io/ethers.js/issues/1250
  };
  const orderItems: OrderItem[] = event.args.offer.map((offerItem) => ({
    orderId: order.id,
    tokenAddress: offerItem.token,
    tokenId: offerItem.identifier.toString(),
    amount: offerItem.amount.toString(),
  }));
  const payments: Payment[] = event.args.consideration.map(
    (considerationItem) => ({
      orderId: order.id,
      tokenAddress: considerationItem.token,
      tokenId: considerationItem.identifier.toString(),
      amount: considerationItem.amount.toString(),
    })
  );
  return { order, orderItems, payments };
};
