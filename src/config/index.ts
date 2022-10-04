import dotenv from "dotenv";

dotenv.config();

const config = {
  contractAddress: process.env.CONTRACT_ADDRESS || "",
  fromBlock:
    process.env.FROM_BLOCK == null ? 0 : Number(process.env.FROM_BLOCK),
  db: {
    connectionUrl: process.env.POSTGRES_URL || "",
    log: process.env.QUERY_LOG != null,
  },
  alchemyApiKey: process.env.ALCHEMY_API_KEY || "",
} as const;

export default config;
