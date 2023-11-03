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
        description: "Entre la boda de José Arcadio Buendía con Amelia Iguarán hasta la maldición de Aureliano Babilonia transcurre todo un siglo. Cien años de soledad para una estirpe única, fantástica, capaz de fundar una ciudad tan especial como Macondo y de engendrar niños con cola de cerdo."
    },
    {
        id: "3",
        name: "El Libro de la Arena",
        price: 1000,
        category: "Libros",
        img:"https://i.pinimg.com/originals/96/41/49/964149a26d0a728f02102449deeb792a.jpg",
        stock: 25,
        description: "Todo empieza cuando un desconocido golpea la puerta de Borges y le ofrece el misterioso libro. El libro es único, no hay otro igual. En el libro de arena nunca se repiten sus páginas, porque el contenido muta, cambia a cada instante. Tal objeto obsesiona a Borges hasta el punto de considerarlo un peligro para la humanidad y entonces debe decidir qué hacer con él."
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

export const getProductByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        }, 500)
    })
}
