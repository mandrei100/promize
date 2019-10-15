const syncCallbacker = (res, rej) => {
    let argsArray = [...arguments];
    if (argsArray.length < 2){
        throw error;
    }
    if (typeof res !== 'function' || typeof rej !== 'function'){
        throw error;
    }
    return res(rej());
};


const asyncCallbacker = (res, rej) => {
    let argsArray = [...arguments];
    if (argsArray.length < 2){
        throw error;
    }
    if (typeof res !== 'function' || typeof rej !== 'function'){
        throw error;
    }
    return res = (data,done) => {
        rej (data,done);
    }
};


module.exports = { syncCallbacker, asyncCallbacker };
