let products=[
    {
        id: 1,
        image: './images/closeup-shot-ginger-cat-wicker-basket-isolated-white-wall_1-removebg-preview.png',
        name: 'pishik evi',
        price: 42
    },
    {
        id: 2,
        image: './images/street-fashioned-brown-white-dog-cool-black-hoodie-trucker-cap-with-mesh-back-rustic-wooden-table 1.png',
        name: 'it ucun koynek',
        price: 60
    },
    {
        id: 3,
        image: './images/pets-food-wooden-floor 1.png',
        name: 'Yemək qabları',
        price: 35
    },
    {
        id: 4,
        image: './images/image 1 (1).png',
        name: 'Müxtəlif tasmalar',
        price: 22
    }
]


let products2=[
    {
        id: 5,
        image: './images/Me-O Cat Food - Pets - Package Inspiration 1.png',
        name: 'Pişiklər üçün quru və nəm lasos',
        price: 45,
        dataX: "encoxsatilan"
    },
    {
        id: 6,
        image: './images/Natures Nuts 00029 8 Lbs Premium Safflower Seed (Pack of 4) 1.png',
        name: 'Quşlar üçün çərəz',
        price: 9.90,
        dataX: "encoxsatilan"
    },
    {
        id: 7,
        image: './images/image 5.png',
        name: 'Balıqlar üçün quru toyuq',
        price: 19,
        dataX: "yenimehsullar"
    },
    {
        id: 8,
        image: './images/Dog Friendly Kennebunk, Maine - Daily Dog Tag 1.png',
        name: 'İtlər üçün sümüklər',
        price: 33,
        dataX: "yenimehsullar"
    },
    {
        id: 9,
        image: './images/image100.png',
        name: 'Pişiklər üçün quru və nəm lasos',
        price: 45,
        dataX: "secilenmehsullar"
    },
    {
        id: 10,
        image: './images/image101.png',
        name: 'Pişiklər üçün quru və nəm lasos',
        price: 45,
        dataX: "yenimehsullar"
    },
    {
        id: 11,
        image: './images/image102.png',
        name: 'Pişiklər üçün quru və nəm lasos',
        price: 45,
        dataX: "secilenmehsullar"
    },
    {
        id: 12,
        image: './images/image 4.png',
        name: 'Pişiklər üçün quru və nəm lasos',
        price: 45,
        dataX: "secilenmehsullar"
    }
]




let basket=JSON.parse(localStorage.getItem('basket')) || []


let favArr=JSON.parse(localStorage.getItem('favorits')) || []