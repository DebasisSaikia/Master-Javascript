// [] is equal ![]
// Array is equal not array:
[] == ![]; // -> true
+[] == +![]; // -> true
// The equality operator converts both sides to numbers to compare them, and both sides become the number 0 for different reasons.
[] == ![]; // -> 0 == 0 -> true



/**
 * true is not equal ![], but not equal [] too
Array is not equal true, but not Array is not equal true too, Array is equal false, not Array is equal false too:
 */
true == []; // -> false
true == ![]; // -> false

false == []; // -> true
false == ![]; // -> true