const url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e0863af4b8789c8a5a81ef3de698a6a8&hash=a1032ea859b5876817c03c30195e8554"
const ctn = document.getElementById("marvel-container")


async function getData(){
    const res = await fetch(url)
    const data = await res.json()
    const arrayOfData = data.data.results;
    console.log(arrayOfData)
    let item = arrayOfData[0].thumbnail.path+"/portrait_fantastic."+arrayOfData[0].thumbnail.extension

    let newImg ="" 

    for (let i = 0; i< 10; i++){

        newImg += `<img src = "${arrayOfData[i].thumbnail.path+"/portrait_fantastic."+arrayOfData[i].thumbnail.extension}" />`
        // let element = arrayOfData[i];
        // console.log(element.name);
    
    }
    ctn.innerHTML= newImg
    
}
getData()
// let marvelContainer = document.getElementById("marvel-container");

// for (let i = 0; i< arrayOfData; i++){
//     let element = arrayOfData[i];
//     console.log(arrayOfData[i]);
// }

// console.log(getData()

// let data = document.querySelector(".container");
