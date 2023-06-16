const fs = require("fs");

/** 간단한 html을 생성 */
fs.mkdirSync("dist");
fs.writeFileSync("dist/index.html",
  `
  <html>
    <body>
      <h1>Hello, world!</h1>
      <p>I like "Hello, world!"</p>
    </body>
  </html>
  `
);