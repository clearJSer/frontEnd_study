let fs = require('fs').promises
async function read() {
  try {
    let content = await fs.readFile('./name1.txt', 'utf8');
    let age = await fs.readFile(content, 'utf8');
    return age;
  } catch (error) {
    console.log(111, error)
  }

}

read().then(data => console.log('data', data))