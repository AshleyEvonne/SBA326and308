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

        newImg += `<div class="card m-2" style="width: 18rem;">
        <img class="card-img-top" src = "${arrayOfData[i].thumbnail.path+"/portrait_fantastic."+arrayOfData[i].thumbnail.extension}">
        <div class="card-body">
        <h5 class="card-title">${arrayOfData[i].name}</h5>
        <a href="${arrayOfData[i].comics.collectionURI}" class="card-text">${arrayOfData[i].comics.collectionURI}</a>
        </div>
        </div>`
        
        // `<img src = "${arrayOfData[i].thumbnail.path+"/portrait_fantastic."+arrayOfData[i].thumbnail.extension}" />`
        // let element = arrayOfData[i];
        // console.log(element.name);
    
    }
    ctn.innerHTML= newImg
    
}
getData()





// for (let i = 0; i< arrayOfData; i++){
//     let element = arrayOfData[i];
//     console.log(arrayOfData[i]);
// }