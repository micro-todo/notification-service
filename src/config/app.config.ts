const appConfig = () => ({
  databaseUrl: process.env.DATABASE_URL ?? '',
  rmqUrl: process.env.RMQ_URL ?? '',
  rmqQueue: process.env.RMQ_QUEUE ?? '',
  tcpHost: process.env.TCP_HOST ?? '',
  tcpPort: process.env.TCP_PORT ?? 0,
});

export type AppConfig = typeof appConfig;

export default appConfig;
