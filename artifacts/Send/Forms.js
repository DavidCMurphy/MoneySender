import { currency } from "../App";
const nonEmpty = (value) => value !== undefined && value.length > 0;
const validateEmail = (email) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email ? re.test(email) : false;
};
const nonEmptyNumber = (number) => number ? /^-{0,1}\d+$/.test(number) : false;
export const nameForm = () => ({
    title: "Name",
    key: "name",
    errorString: "Please enter a valid name",
    validation: nonEmpty
});
export const emailForm = () => ({
    title: "Email Address",
    key: "email",
    errorString: "Please enter a valid email address",
    validation: validateEmail
});
export const amountForm = () => ({
    title: "Amount",
    key: "amount",
    errorString: "Please enter a valid amount",
    validation: nonEmptyNumber,
    prefix: currency
});
//# sourceMappingURL=Forms.js.map