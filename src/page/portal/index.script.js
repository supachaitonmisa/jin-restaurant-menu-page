const restaurantData = {
    restaurantName: "จินโภชนา",
    menu: [
        {
            category: "ก๋วยเตี๋ยว",
            tag_cate: "0000000001",
            items: [
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ก๋วยเตี๋ยวลูกชิ้นหมูน้ำทอง", price: 40 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "มาม่าเย็นตาโฟ", price: 45 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ก๋วยเตี๋ยวต้มยำทะเล", price: 50 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ก๋วยเตี๋ยวคั่วทะเล", price: 70 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "บะหมี่เกี๊ยวหมูแดงย่าง", price: 60 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "บะหมี่เกี๊ยวหมูแดงกรอบ", price: 70 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "เล้งแซ่บ", price: 70 },
            ],
        },
        {
            category: "ข้าวหมูแดง/หมูกรอบ",
            tag_cate: "0000000002",
            items: [
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ข้าวหมูแดงหมูกรอบ", price: 45 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ข้าวหมูแดงย่าง (เตาถ่าน)", price: 50 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ข้าวหมูกรอบฮ่องกง", price: 60 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ข้าวหมูแดงหมูกรอบ", price: 70 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ข้าวคอหมูย่างจิ้มแจ่ว", price: 70 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "หมูแดงย่าง (เตาถ่าน) จานละ", price: 100 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "หมูกรอบฮ่องกง จานละ", price: 100 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "คอหมูย่าง จานละ", price: 100 },
            ],
        },
        {
            category: "ข้าวมันไก่/สเต็ก",
            tag_cate: "0000000003",
            items: [
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ข้าวมันไก่สิงคโปร์", price: 50 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ข้าวมันไก่ทอดหาดใหญ่", price: 50 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ข้าวมันไก่เทอริยากิ", price: 50 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ข้าวมันสองเซียน", price: 60 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ข้าวมันสามสหาย", price: 70 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ไก่ทอด (ชิ้นเล็ก)", price: 80 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ไก่ทอด (ชิ้นใหญ่)", price: 100 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "สเต็กหมูชีส", price: 45 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ข้าวมันนุ่มอัญชัน", price: 15 },
            ],
        },
        {
            category: "ของทานเล่น",
            tag_cate: "0000000004",
            items: [
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ลูกชิ้นลวกจิ้ม", price: 45 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "โจ๊กหมูต้มยำ", price: 70 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "กุ้งแช่น้ำปลา", price: 45 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "เกี๊ยวทอด", price: 50 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "หมูสะเต๊ะ", price: 30 },
                { img: "085bc25d7f36318a702ca192b5d5160a.jpg", name: "ไส้กรอกแดงปิ้ง", price: 30 },
            ],
        },
    ],
    specialInfo: [
        "แนะนำ/พิเศษ/สั่งข้าวกล่อง 098-126-5999 / 089-514-2994",
        "พิเศษ / เกาเหลา +20 บาท",
    ],
};

const menuContainer = document.getElementById('menu-container');
const specialInfoContainer = document.getElementById('special-info-container');
const menuJumpLinks = document.querySelector('.menu-jump-links');

// สร้างลิงก์ jump menu แบบไดนามิก
restaurantData.menu.forEach(category => {
    const link = document.createElement('a');
    const categoryId = category.tag_cate; // สร้าง ID ที่ใช้งานได้
    console.log('categoryId: ', categoryId);
    link.href = `#${categoryId}`;
    link.textContent = category.category;
    menuJumpLinks.appendChild(link);

    // สร้างส่วนหัวของหมวดหมู่
    const categoryTitle = document.createElement('h2');
    categoryTitle.classList.add('menu-group-title');
    categoryTitle.id = categoryId;
    categoryTitle.textContent = category.category;
    menuContainer.appendChild(categoryTitle);

    // สร้างรายการเมนูในแต่ละหมวดหมู่
    category.items.forEach(item => {
        const menuCard = document.createElement('div');
        menuCard.classList.add('menu-card');

        const image = document.createElement('img');
        const imgPath = "../../assets/images/menu/"
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

        const addButton = document.createElement('dev');
        // addButton.classList.add('btn', 'btn-primary', 'btn-sm');
        addButton.innerHTML = '<i class="fas fa-heart" style="color: #bf1d1d"></i>';
        
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