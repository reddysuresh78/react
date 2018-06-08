function find(cb) {

    let data = 1
    let err = 2;

    //Query db - 2 sec
    
    cb(err, data)

}

find( ( err, data ) => {

    console.log(data);
})

