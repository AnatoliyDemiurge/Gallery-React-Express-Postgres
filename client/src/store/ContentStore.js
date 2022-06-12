import { makeAutoObservable } from "mobx";
let basketArray;
let sumPrice;
if (localStorage.sumPrices){
    sumPrice = Number(localStorage.sumPrices)
    console.log('test1')
}
if (localStorage.idPicture){
    basketArray=localStorage.idPicture.split(',')
}
// console.log(basketArray);
export default class ContentStore{
    constructor(){
        this._genres = []
        this._painters = []
        this._pictures = []
        this._prices = sumPrice || 0
        this._basketPictures = basketArray || []
        this._selectedGenre = {}
        this._selectedPainter = {}
        makeAutoObservable(this)
    }
    setBasketPictures(picture){
        this._basketPictures.push(picture)
        localStorage.setItem('idPicture',this._basketPictures)
        
    }

    setSumPrice(){
        console.log('test2')
        let sum = 0
        this._pictures.map((picture, defaultValue)=>{
            console.log('test3')
            this._basketPictures.map((basketPicture, defaultValue) =>{
                if (picture.id == basketPicture){
                    sum += picture.price
                    console.log('test4')
                    
                }
            })
        })
        this._prices = sum;
        console.log('test5')
        localStorage.setItem("sumPrices", this._prices)
        console.log(localStorage.sumPrices)
    }

    deleteBasketPicture(picture){
        let deleteString = ''
        this._basketPictures.map((deletePicture, defaultValue) => {
            if (picture == this._basketPictures[defaultValue]){
                this._basketPictures.splice(defaultValue,1)
                deleteString = this._basketPictures.toString()
                localStorage.setItem("idPicture", deleteString)
                basketArray=localStorage.idPicture.split(',')
                this._basketPictures = basketArray
                console.log(this._basketPictures)
            }
        })
    }

    setGenres(genres) {
        this._genres = genres
    }

    setPainters(painters) {
        this._painters = painters
    }

    setPictures(pictures) {
        this._pictures = pictures
    }
    
    setSelectedGenre(genre){
        this._selectedGenre = genre
    }

    setSelectedPainter(painter){
        this._selectedPainter = painter
    }
    
    
    get genres(){
        return this._genres
    }

    get painters(){
        return this._painters
    }
    get pictures(){
        return this._pictures
    }
    get selectedGenre(){
        return this._selectedGenre
    }

    get selectedPainter(){
        return this._selectedPainter
    }

    getBasketPictures(){
        return this._basketPictures
    }
}