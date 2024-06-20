import { dataDisplay } from "./appThree.js"

const url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=e0863af4b8789c8a5a81ef3de698a6a8&hash=a1032ea859b5876817c03c30195e8554"



export async function getData(){
    const res = await fetch(url)
    const data = await res.json()
    const arrayOfData = data.data.results;
    let item = arrayOfData[0].thumbnail.path+"/portrait_fantastic."+arrayOfData[0].thumbnail.extension




    dataDisplay(arrayOfData)
   
}

