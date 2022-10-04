import { providers } from "ethers";
import config from "./config";
import { getConnection } from "./lib/db";
import { OrderRepository } from "./lib/repository/order.repository";
import { SeaportClient } from "./lib/seaport/seaport.client";

const provider = new providers.AlchemyProvider(
  "homestead",
  config.alchemyApiKey
);

(async () => {
  const client = new SeaportClient(provider);
  console.log("Connected to seaport");

  const connection = await getConnection();
  console.log("Connected to database");

  const events = await client.getOrderFulFilledEvents();
  console.log(`Fetched ${events.length} order fulfilled events`);

  const repository = new OrderRepository(connection);
  try {
    await repository.storeOrderFulfilledEvents(events);
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
