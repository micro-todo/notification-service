const appConfig = () => ({
  databaseUrl: process.env.DATABASE_URL ?? '',
  rmqUrl: process.env.RMQ_URL ?? '',
  rmqQueue: process.env.RMQ_QUEUE ?? '',
});

export type AppConfig = typeof appConfig;

export default appConfig;
