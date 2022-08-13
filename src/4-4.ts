const dictionary: { [key: string]: { status: number } } = {};
dictionary['hoge'] = { status: 200 };
dictionary[0] = { status: 1000 };

console.log(dictionary['hoge'].status);
console.log(dictionary[0].status);

const keys = Object.keys(dictionary);
keys.forEach((key) => console.log(key + ' is type ' + typeof key));
