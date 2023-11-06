const { defineConfig } = require("cypress");
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        async deleteAllFilesInDir(dirPath) {
          try {
            const files = await fs.promises.readdir(dirPath);

            const deleteFilePromises = files.map(file =>
              fs.promises.unlink(path.join(dirPath, file))
            );

            await Promise.all(deleteFilePromises);
            return null; // Return a value to indicate success (if needed)
          } catch (err) {
            console.error(err);
            throw err; // Throw an error to indicate failure
          }
        }
      });
    }
  }
});
