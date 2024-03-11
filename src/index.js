import HashMap from "./hash-map";

const testMap = new HashMap();
testMap.set('snake', 'black');
testMap.set('frog', 'green');
testMap.set('owl', 'brown');
testMap.set('giraffe', 'yellow');
testMap.set('zebra', 'striped');
testMap.set('cow', 'spotted');
testMap.set('penguin', 'tuxedo');
testMap.set('dolphin', 'grey');
testMap.set('tiger', 'orange');
testMap.set('octopus', 'purple');
// testMap.get('frog');
// testMap.has('tiger');
// testMap.length();
// console.log(testMap);
// testMap.remove('zebra');
testMap.remove('owl');