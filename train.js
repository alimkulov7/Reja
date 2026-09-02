//B-TASK

const list = [
    "A7kP92mX4qL8zT",
    "xBnK7pQ4rM6a",
    "RtY8uN2cD7wH3"
];







function countDigits(index) {

    let count = 0;

    for (const digit of "0123456789") {
        count += list[index].split(digit).length - 1;
    }

    console.log(`${list[index]} ==> ${count}`);
}



countDigits(0);
countDigits(1);
countDigits(2);


//          A-TASK

/*  const list = ["Corolla", "Civic", "Mustang", "Corvette", "Model 3", "3 Series"]; */



/* 
 function countLetter  (a,n) {
    const count = n.split(a).length-1;
    return count ;
};  */

 /* for (const index in list) {
    function countLetter  (a,index) {
        const count = list[index].toLowerCase().split(a).length-1;

        console.log(`Total number of letter "${a}" letter in (${list[index]}) is ${count} ! `);
        
    };    
} */


/* countLetter("l",0)
countLetter("i",1);
countLetter("m",2);
countLetter("t",3);
countLetter("s",5);

  */

 


//CALL-BACK FUNCIONS 21

//console.log("Jack Ma maslahatlari");

//const list = [
/*   "yaxshi talaba bo'ling", // 0–20
  "tog'ri boshliq tanlang va koproq hato qiling", // 20–30
  "uzingizga ishlandingiz boshing", // 30–40
  "siz kuchli bolgan narsalarni qiling", // 40–50
  "yoshlarga investitsiya qiling", // 50–60
  "endi dam oling, foydasi yoq endi" // 60
//]; */

/* function maslahatBering (a, callback) {
    setTimeout(function () {
        if (typeof a !== "number" ) callback("insert a number",null);
    else if (a<=20) callback(null, list[0]);
    else if (a>20 && a<=30) callback(null,list[1]);
    else if (a>30 && a<=40) callback(null,list[2]);
    else if (a>40 && a<=50) callback(null,list[3]);
    else if (a>50 && a<=60) callback(null,list[4]);
    else  {
        callback(null,list[5]);
    }
    },1000);
}
console.log('Passed here 1');
maslahatBering (22, (err, data) => {
    if (err) console.log("ERROR: ",err);
    else{
        console.log('JAVOB: ',data);
    }
});
console.log('Passed here 2'); */

//ASYNCHRONOUS FUNCTIONS 22

/* async function maslahatBering (a) {
    
        if (typeof a !== "number" ) callback("insert a number",null);
    else if (a<=20) return  list[0];
    else if (a>20 && a<=30) return  list[1];
    else if (a>30 && a<=40) return  list[2];
    else if (a>40 && a<=50) return  list[3];
    else if (a>50 && a<=60) return  list[4];
    else  {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve(list[5]);
            },3000);
        });
    }
    
}
 */
//then catch 

/* console.log('Passed here 1');

maslahatBering (22)
    .then((data) => {
    console.log('JAVOB: ', data );
    })
    .catch((err) => {
    console.log("ERROR: ",err);
    }) ;
    
console.log('Passed here 2'); */

// Calling function with ASYNC / AWAIT 

/* async function run() {
    let res = await maslahatBering(22);
    console.log(res);
    res = await maslahatBering(71);
    console.log(res);
    res = await maslahatBering(41);
    console.log(res);
}

run();
 */

//CALLBACK & SET INTERVAL
/* 
function maslahatBering (a, callback) {
    
        if (typeof a !== "number" ) callback("insert a number",null);
    else if (a<=20) callback(null, list[0]);
    else if (a>20 && a<=30) callback(null,list[1]);
    else if (a>30 && a<=40) callback(null,list[2]);
    else if (a>40 && a<=50) callback(null,list[3]);
    else if (a>50 && a<=60) callback(null,list[4]);
    else  {
        setInterval( function () {
            callback(null,list[5]);
        },1000);
    }
}
    

console.log("Passed here 1 ");
maslahatBering (74, (err, data) => {
    if (err) console.log("ERROR: ",err);
    else{
        console.log('JAVOB: ',data);
    }
});
console.log("Passed here 2"); */