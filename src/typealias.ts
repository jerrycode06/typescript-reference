// const logDetails = (name: string, uid: string | number) => {
//   console.log(`${name} has reg. no. ${uid}`);
// };

// const greets = (user: { name: string; uid: string | number }) => {
//   console.log(`Good Morning ${user.name}`);
// };

// As you saw above sometimes declaring types in parameters becomes complex and less readable so we make our type aliases

type stringOrNum = string | number;
type objWithName = { name: string; uid: stringOrNum };

const logDetails = (name: string, uid: stringOrNum) => {
  console.log(`${name} has reg. no. ${uid}`);
};

const greets = (user: objWithName) => {
  console.log(`Good Morning ${user.name}`);
};
