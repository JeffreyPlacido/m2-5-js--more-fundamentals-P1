// Exercise 2-7
// ------------

// Step 1
// - The function input is an array.
// - The first element of the array is a string. The second is a number.
// - Make this function return the string repeated as many times as specified by the second element of the array.
// - If a negative number or zero is specified, return an empty string. If any invalid parameters are supplied return undefined.

// f(["foo", 3]) // "foofoofoo"
// f(["fo", 3]) // "fofofo"
// f(["foo", -1]) // ""

function repeat(arr) {  if (arr.length == 2) 

{
  return arr[1] > 0 ? arr[0].repeat(arr[1]) : ''
} 

else return undefined;

}

//teachers solution for future reference
//function f(arr) {
//const str = arr[0];
//const count = arr[1];
//if (typeof str !== 'string' || typeof count !== 'number') return undefined;
//if (count <= 0) return '';
//let res = '';
//for (let i = 0; i < count; i++) {
//res = res + str;
//}
//return res;


// We need 7 test cases.
// Don't forget to test all of the question parameters

expect(repeat(['bacon', 3]), 'baconbaconbacon');
expect(repeat(['bacon', 7]), 'baconbaconbaconbaconbaconbaconbacon');
expect(repeat(['notbacon', -6]), '');
expect(repeat(['welovebacon', 9]), 'welovebaconwelovebaconwelovebaconwelovebaconwelovebaconwelovebaconwelovebaconwelovebaconwelovebacon');
expect(repeat(['salad', 4, 'salad']), undefined);
expect(repeat(['pancetta or bacon', 3]), 'pancetta or baconpancetta or baconpancetta or bacon');
expect(repeat(['bacon4', 4]), 'bacon4bacon4bacon4bacon4');

/**
 * -------------------------------------------------------------------
 * ⚠️ No changes necessary below. ⚠️
 * -------------------------------------------------------------------
 */
function expect(result, value) {
  if (result === value) {
    console.log('✅ Test succeeded');
  } else {
    console.log(`⛔️ Expected “${result}” to equal “${value}”`);
  }
}
