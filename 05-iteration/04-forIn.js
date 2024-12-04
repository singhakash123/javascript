const myObject = {
  name: "Akash", 
  age: 26
};

for (const key in myObject) {
  const value = myObject[key];  // Get the value corresponding to the key
  console.log(`${key} : ${value}`);  // Log the key and its value
}

const programming = ["Ak","Si"]
for (const key of programming) {
    const value = programming[key]
    console.log(`${key} : ${value}`)
}