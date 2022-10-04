import event from "../../fixture/order-fulfilled-event.fixture";
import { parseOrderFulfilledEvent } from "./order.helper";

describe(parseOrderFulfilledEvent, () => {
  it("should return order, order items and payments from OrderFulfilled event", () => {
    expect(parseOrderFulfilledEvent(event)).toMatchInlineSnapshot(`
      {
        "order": {
          "buyer": "0x68d39BE8C66851Afbb61abb3B2e0a8eF59B58e80",
          "id": "0xc5058473c791384ab3a1003d9ada3c02bde789d68b34e2ed08f4972be9b6a600",
          "seller": "0xA142fDD92E28E2078D4bFaCB785B792f9EA2B9dF",
          "transactionHash": "0x71646f84fd41cb7da0ea7cd74966386d425bbd5b720e4eff24316a9daa3752e5",
        },
        "orderItems": [
          {
            "amount": "1",
            "orderId": "0xc5058473c791384ab3a1003d9ada3c02bde789d68b34e2ed08f4972be9b6a600",
            "tokenAddress": "0x321128d13C5FF3aef9bDC41d948802e1Baf580Eb",
            "tokenId": "1955",
          },
        ],
        "payments": [
          {
            "amount": "6956999999999999",
            "orderId": "0xc5058473c791384ab3a1003d9ada3c02bde789d68b34e2ed08f4972be9b6a600",
            "tokenAddress": "0x0000000000000000000000000000000000000000",
            "tokenId": "0",
          },
          {
            "amount": "193250000000000",
            "orderId": "0xc5058473c791384ab3a1003d9ada3c02bde789d68b34e2ed08f4972be9b6a600",
            "tokenAddress": "0x0000000000000000000000000000000000000000",
            "tokenId": "0",
          },
          {
            "amount": "386500000000000",
            "orderId": "0xc5058473c791384ab3a1003d9ada3c02bde789d68b34e2ed08f4972be9b6a600",
            "tokenAddress": "0x0000000000000000000000000000000000000000",
            "tokenId": "0",
          },
          {
            "amount": "193250000000000",
            "orderId": "0xc5058473c791384ab3a1003d9ada3c02bde789d68b34e2ed08f4972be9b6a600",
            "tokenAddress": "0x0000000000000000000000000000000000000000",
            "tokenId": "0",
          },
        ],
      }
    `);
  });
});
