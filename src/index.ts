import app from './app';
import cors from 'cors';
import morgan from 'morgan';
import { logger } from './utils/logger';

const port = parseInt(process.env.PORT || '9845', 10);

app.use(cors());
app.use(morgan('dev'));

const startServer = async () => {
	app.listen(port, () => {
		logger.info(`server running on port ${port}`);
	});
};

(async () => {
	try {
		logger.info('Initializing service');

		await startServer();
	} catch (error) {
		logger.error(error, 'error occurred while initializing service');
	}
})();
