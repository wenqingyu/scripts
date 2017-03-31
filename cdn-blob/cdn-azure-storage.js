var azure = require('azure-storage');
var fileService = azure.createFileService();


console.log('Azure Blob')


fileService.createFileFromLocalFile('taskshare', 'taskdirectory', 'taskfile', './1.png', function(error, result, response) {
  console.log(error, result)
  if (!error) {
    // file uploaded
  }
});