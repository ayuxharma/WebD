// console.log("Hello World");

// means we want to use http module
const http = require('node:http');


const hostname = '127.0.0.1';
const port = 3000;

// module ko use kr k hello world serve krna start krdiya
const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World , This is Ayush Sharma\n');
res.setHeader('Content-Type', 'text/html');

  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Styling Links and Buttons</title>
      <style>
          body {
              font-style: italic;
              font-family: 'Times New Roman', Times, serif;
          }
          div.container {
              border: 3px solid rgb(248, 0, 41);
              background-color: rgb(245, 191, 200);
              padding: 50px;
              margin: 100px;
              width: 500px;
          }
          .btn {
              background-color: rgb(223, 223, 112);
              padding: 6px;
              border: none;
              cursor: pointer;
              border-radius: 4px;
          }
          a {
              text-decoration: none;
              color: black;
          }
          a:hover {
              background-color: blue;
          }
          a.visited {
              background-color: blueviolet;
          }
          a:active {
              background-color: chartreuse;
          }
      </style>
  </head>
  
  <body>
      <div id="cont1" class="container">
          <h3>Pseudo Selectors and more designing
          </h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias cupiditate ullam odio perspiciatis est ex
              facilis, eligendi veniam officiis rem magni sunt suscipit repellat in accusantium voluptas iste, vero atque.
              Itaque, provident eaque? Tempore voluptatem ipsa id porro distinctio repellendus.</p>
              <a href="https://www.cricbuzz.com/live-cricket-scores/75493/2023-odi-world-cup-icc-cricket-world-cup-2023" class="btn" target="_blank">Read More</a>
              <button class="btn">Contact Us</button>
      </div>
  </body>
  
  </html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});