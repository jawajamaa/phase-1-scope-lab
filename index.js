var customerName = "bob";
const leastFavoriteCustomer = "tim";
console.log(leastFavoriteCustomer);

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
} 

function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "bob";
    console.log(leastFavoriteCustomer);
}
