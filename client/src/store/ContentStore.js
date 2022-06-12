import { makeAutoObservable } from "mobx";
let basketArray;
if (localStorage.idPicture){
    basketArray=localStorage.idPicture.split(',')
}
// console.log(basketArray);
export default class ContentStore{
    constructor(){
        this._genres = []
        this._painters = []
        this._pictures = []
        this._basketPictures = basketArray || []
        this._selectedGenre = {}
        this._selectedPainter = {}
        makeAutoObservable(this)
    }
    setBasketPictures(picture){
        this._basketPictures.push(picture)
        localStorage.setItem('idPicture',this._basketPictures)
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
                console.log(this._basketPictures);
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