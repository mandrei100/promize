const syncCallbacker = () => {
    
};


const asyncCallbacker = (a,b) => {
    let data = null;
    let dun = data => {
        b((data, dun)=>{
            a((data, dun));
        })
    };
   // a((data, dun))
};


module.exports = { syncCallbacker, asyncCallbacker };
