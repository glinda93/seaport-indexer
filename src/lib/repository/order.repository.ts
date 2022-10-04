import chunk from "lodash.chunk";
import { PoolClient } from "pg";
import { OrderItem } from "../../entity/order-item.entity";
import { Order } from "../../entity/order.entity";
import { Payment } from "../../entity/payment.entity";
import { OrderFulfilledEvent } from "../../typechain-types/contracts/Seaport";
import { parseOrderFulfilledEvent } from "../helper/order.helper";

export class OrderRepository {
  protected chunkSize = 10;

  constructor(protected connection: PoolClient) {}

  async storeOrderFulfilledEvents(events: OrderFulfilledEvent[]) {
    const chunks = chunk(events, this.chunkSize);
    for (const chunk of chunks) {
      await Promise.all(
        chunk.map((event) => this.storeOrderFulFilledEventTransaction(event))
      );
    }
  }

  protected async storeOrderFulFilledEventTransaction(
    event: OrderFulfilledEvent
  ) {
    await this.connection.query("BEGIN");
    try {
      await this.storeOrderFulFilledEvent(event);
      await this.connection.query("COMMIT");
    } catch (error) {
      console.error("Error storing event");
      console.error((error as Error).message, (error as Error).stack);
      await this.connection.query("ROLLBACK");
    }
  }

  protected async storeOrderFulFilledEvent(event: OrderFulfilledEvent) {
    const { order, orderItems, payments } = parseOrderFulfilledEvent(event);
    await this.storeOrder(order);
    await Promise.all(
      orderItems.map((orderItem) => this.storeOrderItem(orderItem))
    );
    await Promise.all(payments.map((payment) => this.storePayment(payment)));
  }

  protected storeOrder(order: Order) {
    return this.connection.query(
      `
        INSERT INTO "order"("id", "seller", "buyer", "transaction_hash")
          VALUES ($1, $2, $3, $4)
      `,
      [order.id, order.seller, order.buyer, order.transactionHash]
    );
  }

  protected storeOrderItem(orderItem: OrderItem) {
    return this.connection.query(
      `
        INSERT INTO "order_item"("order_id", "token_address", "token_id", "amount")
          VALUES ($1, $2, $3, $4)
      `,
      [
        orderItem.orderId,
        orderItem.tokenAddress,
        orderItem.tokenId,
        orderItem.amount,
      ]
    );
  }

  protected storePayment(payment: Payment) {
    return this.connection.query(
      `
        INSERT INTO "payment"("order_id", "token_address", "token_id", "amount")
          VALUES ($1, $2, $3, $4)
      `,
      [payment.orderId, payment.tokenAddress, payment.tokenId, payment.amount]
    );
  }
}
