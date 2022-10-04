import { providers, Signer } from "ethers";
import config from "../../config";
import { Seaport, Seaport__factory } from "../../typechain-types";

export class SeaportClient {
  protected contract: Seaport;

  constructor(protected provider: Signer | providers.Provider) {
    this.contract = Seaport__factory.connect(config.contractAddress, provider);
  }

  getOrderFulFilledEvents() {
    const filter = this.contract.filters.OrderFulfilled();
    return this.contract.queryFilter(filter, config.fromBlock);
  }
}
