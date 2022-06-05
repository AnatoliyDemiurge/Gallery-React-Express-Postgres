import { makeAutoObservable } from "mobx";

export default class ContentStore{
    constructor(){
        this._genres = []
        this._painters = []
        this._pictures = [
            {
                id:1,
                name:'Роза',
                price:10000,
                description:'Красивое такое шо ну супер ну реально хорошо здорово круто отлично.Прилично.Эксентрично.Публичнр.Круто.Наруто.Фахито.нчил пед, затем мед. Следовательно прорруто.Фахито.нчил пед, затем мед. Следовруто.Фахито.нчил пед, затем мед. Следовруто.Фахито.нчил пед, затем мед. Следов',
                img:'https://i.pinimg.com/736x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg',
                year:'2010',
                size:'20x20'
            },
            {
                id:2,
                name:'Мимоза',
                price:10000,
                description:'Красивое такое шо ну супер ну реально хорошо здорово круто отлично.Прилично.Эксентрично.Публичнр.Круто.Наруто.Фахито.нчил пед, затем мед. Следовательно прорруто.Фахито.нчил пед, затем мед. Следовруто.Фахито.нчил пед, затем мед. Следовруто.Фахито.нчил пед, затем мед. Следов',
                img:'https://i.pinimg.com/736x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg',
                year:'2010',
                size:'20x20'
            },
            {
                id:3,
                name:'Фунчоза',
                price:10000,
                description:'Красивое такое шо ну супер ну реально хорошо здорово круто отлично.Прилично.Эксентрично.Публичнр.Круто.Наруто.Фахито.нчил пед, затем мед. Следовательно прорруто.Фахито.нчил пед, затем мед. Следовруто.Фахито.нчил пед, затем мед. Следовруто.Фахито.нчил пед, затем мед. Следов',
                img:'https://i.pinimg.com/736x/70/5b/bb/705bbb820c7332b04d619f7536645753.jpg',
                year:'2010',
                size:'20x20'
            },
            {
                id:4,
                name:'Лоза',
                price:10000,
                description:'Красивое такое шо ну супер ну реально хорошо здорово круто отлично.Прилично.Эксентрично.Публичнр.Круто.Наруто.Фахито.нчил пед, затем мед. Следовательно прорруто.Фахито.нчил пед, затем мед. Следовруто.Фахито.нчил пед, затем мед. Следовруто.Фахито.нчил пед, затем мед. Следов',
                img:'data:image/jpeg;base64,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',
                year:'2010',
                size:'20x20'
            }
        ]
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
    get SelectedGenre(){
        return this._selectedGenre
    }

    get SelectedPainter(){
        return this._selectedPainter
    }
}