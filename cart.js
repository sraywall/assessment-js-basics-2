///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)
const summedPrice = cart.reduce((acc,curr) => acc + curr.price,0)
console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal,couponValue,tax) => cartTotal *(1+tax) - couponValue


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    "name" because a name is important information for transactions. String because names aren't really numbers in most cases
    "address" where to deliver the purchased goods. String because address might have numbers but calculations aren't made on them
    "email" in order to send a purchase receipt to the customer. String because though emails may contain numbers, they aren't needed for math operations
    "phone" a number to call/text if customers needs to be contacted or notified. String because phone numbers have dashes in them and aren't really evaluated mathematically
    "age" customer must be 18 or over to make a purchase. Number because the greater-than-equal-to operator can be used on a number
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer ={
    name : "Bill",
    address : "123 Road street",
    email : "Bill19@google.com",
    phone : "555-5555",
    age : 18
}