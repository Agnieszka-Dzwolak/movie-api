import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import chalk from 'chalk';

const __filename = fileURLToPath(import.meta.url);
const PATH = dirname(__filename);

const createLog = (req, res, next) => {
    const { method, url } = req;
    const currentDate = new Date();

    console.log(
        currentDate,
        `--- ${chalk.blueBright(`${method}`)} ---`,
        `${chalk.cyan(`${url}`)}`
    );

    const log = `${currentDate} --- ${method} --- ${url}\n`;

    fs.appendFile(path.join(PATH, '..', 'logs', 'logs.txt'), log, (err) => {
        if (err) {
            console.error(err);
        }
    });

    next();
};

export default createLog;
