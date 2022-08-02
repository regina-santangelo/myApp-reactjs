const products = [
    {
        id: '1',
        name: 'Guitarra',
        price:12000,
        category: 'cuerdas',
        stock:15,
        description:'Guitarra acústica',
        img:"images/guitarra-acustica-1.jpg"
    },{
        id: '2',
        name: 'Piano',
        price:23000,
        category: 'pianos',
        stock:19,
        description:'Piano eléctrico 5 octavas',
        img:"images/piano-electrico.jpg"
    },{
        id: '3',
        name: 'Violín',
        price:9800,
        category: 'cuerdas',
        stock:25,
        description:'Violin soprano',
        img:"images/violin.jpg"
    }
]

export const getProducts = ()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}

export const getItem = ()=>{
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(products)
        },2000)
    })
}

