import * as dotenv from 'dotenv';
import * as env from 'env-var';

dotenv.config();

export const config = {
  server: {
    name: 'images-crud',
    port: env.get('APPLICATION_PORT').default(3003).asPortNumber(),
  },
  db: {
    connectionString: env.get('DB_CONNECTION_URL')
      .default('mongodb://localhost:27017')
      .asString(),
    dbName: env.get('image_DB_NAME')
      .default('images')
      .asString(),
  },
};
