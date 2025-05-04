const restaurantData = dataFoundation
initUserStorage()
console.log('getUserUuid(): ', getUserUuid());
const menuContainer = document.getElementById('menu-container');
const specialInfoContainer = document.getElementById('special-info-container');
const menuJumpLinks = document.querySelector('.menu-jump-links');

// สร้างลิงก์ jump menu แบบไดนามิก
restaurantData.menu.forEach(category => {
    const link = document.createElement('a');
    // const categoryTitleSpan = document.createElement('span');
    // categoryTitleSpan.textContent = "•"
    const categoryId = category.tag_cate; // สร้าง ID ที่ใช้งานได้
    link.href = `#${categoryId}`;
    link.textContent = category.category;
    menuJumpLinks.appendChild(link);
    // menuJumpLinks.appendChild(categoryTitleSpan);
    // สร้างส่วนหัวของหมวดหมู่
    
    const categoryTitle = document.createElement('h2');
    categoryTitle.classList.add('menu-group-title');
    categoryTitle.id = categoryId;
    categoryTitle.textContent = category.category;
    
    menuContainer.appendChild(categoryTitle);
    // menuContainer.append(categoryTitleSpan);
    

    // สร้างรายการเมนูในแต่ละหมวดหมู่
    category.items.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');

        const image = document.createElement('img');
        const imgPath = "./assets/images/menu/"
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
        addButton.innerHTML = `<i class="fas fa-heart" onClick="addToCart('${item.id}')" style="color: #bf1d1d"></i>`;
        
        info.appendChild(addButton);

        menuCard.appendChild(info);
        menuContainer.appendChild(menuCard);
    });
});

// แสดงข้อมูลพิเศษ
restaurantData.specialInfo.forEach(infoText => {
    const infoParagraph = document.createElement('p');
    infoParagraph.textContent = infoText;
    specialInfoContainer.appendChild(infoParagraph);
});

reCounterItem()