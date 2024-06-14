const fs = require("fs");
const path = require("path");

// creating folder async
// fs.mkdir(path.join(__dirname, "templates"), (err) => {
//   if (err) throw new Error();

//   console.log("folder has created succesfull");
// });

// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//   if (err) throw new Error();
//   console.log("folder has created succesfull");
// });

// fs.writeFile(
//   path.join(__dirname, "notes", "dec.txt"),
//   "creating new text file",
//   (err) => {
//     if (err) throw new Error();

//     console.log("text file created succesfull");

//     fs.appendFile(
//       path.join(__dirname, "notes", "dec.txt"),
//       "in Node js 3:48",
//       (err) => {
//         if (err) throw new Error();

//         console.log("text appended succesfull");

// fs.readFile(path.join(__dirname, "notes", "dec.txt"), "utf-8", (err, data) => {
//     if (err) throw new Error();

//     //   console.log("file read succesfully:  ", Buffer.from(data).toString());
//     console.log("file read succesfully:  ", data);
// });
//       }
//     );
//   }
// );

fs.readFile(path.join(__dirname, "notes", "dec.txt"), "utf-8", (err, data) => {
  if (err) throw new Error();

  //   console.log("file read succesfully:  ", Buffer.from(data).toString());
  console.log("file read succesfully:  ", data);
});
