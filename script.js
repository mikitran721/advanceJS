console.log(`Hello world from JS`);
//khai bao bien nhanh; ten phai trung voi key cua object
let state1 = {name1:'Miki',city:'HCMC',channel:'miki tran dev-en'};
// let name1=state1.name1;
// let city = state1.city;
// let channel = state1.channel;
let {name1,city,channel} = state1;

console.log(`>>> show key: `,name1,city,channel);

//toan tu ... - copy du lieu arr,object;
let arr1 = [1,3,5,7,5];
let arr2 = [0,...arr1,6];
let state = {name:'Miki',city:'HCMC'};
let state2 = {...state,pet:'big dogs'};
// console.log(`>>>check data array1: `,arr1);
// console.log(`>>>check data array2: `,arr2);
// console.log(`>>>check data state2: `,state2);

// XMLhttprequest

//bat dong bo;
const callbacked = (err,data)=>{
    if(err){
        console.log(`>>> Calling callback with error: `,err);
    }
    if(data){
        console.log(`>>>Calling callback with data: `,data);
    }
}
const getTodos=(id,callback)=>{
    return new Promise((resolve,reject)=>{
        let request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == 4 && request.status == 200) {
            // Typical action to be performed when the document is ready:
            const data1 = JSON.parse(request.responseText);
            const dataString = JSON.stringify(data1);
            //callback(undefined,data1);
            resolve(data1);
            // callbacked(undefined,data1);
            // callbacked(undefined,this,this.responseText);
            }//day dc goi la 1 callback code
            if(this.readyState ===4 && this.status !== 200){
                //callback('Something is wrong',undefined);
                reject(`Something is wrong with id: ${id}`);
            }
        };
        request.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
        //request.open("GET", "./data.json", true);
        request.send();
    });
    
    
}

// su dung async, await voi promisse
//function la 1 promise: cho toi lay ket qua ve da
// await chi sai dc khi co async o k.bao ham
// const getNewToDo = async(id)=>{
//     let respone = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//     if(respone && respone.status !== 200){
//         throw new Error(`>>> Some thing is wrong with status code: ${respone.status}`);
//         // reject case
//     }
//     let data = await respone.json();
//     // console.log(`>> Get data from fetch: `,data)
//     return data; //resolve case
// }

// su dung try - catch
const getNewToDo = async(id)=>{
    try{
        let respone = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        
        if(respone && respone.status !== 200){
            throw new Error(`>>> Some thing is wrong with status code: ${respone.status}`);
            // reject case
        }
        let data = await respone.json();
        return data; //resolve case
    }catch(e){
        console.log(`>>>Error with Promise: `,e.message);
    }
}

// getNewToDo('wslkfjkdhf').then(data =>{
//     console.log(`>>>Get data from asyn/await: `,data);
// })
// .catch(error=>{
//     console.log (`>>>Error when get data: `,error.message)
// })
// console.log(getNewToDo());

//Fetch API
// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(respone=>{
//     return respone.json();
// })
// .then(data =>{
//     console.log(`>>Get fetch data: `,data);
// })

//chain promise - noi primise voi nhau
// getTodos(1).then(data=>{
//     console.log(`>>get data with promise: `,data);
//     return getTodos('alkdjflkajf');
// }).then(data2=>{
//     console.log(`>>get data with promise2: `,data2);
//     return getTodos(3);
// }).then(data3=>{
//     console.log(`>>get data with promise3: `,data3);
// })
// .catch(error=>{
//     console.log(`>>>error with promise: `,error);
//     // chi can su dung 1 dong bat loi cho chung cac promise tra ve
// });

// getTodos(1).then(data=>{
//     console.log(`>>get data with promise: `,data);
//     getTodos(2).then(data=>{
//         console.log(`>>get data with promise2: `,data);
//         getTodos(3).then(data=>{
//             console.log(`>>get data with promise3: `,data);
//         }).catch(error=>{
//             console.log(`>>>error with promise3: `,error);
//         });
//     }).catch(error=>{
//         console.log(`>>>error with promise2: `,error);
//     });
// }).catch(error=>{
//     console.log(`>>>error with promise: `,error);
// });

// getTodos(1,(err,data)=>{
//     if(err){
//         console.log(`>>> Calling callback with error: `,err);
//     }
//     if(data){
//         console.log(`>>>Calling callback with data1: `,data);
//         getTodos(2,(err,data)=>{
//             if(err){
//                 console.log(`>>> Calling callback with error: `,err);
//             }
//             if(data){
//                 console.log(`>>>Calling callback with data2: `,data);
//                 getTodos(3,(err,data)=>{
//                     if(err){
//                         console.log(`>>> Calling callback with error: `,err);
//                     }
//                     if(data){
//                         console.log(`>>>Calling callback with data3: `,data);
//                     }
//                 })
//             }
//         });
//     }
// }); //tham so vao la function; hay con goi la callback function;
