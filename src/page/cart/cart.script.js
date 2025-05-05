const cartCounter = document.getElementById("cart-counter-id")
const cartPageMenuContainer = document.getElementById('menu-container-cart-page');
// const specialInfoContainer = document.getElementById('special-info-container');
// const menuJumpLinks = document.querySelector('.menu-jump-links');

function backHome() {
    // return window.location.href = "/"
    window.history.go(-1);
}

function reCounterItem() {
    try {
        const userUuid = getUserUuid()
        console.log('reCounterItem userUuid: ', userUuid);
        
        const dataUserJson = getLocalStorage(userUuid)
        const dataUser = JSON.parse(dataUserJson)
        if(!Number(dataUser?.cartUser?.length)) return cartCounter.innerHTML = ''
        // dataUser?.cartUser?.length
        console.log('dataUser?.cartUser?.length: ', dataUser?.cartUser?.length);
        cartCounter.innerHTML = Number(dataUser.cartUser.length);
    } catch (error) {
        console.log('reCounterItem error: ', error);
        
    }
    
}
function addToCart(menuId, e) {
    console.log('addToCart this: ',e);
    console.log('addToCart menuId: ', menuId);
    const userUuid = getUserUuid()
    console.log('addToCart userUuid: ', userUuid);
    
    const dataUserJson = getLocalStorage(userUuid)
    const dataUser = JSON.parse(dataUserJson)
    
    if(_.isEmpty(dataUser?.cartUser)){
        setLocalStorage(userUuid, JSON.stringify({ cartUser: [{ menuId: menuId, counter: 1 }]}))
        e.innerHTML = ` ${1}`
    }else{
        if(validateUniqMenuId(dataUser.cartUser, menuId)){
            const cartUserIndex = dataUser.cartUser.findIndex(cartUser => cartUser.menuId === menuId)
            dataUser.cartUser[cartUserIndex].counter += 1
            // dataUser.cartUser.push({ menuId: menuId, counter: tempData.counter+1 })
            const cardCount = document.createElement('p');
            cardCount.innerHTML = dataUser.cartUser[cartUserIndex].counter
            e.innerHTML = ` ${dataUser.cartUser[cartUserIndex].counter}`
        }else{
            dataUser.cartUser.push({ menuId: menuId, counter: 1 })
            e.innerHTML = ` ${1}`
        }
        
        setLocalStorage(userUuid, JSON.stringify(dataUser))
    }

    reCounterItem()
    
}

function removeToCart(menuId) {
    try {
        console.log('removeToCart menuId: ', menuId);
        const userUuid = getUserUuid()
        console.log('removeToCart userUuid: ', userUuid);
        
        const dataUserJson = getLocalStorage(userUuid)
        const dataUser = JSON.parse(dataUserJson)
        
        if(!_.isEmpty(dataUser?.cartUser)){
            // _.remove(dataUser.cartUser, { menuId: menuId })
            // const newCartUser = dataUser.cartUser.filter(!(cartUser.menuId == menuId))
            const cartUserIndex = dataUser.cartUser.findIndex(cartUser => cartUser.menuId === menuId)
            if(dataUser.cartUser[cartUserIndex].counter>1){
                dataUser.cartUser[cartUserIndex].counter -= 1
            }else{
                const newCartUser = _.remove(dataUser.cartUser, { menuId: menuId })
                // dataUser.cartUser = dataUser.cartUser
                console.log('removeToCart newCartUser: ', newCartUser);
            }
            setLocalStorage(userUuid, JSON.stringify({ cartUser: dataUser.cartUser }))
            viewCartRender()
        }
    } catch (error) {
        console.log('removeToCart error: ', error);
        
    }
}



function viewCartClick() {
    return window.location.href = "./src/page/cart/cart.html"
}
function validateUniqMenuId(cartUser, menuId) {
    try {
        if(cartUser.find(cartUser => _.isEqual(cartUser.menuId, menuId))){
            // alert("เมนูนี้เลือกไปแล้ว")
            return true
        }else{
            return false
        }
        
    } catch (error) {
        console.log('validateUniqMenuId: is same menu id');
    }
}
function isHomePage() {
    return window.location.pathname === '/' || window.location.pathname  === '/index.html';
}
function isCartPage() {
    return window.location.pathname.includes('/cart.html');
}
function viewCartRender() {
    try {
        console.log('window.location: ', window.location.pathname);
        if(isHomePage() || !isCartPage()) return
        const menuData = getMenuData()
        const userUuid = getUserUuid()
        const dataUserJson = getLocalStorage(userUuid)
        const dataUser = JSON.parse(dataUserJson)
        console.log('dataUser: ', dataUser);
        // if(_.isEmpty(dataUser.cartUser)) return
        cartPageMenuContainer.innerHTML = ""
        dataUser.cartUser.forEach(cartUser => {
            const item = menuData.find(menuItem => _.isEqual(menuItem.id, cartUser.menuId))

            const menuCard = document.createElement('div');
            menuCard.classList.add('menu-card');

            const image = document.createElement('img');
            const imgPath = "../../../assets/images/menu/"
            image.src = `${imgPath}${encodeURIComponent(item.img)}`; // แทนที่ด้วย URL รูปจริง
            image.alt = item.name;
            menuCard.appendChild(image);

            const info = document.createElement('div');
            info.classList.add('menu-card-info');

            const name = document.createElement('h6');
            name.classList.add('menu-card-name');
            name.textContent = item.name;
            info.appendChild(name);

            const price = document.createElement('p');
            price.classList.add('menu-card-prices');
            price.textContent = `${item.price} ฿`;
            info.appendChild(price);

            const addButton = document.createElement('p');
            // addButton.classList.add('btn', 'btn-primary', 'btn-sm');
            addButton.classList.add('text-end-add-to-card')
            addButton.innerHTML = `<span style="color: #bf1d1d; font-weight: bold;">${cartUser.counter} </span><i class="fas fa-xmark" onClick="removeToCart('${item.id}')" style="color: #bf1d1d"></i>`;
            
            info.appendChild(addButton);

            menuCard.appendChild(info);
            
            cartPageMenuContainer.appendChild(menuCard);
        });
       
    } catch (error) {
        console.log('viewCartRender error: ', error);
        
    }
}

viewCartRender()