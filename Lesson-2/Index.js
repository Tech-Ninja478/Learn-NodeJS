const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "Starter.txt"), (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

console.log("Hello There.....");

//Write Operation

fs.writeFile(path.join(__dirname, "Reply.txt"), "Nice to meet you", (err) => {
  if (err) throw err;
  console.log("Write Complete");

  //Update Operation inside Write
  fs.appendFile(
    path.join(__dirname, "Reply.txt"),
    "\n\nYes it is indeed",
    (err) => {
      if (err) throw err;
      console.log("Update Complete");

      //Rename the file after appending
      fs.rename(
        path.join(__dirname, "Reply.txt"),
        path.join(__dirname, "newReply.txt"),
        (err) => {
          if (err) throw err;
          console.log("Rename Complete");
        }
      );
    }
  );
});

//Update Operation

// fs.appendFile(
//   path.join(__dirname, "Test.txt"),
//   "Testing File Update",
//   (err) => {
//     if (err) throw err;
//     console.log("Update Complete");
//   }
// );

//Error on uncaught directories

process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
