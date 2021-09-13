import chalk from "chalk";

export const debugLog = <T>(message: T): void => {
    console.log(chalk.hex("#9DD1BA")(`${getUTCTime()} [DEBUG] ${message}`));
};

export const infoLog = <T>(message: T): void => {
    console.log(chalk.hex("#BAD755")(`${getUTCTime()} [INFO]  ${message}`));
};

export const warnLog = <T>(message: T): void => {
    console.log(chalk.hex("#FED762")(`${getUTCTime()} [WARN]  ${message}`));
};

export const errorLog = <T>(message: T): void => {
    console.log(chalk.hex("#FD647A")(`${getUTCTime()} [ERROR] ${message}`));
};

export const getMonth = (): string => {
    return new Date().toLocaleString("default", {
        month: "long",
    });
};

export const getYear = (): number => {
    return new Date().getFullYear();
};

// What an ugly piece of code
export const getUTCTime = (): string => {
    return `[${new Date().getUTCFullYear()}-${format(
        (new Date().getUTCMonth() + 1).toString()
    )}-${format(
        new Date().getUTCDate().toString()
    )}] [${new Date().getUTCHours()}-${new Date().getUTCMinutes()}-${new Date().getUTCSeconds()}]`;
};

const format = (date: string): string => {
    let formattedDate: string;
    if (date.length === 1) {
        formattedDate = `0${date}`;
    } else {
        formattedDate = date;
    }
    return formattedDate;
};
