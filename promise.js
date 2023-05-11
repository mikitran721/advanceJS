console.log(`Hello world from JS`);
// Promises example - xu ly cho callback hell js

const promiseExp =()=>{

    return new Promise((resolve, reject)=>{
        // resolve({"name":"Miki Tran","channel":"Chignugg Dev"});
        reject("something happened");
        //co the truyen bat ky tham so nao cho func-resolve - function, object,string,...
        // de thoat khoi Promise can keyword: resolve/reject
    });
}

promiseExp().then(data =>{
    console.log(data);
    // data la ket qua thanh cong ma ham Promise tra ra
}).catch(error =>{
    console.log(error);
});