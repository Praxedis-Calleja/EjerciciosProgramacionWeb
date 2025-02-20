

function asyncOperationWithCallback(callback) {
    setTimeout(() => {
        const success = true; 
        if (success) {
            callback(null, 'Operation completed successfully');
        } else {
            callback('Operation failed');
        }
    }, 2000); 
}


asyncOperationWithCallback((error, result) => {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});