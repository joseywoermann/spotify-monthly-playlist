export const getMonth = () => {
    return new Date().toLocaleString("default", {
        month: "long",
    });
};
export const getYear = () => {
    return new Date().getFullYear();
};
