let selection = -1;

while (selection != 0) {
  selection = prompt("How many rows would you like to print?");
  if (selection == 0) {
    break;
  } else if (selection > 4 && selection < 10) {
    if (selection % 2 == 0) {
      let row = "";
      for (let i = 0; i < 2; i++) {
        if (i == 0) {
          for (let j = 1; j < selection; j++) {
            row += j + " ";
            if (j % 2 != 0)
              console.log("  ".repeat(Math.floor((selection - j) / 2)) + row);
          }
        } else {
          for (let j = selection - 1; j >= 1; j--) {
            if (j % 2 != 0)
              console.log("  ".repeat(Math.floor((selection - j) / 2)) + row);
            row = row.replace(j + " ", "");
          }
        }
      }
    } else {
      let row = "";
      for (let i = 0; i < 2; i++) {
        if (i == 0) {
          for (let j = 1; j <= selection; j++) {
            row += j + " ";
            if (j % 2 != 0)
              console.log("  ".repeat(Math.floor((selection - j) / 2)) + row);
          }
        } else {
          for (let j = selection; j >= 1; j--) {
            if (j % 2 != 0 && j <= selection - 2)
              console.log("  ".repeat(Math.floor((selection - j) / 2)) + row);
            row = row.replace(j + " ", "");
          }
        }
      }
    }
  }
}
