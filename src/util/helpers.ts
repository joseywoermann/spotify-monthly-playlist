import chalk from "chalk";

export const debugLog = (message: string) => {
    console.log(chalk.hex("#9DD1BA")(`${getUTCTime()} [DEBUG] ${message}`));
};

export const infoLog = (message: string) => {
    console.log(chalk.hex("#BAD755")(`${getUTCTime()} [INFO]  ${message}`));
};

export const warnLog = (message: string) => {
    console.log(chalk.hex("#FED762")(`${getUTCTime()} [WARN]  ${message}`));
};

export const errorLog = (message: string) => {
    console.log(chalk.hex("#FD647A")(`${getUTCTime()} [ERROR] ${message}`));
};

export const getMonth = () => {
    return new Date().toLocaleString("default", {
        month: "long",
    });
};

export const getYear = () => {
    return new Date().getFullYear();
};

export const getUTCTime = () => {
    return `[${new Date().getUTCFullYear()}-${new Date().getUTCMonth()}-${new Date().getUTCDay()}] [${new Date().getUTCHours()}-${new Date().getUTCMinutes()}-${new Date().getUTCSeconds()}]`;
};
