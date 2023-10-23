const products = [
    {
        id: "1",
        name: "Libro 1",
        price: 1000,
        category: "Libros",
        img:"https://upload.wikimedia.org/wikipedia/commons/c/ca/Rayuela_JC.png",
        stock: 25,
        description: "ESO"
    },
    {
        id: "2",
        name: "Libro 3",
        price: 1000,
        category: "Libros",
        img:"",
        stock: 25,
        description: "ESO"
    },
    {
        id: "3",
        name: "Libro 3",
        price: 1000,
        category: "Libros",
        img:"",
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