const products = [
    {
        id: "1",
        name: "Rayuela",
        price: 1000,
        category: "Libros",
        img:"https://images.cdn3.buscalibre.com/fit-in/360x360/c8/25/c8254b8aca6fc23f8da1d5dec8fc6aee.jpg",
        stock: 25,
        description: "El amor turbulento de Oliveira y La Maga, los amigos del Club de la Serpiente, las caminatas por Paría en busca del cielo y el infierno tienen su reverso en la aventura simétrica de Oliveira, Talira y Traveler en un Buenos Aires teñido por el recuerdo."
    },
    {
        id: "2",
        name: "Cien Años de Soledad",
        price: 1000,
        category: "Libros",
        img:"https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg",
        stock: 25,
        description: ""
    },
    {
        id: "3",
        name: "El Libro de la Arena",
        price: 1000,
        category: "Libros",
        img:"https://i.pinimg.com/originals/96/41/49/964149a26d0a728f02102449deeb792a.jpg",
        stock: 25,
        description: "ESO"
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId)); 
        }, 500);
    });
};
