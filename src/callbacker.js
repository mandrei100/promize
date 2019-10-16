const syncCallbacker = (res, rej) => {
    let argsArray = [...arguments];
    if (argsArray.length < 2){
        throw error;
    }
    if (typeof res !== 'function' || typeof rej !== 'function'){
        throw error;
    }
    const someRandomNum = Math.random() * 100;

    return rej(res(someRandomNum));

};


const asyncCallbacker = (res, rej) => {
    let argsArray = [...arguments];
    if (argsArray.length < 2){
        throw error;
    }
    if (typeof res !== 'function' || typeof rej !== 'function'){
        throw error;
    }
    const done = (data) => {
        rej(data, done);
    }
    res(data = null, done);    
};

module.exports = { syncCallbacker, asyncCallbacker };