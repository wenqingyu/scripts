// Load fast-azure-storage client 
var azure = require('fast-azure-storage');
 
// Common options using shared key authentication 
var options = {
  accountId:          'yedian',
  accessKey:          'mKN5yVJl9SmlEVdvHdjPk/4bKMsD7Wx/mkNWAv8U3nBPfb9B0OMo+hDEYjXk0t2zWf/ChQJDZAQ+Npv0GHVOCw=='
};
 

 var blob = new azure.blob(options)


var blobContent = 'content'; // The content can be a string or a Buffer 
// Create container and upload a blob 
blob.createContainer('mycontainer').then(function() {
  return blob.putBlob('mycontainer', 'myblob', {
    type:  'BlockBlob',     // Type of the blob  
  }, blobContent);
});