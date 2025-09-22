import { OpenFgaClient } from '@openfga/sdk';
import dotenv from "dotenv";
dotenv.config();

export const fgaClient = new OpenFgaClient({
  apiUrl: 'http://localhost:8080', // required
  storeId: process.env.FGA_STORE_ID, // not needed when calling `CreateStore` or `ListStores`
  authorizationModelId: process.env.FGA_MODEL_ID, // Optional, can be overridden per request
});