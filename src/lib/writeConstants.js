var fs = require('fs');

function writeConstants(settings) {
  console.log('Writing Constants'.green);
  let textOutput = '';

  settings.constants.forEach(constant => {
    textOutput += `export const ${constant} = ${constant};\n`;
  });

  let writeStream = fs.createWriteStream(settings.output['constants_file'], { flags: 'a' });

  writeStream.write(textOutput);
  writeStream.end();

  writeStream.on('finish', () => {
    // console.log('Constants Written'.green);
  });

  writeStream.on('error', () => {
    console.log('   Something went wrong trying to write constants'.red);
  });
}

module.exports = writeConstants;
