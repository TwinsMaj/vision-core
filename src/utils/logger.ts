import { createLogger } from 'bunyan';

export const logger = createLogger({
	name: process.env.APP_NAME || 'vision-core',
});
