
export function myTest() {
	return true;
}

const NOT_FOUND = 404;
const TWICE = 2;
const testConst = 2;
let testLet = 3;

if (testConst == TWICE) {
	testLet = testConst;
} else
if (testConst == testLet) {
	testLet = testConst * TWICE;
} else {
	testLet = NOT_FOUND;
}

switch (testLet) {

	case NOT_FOUND:
		myTest();
		break;

	case TWICE:
		myTest();
		break;

	default:
		break;
}

for (const key in global) {
	console.log(key);
}
