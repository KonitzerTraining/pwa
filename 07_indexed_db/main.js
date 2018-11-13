var request = window.indexedDB.open("my-database", 1);

request.onerror = function(event) {
    console.log("Database error: ", event.target.error);
};

request.onsuccess = function(event) {
    var db = event.target.result;
    console.log("Database: ", db);
    console.log("Object store names: ", db.objectStoreNames);
};