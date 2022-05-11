// setup interface to handle user input from stdin

let connection;

const setupInput = function (conn) {
  const stdin = process.stdin;
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  //moves
  if (key === 'w') {
    connection.write("Move: up")
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  }

  //sayings
  if (key === 'h') {
    connection.write('Say: hi')
  } else if (key === 'm') {
    connection.write('Say: yall better move');
  } else if (key === 'c') {
    connection.write('Say: choo choo')
  } else if (key === "i") {
    connection.write('Say: im gonna eat you')
  }

  //exit
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = { setupInput };