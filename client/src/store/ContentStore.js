import { makeAutoObservable } from "mobx";

export default class ContentStore{
    constructor(){
        this._genres = []
        this._painters = []
        this._pictures = []
        this._selectedGenre = {}
        this._selectedPainter = {}
        makeAutoObservable(this)
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
}