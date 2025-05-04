const cartCounter = document.getElementById("cart-counter-id")
const cartPageMenuContainer = document.getElementById('menu-container');
// const specialInfoContainer = document.getElementById('special-info-container');
// const menuJumpLinks = document.querySelector('.menu-jump-links');

function backHome() {
    return window.location = "/"
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
function addToCart(menuId) {
    console.log('addToCart menuId: ', menuId);
    const userUuid = getUserUuid()
    console.log('addToCart userUuid: ', userUuid);
    
    const dataUserJson = getLocalStorage(userUuid)
    const dataUser = JSON.parse(dataUserJson)
    
    if(_.isEmpty(dataUser?.cartUser)){
        setLocalStorage(userUuid, JSON.stringify({ cartUser: [{ menuId: menuId }]}))
    }else{
        if(validateUniqMenuId(dataUser.cartUser, menuId)) return
        dataUser.cartUser.push({ menuId: menuId })
        setLocalStorage(userUuid, JSON.stringify(dataUser))
    }

    reCounterItem()
    
    console.log('dataUser: ', dataUser);
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
        const newCartUser = _.remove(dataUser.cartUser, { menuId: menuId })
        // dataUser.cartUser = dataUser.cartUser
        console.log('removeToCart newCartUser: ', newCartUser);
        setLocalStorage(userUuid, JSON.stringify({ cartUser: dataUser.cartUser }))
        viewCartRender()
    }
    } catch (error) {
        console.log('removeToCart error: ', error);
        
    }
}



function viewCartClick() {
    return window.location = "./src/page/cart/cart.html"
}
function validateUniqMenuId(cartUser, menuId) {
    try {
        if(cartUser.find(cartUser => _.isEqual(cartUser.menuId, menuId))){
            alert("เมนูนี้เลือกไปแล้ว")
            return true
        }else{
            return false
        }
        
    } catch (error) {
        console.log('validateUniqMenuId: is same menu id');
    }
}
function isHomePage() {
    return window.location.pathname === '/' || window.location.pathname === '/index.html';
  }
function viewCartRender() {
    try {
        console.log('window.location: ', window.location.pathname);
        if(isHomePage()) return
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

            const name = document.createElement('h3');
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
            addButton.innerHTML = `<i class="fas fa-xmark" onClick="removeToCart('${item.id}')" style="color: #bf1d1d"></i>`;
            
            info.appendChild(addButton);

            menuCard.appendChild(info);
            
            cartPageMenuContainer.appendChild(menuCard);
        });
       
    } catch (error) {
        console.log('viewCartRender error: ', error);
        
    }
}

viewCartRender()