// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  // getInstruction("mashedPotatoes", 0, (step1) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 1, (step2) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 2, (step3) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 3, (step4) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  // }, (error) => console.log(error));
  
  // getInstruction("mashedPotatoes", 4, (step5) => {
  //   document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
  //   document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  // }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...
// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`;
  document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  getInstruction('mashedPotatoes',1,(step1)=>{
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
    getInstruction('mashedPotatoes',2,(step2)=>{
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
      getInstruction('mashedPotatoes',3,(step3)=>{
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
        getInstruction('mashedPotatoes',4,(step4)=>{
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
          document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
        }, (error) => console.log(error))
      }, (error) => console.log(error))
    }, (error) => console.log(error))
  }, (error) => console.log(error))
}, (error) => console.log(error));


// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    document.querySelector("#steakImg").removeAttribute("hidden");
    return obtainInstruction('steak',1);
  })
  .then((step1)=>{
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak',2);
  })
  .then((step2)=>{
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak',3);
  })
  .then((step3)=>{
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak',4);
  })
  .then((step4)=>{
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak',5);
  })
  .then((step5)=>{
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak',6);
  })
  .then((step6)=>{
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak',7);
  })
  .then((step7)=>{
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
  })
  .catch( (error) => console.log(error));
         

// Iteration 3 using async/await
// async function makeBroccoli() {
//   try{
//     document.querySelector("#broccoli").innerHTML +=`<li>${await obtainInstruction("broccoli",0)}</li>`;
//     document.querySelector("#broccoli").innerHTML +=`<li>${await obtainInstruction("broccoli",1)}</li>`;
//     document.querySelector("#broccoli").innerHTML +=`<li>${await obtainInstruction("broccoli",2)}</li>`;
//     document.querySelector("#broccoli").innerHTML +=`<li>${await obtainInstruction("broccoli",3)}</li>`;
//     document.querySelector("#broccoli").innerHTML +=`<li>${await obtainInstruction("broccoli",4)}</li>`;
//     document.querySelector("#broccoli").innerHTML +=`<li>${await obtainInstruction("broccoli",5)}</li>`;
//     document.querySelector("#broccoli").innerHTML +=`<li>${await obtainInstruction("broccoli",6)}</li>`;
// }
//   catch(error){
//     console.log(error)
//   } 
//   finally{
//     document.querySelector("#broccoli").innerHTML +=`<li>Broccoli is ready!</li>`
//     document.querySelector("#broccoliImg").removeAttribute("hidden");
//   }
// };

async function makeBroccoli2() {
   try{
     for (const i of Array(broccoli.length).keys()) {
     document.querySelector("#broccoli").innerHTML +=`<li>${await obtainInstruction("broccoli",i)}</li>`;
     }}
   catch(error){
     console.log(error)
   } 
   finally{
     document.querySelector("#broccoli").innerHTML +=`<li>Broccoli is ready!</li>`
     document.querySelector("#broccoliImg").removeAttribute("hidden");
   }
 };

makeBroccoli2();

// Bonus 2 - Promise all
// Iteration 2 - using promises
function getBrussels() {
  let step1 = obtainInstruction('brusselsSprouts',0)
  let step2 = obtainInstruction('brusselsSprouts',1)
  let step3 = obtainInstruction('brusselsSprouts',2)
  let step4 = obtainInstruction('brusselsSprouts',3)
  let step5 = obtainInstruction('brusselsSprouts',4)
  let step6 = obtainInstruction('brusselsSprouts',5)
  let step7 = obtainInstruction('brusselsSprouts',6)
  let step8 = obtainInstruction('brusselsSprouts',7)

  let results = Promise.all([step1, step2, step3, step4,step5, step6, step7, step8])

  results.then((directions) => {
    document.querySelector("#brusselsSprouts").innerHTML += `
    <li>${directions[0]}</li>
    <li>${directions[1]}</li>
    <li>${directions[2]}</li>
    <li>${directions[3]}</li>
    <li>${directions[4]}</li>
    <li>${directions[5]}</li>
    <li>${directions[6]}</li>
    <li>${directions[7]}</li>
    `
  })
.catch((err) => {
  console.log(err)
})
.finally(() => {
  document.querySelector("#brusselsSprouts").innerHTML +=`<li>Brussels Sprouts ar ready!</li>`
  document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
})

}
getBrussels()