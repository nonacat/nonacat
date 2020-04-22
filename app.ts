import pino from 'pino';
import { Octokit } from '@octokit/rest';
import express from 'express';
import expressPino from 'express-pino-logger';
import bodyParser from 'body-parser';


const LOG_LEVEL: string = process.env.LOG_LEVEL || 'info';
const PORT: any = process.env.PORT || 3000;
const LOCAL: boolean = false;

const logger = pino({
    prettyPrint: true,
    level: LOG_LEVEL
});

const app = express();
if (LOCAL) {
    const expressLogger = expressPino({ logger });
    app.use(expressLogger);
}
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("ok");
});

app.listen(PORT, () => {
    logger.info('Server running on port %d', PORT);
});
