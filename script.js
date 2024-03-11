let items = [
    {
        name: 'Microfone Gamer A8 Condensador',
        code: 'PRD001',
        price: 199,
        image: 'assets/PRD001.jpg',
        description: 'Microfone condensador projetado para jogos com qualidade de áudio superior.'
    },
    {
        name: 'Teclado Mecânico Gamer Motospeed',
        code: 'PRD002',
        price: 218.99,
        image: 'assets/PRD002.jpg',
        description: 'Teclado mecânico com retroiluminação RGB e switches mecânicos de alta qualidade.'
    },
    {
        name: 'Webcam Full Hd 1080p',
        code: 'PRD003',
        price: 148.50,
        image: 'assets/PRD003.jpg',
        description: 'Webcam de alta definição com resolução Full HD 1080p para videoconferências.'
    },
    {
        name: 'Monitor Gamer Curvo 27 Polegadas',
        code: 'PRD004',
        price: 399,
        image: 'assets/PRD004.jpg',
        description: 'Monitor curvo de 27 polegadas com taxa de atualização rápida para uma experiência de jogo imersiva.'
    },
    {
        name: 'Mouse Gamer RGB 12000 DPI',
        code: 'PRD005',
        price: 59.90,
        image: 'assets/PRD005.jpg',
        description: 'Mouse ergonômico para jogos com iluminação RGB e alta precisão de rastreamento.'
    },
    {
        name: 'Fone de ouvido Bluetooth',
        code: 'PRD006',
        price: 79.99,
        image: 'assets/PRD006.jpg',
        description: 'Fone de ouvido sem fio com conectividade Bluetooth para uma experiência auditiva livre de fios.'
    },
    {
        name: 'Câmera de segurança IP Wifi',
        code: 'PRD007',
        price: 89.99,
        image: 'assets/PRD007.jpg',
        description: 'Câmera de segurança IP com conectividade Wi-Fi para monitoramento remoto.'
    },
    {
        name: 'Teclado sem fio iluminado',
        code: 'PRD008',
        price: 49.50,
        image: 'assets/PRD008.jpg',
        description: 'Teclado sem fio retroiluminado com design fino e elegante.'
    },
    {
        name: 'HD Externo 1TB USB 3.0',
        code: 'PRD009',
        price: 59.99,
        image: 'assets/PRD009.jpg',
        description: 'HD externo de 1TB com interface USB 3.0 para armazenamento de dados rápido e portátil.'
    },
    {
        name: 'Carregador sem fio Qi',
        code: 'PRD010',
        price: 29.99,
        image: 'assets/PRD010.jpg',
        description: 'Carregador sem fio Qi para dispositivos compatíveis com carregamento rápido.'
    }
]


let carrinho = []

function addCart(item) {
    let product = {
        name: item.name,
        price: item.price
    }
    carrinho.push(product)
    console.log(carrinho)
}

function consultarTotal() {
    let total = 0
    carrinho.forEach(item => {
        total += item.price
    })
    return total
}

let consultPriceButton = document.getElementById('consult-price-button')
consultPriceButton.addEventListener('click', () => {
    let textPrice = document.getElementById('valorCompraButton')
    if (consultarTotal() > 0) {
        textPrice.innerHTML = 'R$' + consultarTotal()
    } else {
        textPrice.innerHTML = 'Carrinho Vazio' 
    }
})


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('shearch-input').addEventListener('keyup', function () {
        let searchInput = document.getElementById('shearch-input').value.trim().toLowerCase()
        let reviewProductBox = document.querySelector('.sidebar-products')
        reviewProductBox.innerHTML = ''

        if (searchInput.length === 0) return

        let filteredProducts = items.filter(item => {
            return item.name.toLowerCase().includes(searchInput) || item.code.toLowerCase().includes(searchInput)
        })

        renderFilteredProducts(filteredProducts)
    })
})

function renderFilteredProducts(filteredProducts) {
    let reviewProductBox = document.querySelector('.sidebar-products')
    reviewProductBox.innerHTML = ''

    filteredProducts.forEach(item => {
        let itemCard = document.createElement('div')
        itemCard.classList.add('item-card')

        let imgCard = document.createElement('img')
        imgCard.classList.add('img-sidebar-card')
        imgCard.src = item.image
        imgCard.alt = item.name
        itemCard.appendChild(imgCard)

        let infoItem = document.createElement('div')
        infoItem.classList.add('info-item')
        infoItem.innerHTML = `
            <h3>${item.name}</h3>
            <p>Código: ${item.code}</p> `
        itemCard.appendChild(infoItem)
        reviewProductBox.appendChild(itemCard)

        let buttonSelectItem = document.createElement('button')
        buttonSelectItem.classList.add('buttons-style')
        buttonSelectItem.innerText = 'Selecionar Produto'
        infoItem.appendChild(buttonSelectItem)
        buttonSelectItem.addEventListener('click', function () {
            productView(item)
        })
    })
}

function productView(item) {
    let boxFullProduct = document.querySelector('.review-product')
    boxFullProduct.innerHTML = ''

    let itemCard = document.createElement('div')
    itemCard.classList.add('product-card-full')

    let imgCard = document.createElement('img')
    imgCard.classList.add('product-card-full-img')
    imgCard.src = item.image
    imgCard.alt = item.name
    itemCard.appendChild(imgCard)

    let infoItem = document.createElement('div')
    infoItem.classList.add('info-item')
    infoItem.innerHTML = `
            <h3>${item.name}</h3>
            <p><b>Código:</b> ${item.code}</p>
            <p><b>Descrição:</b> ${item.description}
            <p><b>Preço:</b> <span id="product-price">******</span></p>`
    itemCard.appendChild(infoItem)
    boxFullProduct.appendChild(itemCard)

    let buttonConsultar = document.createElement('button')
    buttonConsultar.classList.add('buttons-style')
    buttonConsultar.innerText = 'Consultar Valor'
    itemCard.appendChild(buttonConsultar)
    buttonConsultar.addEventListener('click', () => {
        document.getElementById('product-price').innerText = 'R$' + item.price
    })

    let buttonAddCart = document.createElement('button')
    buttonAddCart.classList.add('buttons-style')
    buttonAddCart.innerText = 'Comprar'
    itemCard.appendChild(buttonAddCart)
    buttonAddCart.addEventListener('click', () => {
        // let total = consultarTotal()
        addCart(item)
        let priceDinamic = document.querySelector('.price-dinamic')
        priceDinamic.innerHTML = 'R$' + consultarTotal()
    })
}


 // função para addicionar ao carinho..



