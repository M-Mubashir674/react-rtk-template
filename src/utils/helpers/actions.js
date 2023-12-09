export const transformDate = (date) => {
    return format(new Date(date).toLocaleDateString("en-US"));
};

const format = (date) => {
    const dateArray = date.split("/");
    dateArray[0] = dateArray[0].length === 1 ? `0${dateArray[0]}` : dateArray[0];
    dateArray[1] = dateArray[1].length === 1 ? `0${dateArray[1]}` : dateArray[1];
    return `${dateArray[2]}-${dateArray[0]}-${dateArray[1]}`;
};
