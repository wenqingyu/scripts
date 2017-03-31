var AzureBlobStore = require('azure-blob-store');
 
var store = new AzureBlobStore({
  accountName: process.env.AZURE_STORAGE_ACCOUNT,
  accountKey: process.env.AZURE_STORAGE_ACCESS_KEY,
  container: process.env.AZURE_STORAGE_CONTAINER
});
 
 
// write to azure 
var fileName = '1.png'
fs.createReadStream(fileName)
.pipe(store.createWriteStream({ key: fileName}));
 
 
// // read from azure 
// store.createReadStream({ key: 'somefile.txt' })
// .pipe(fs.createWriteStream('/tmp/somefile.txt'));
 
 
// // remove 
// store.remove({ key: 'somefile.txt' }, function(err) {
//   store.exists({ key: 'somefile.txt' }, function(err, exists) {
//     // exists - if false, blob has been removed 
//   });
// });
 
 
// // exists 
// store.exists({ key: 'somefile.txt' }, function(err, exists) {
//   // true if blob exists 
// });