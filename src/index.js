import HashMap from "./hash-map";

const testMap = new HashMap();
testMap.set('snake', 'black');
testMap.set('frog', 'green');
testMap.set('owl', 'brown');
testMap.set('dolphin', 'grey');
testMap.set('tiger', 'orange');
// console.log(testMap);
testMap.get('frog');