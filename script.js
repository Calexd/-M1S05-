let items = [
    { name: 'Microfone Gamer A8 Condensador', code: 'PRD001', price: '$199', image: 'assets/PRD001.jpg' },
    { name: 'Teclado Mecânico Gamer Motospeed', code: 'PRD002', price: '$218,99', image: 'assets/PRD002.jpg' },
    { name: 'Webcam Full Hd 1080p', code: 'PRD003', price: '$148,50', image: 'assets/PRD003.jpg'},
    { name: 'Monitor Gamer Curvo 27 Polegadas', code: 'PRD004', price: '$399', image: 'assets/PRD004.jpg' },
    { name: 'Mouse Gamer RGB 12000 DPI', code: 'PRD005', price: '$59,90', image: 'assets/PRD005.jpg' },
    { name: 'Phone de ouvido Bluetooth', code: 'PRD006', price: '$79,99', image: 'assets/PRD006.jpg' },
    { name: 'Camera de segurança IP Wifi', code: 'PRD007', price: '$89,99', image: 'assets/PRD007.jpg' },
    { name: 'Teclado sem fiu iluminado', code: 'PRD008', price: '$49,50', image: 'assets/PRD008.jpg' },
    { name: 'HD Externo 1TB USB 3.0', code: 'PRD009', price: '$59,99', image: 'assets/PRD009.jpg' },
    { name: 'Carregador sem fiu Qi', code: 'PRD010', price: '$29,99', image: 'assets/PRD010.jpg' }
];



function createItensSidebar() {
    let containerCards = document.querySelector('.sidebar-products')
    items.forEach(item => {
        let itemCard = document.createElement('div')
        itemCard.classList.add('item-card')
        itemCard.id = item.code
    
    let imgCard = document.createElement('img')
        imgCard.classList.add('img-sidebar-cardz')
        imgCard.src = item.image
        imgCard.alt = item.name
        itemCard.appendChild(imgCard)

    let infoItem = document.createElement('div')
    infoItem.classList.add('info-intem')
    infoItem.innerHTML = `
        <h3>${item.name}</h3>
        <p>Código: ${item.code}</p>
        <p>Preço: ${item.price}</p>
    `;
    itemCard.appendChild(infoItem)
    containerCards.appendChild(itemCard)


    })
}



document.addEventListener('DOMContentLoaded', createItensSidebar);