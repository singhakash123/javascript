console.log( 2 > 1 );
console.log( 2 >= 1);
console.log( 2 < 1 );
console.log( 2 <= 1);
console.log( 2 === 1);
console.log( 2 !== 1);
console.log( 2 == 1 );
console.log( 2 != 1);

/*
Summary of String and Number Comparisons in JavaScript:

String to Number Conversion: When comparing a string with a number, JavaScript will convert the string to a number before performing the comparison.

Strings with Leading Zeros: JavaScript treats strings like "02" as the number 2 and will ignore the leading zeros.

Invalid Strings: If the string can't be converted to a valid number, JavaScript will coerce it to NaN, and comparisons involving NaN always return false.

Loose Equality (==): JavaScript will coerce the string to a number and compare the values.

Strict Equality (===): No coercion happens, and the types must match exactly for equality.

*/

/*
undefined does not get converted to 0 during comparisons.
*/


console.log( "2" > 1);
console.log( "02" > 1);


console.log( null > 0);
console.log( null == 0);
console.log( null >= 0);


console.log( undefined > 0);
console.log( undefined == 0);
console.log( undefined >= 0);

// strict equal to (===)
// loose equality (==)
console.log( "2" == 2);
console.log( "2" === 2);


