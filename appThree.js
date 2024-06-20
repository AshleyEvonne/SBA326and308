const ctn = document.getElementById("marvel-container")

export function dataDisplay(arrayOfData){
    let newImg ="" 

for (let i = 0; i< 20; i++){
    if(arrayOfData[i].urls[1].type !== "comiclink"){
        // arrayOfData[i].urls[i].url.url

        newImg += `<div class="card m-2" style="width: 18rem;">
        <img class="card-img-top" src = "${arrayOfData[i].thumbnail.path+"/portrait_fantastic."+arrayOfData[i].thumbnail.extension}">
        <div class="card-body">
        <h5 class="card-title">${arrayOfData[i].name}</h5>
        <h6 class="card-title">${arrayOfData[i].description}<h6>

        <a href="${arrayOfData[i].urls[0].url}" class="card-text">${arrayOfData[i].urls[0].url}.</a>
        <a href="${arrayOfData[i].urls[1].url}" class="card-text">${arrayOfData[i].urls[1].url}.</a>
    
        
        </div>
        </div>`
    }
         ctn.innerHTML= newImg

}

}