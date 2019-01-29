// READ WRITE EXECUTE
// 00000100
// 00000010
// 00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;

//console.log(myPermission);

let msg = (myPermission & readPermission) ? 'Yes' : 'No';
//console.log(msg);

var mask = executePermission << 1; // gets the 6th bit
//console.log(1 & (mask == 1));


function getBit(number, bitPosition) {
    return (number & (1 << bitPosition)) === 0 ? 0 : 1;
}

// 00001000
// 00000100
// 00000011
// 00000010
// 00000001

// Operator	Usage	Description
// Bitwise AND	a & b	Returns a one in each bit position if bits of both left and right operands are ones.
// Bitwise OR	a | b	Returns a one in each bit if bits of either left or right operand is one.
// Bitwise XOR	a ^ b	Returns a one in a bit position if bits of one but not both left and right operand are one.
// Bitwise NOT	~ a	Flips the bits of its operand.
// Left shift	a << b	Shifts a in binary representation b bits to the left, shifting in zeros from the right.
// Sign-propagating right shift	a >> b	Shifts a in binary representation b bits to the right, discarding bits shifted off.
// Zero-fill right shift	a >>> b	Shifts a in binary representation b bits to the right, discarding bits shifted off, and shifting in zeros from the left.

const edno = 1;
const dve = 2;
const tri = 3;
const chetiri = 4;
const osem = 8;

console.log(~osem);
console.log(edno | dve);
console.log(edno ^ tri);
