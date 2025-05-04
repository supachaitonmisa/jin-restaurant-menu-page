const dataFoundation = {
    restaurantName: "จินโภชนา",
    menu: [
        {
            category: "ก๋วยเตี๋ยว",
            tag_cate: "0000000001",
            items: [
                { id: "b2153721-d4ba-430b-bc1c-457d918f98d4", img: "01.png", name: "ก๋วยเตี๋ยวลูกชิ้นหมูน้ำทอง", price: 40 },
                { id: "8c25277d-a54f-41ee-9c16-9e6727cc866c", img: "02.jpg", name: "มาม่าเย็นตาโฟ", price: 45 },
                { id: "01f28c6d-0b46-45e8-bb22-ef007713b961", img: "03.jpg", name: "ก๋วยเตี๋ยวต้มยำทะเล", price: 50 },
                { id: "5807fe22-1121-4fc0-a698-bfc1cfefbb20", img: "006x.png", name: "ก๋วยเตี๋ยวคั่วทะเล", price: 70 },
                { id: "6440eb26-e36d-48db-9323-88f1f01730b4", img: "005x.png", name: "บะหมี่เกี๊ยวหมูแดงย่าง", price: 60 },
                { id: "06a586ba-8169-42ac-85ed-65f05bc8b511", img: "moodang-krob.png", name: "บะหมี่เกี๊ยวหมูแดงกรอบ", price: 70 },
                { id: "b103fd30-5faf-4d4b-91dc-7f6be71dbbee", img: "langgg.png", name: "เล้งแซ่บ", price: 70 },
            ],
        },
        {
            category: "ข้าวหมูแดง/หมูกรอบ",
            tag_cate: "0000000002",
            items: [
                // { id: "541e935e-a5b6-4cfb-afb1-c3e4a847c579", img: "placeholder.png", name: "ข้าวหมูแดงหมูกรอบ", price: 45 },
                { id: "7779472a-ce9f-41fc-b843-2eff4e53720b", img: "008x.png", name: "ข้าวหมูแดงย่าง (เตาถ่าน)", price: 50 },
                { id: "203b1673-d177-4ab7-abba-175b077708b2", img: "009x.png", name: "ข้าวหมูกรอบฮ่องกง", price: 60 },
                { id: "d5e88292-994b-4e9c-93e1-1feefaecf19b", img: "007x.png", name: "ข้าวหมูแดงหมูกรอบ", price: 70 },
                { id: "29f43ea8-9322-4930-8c4b-5650090988fe", img: "010x.png", name: "ข้าวคอหมูย่างจิ้มแจ่ว", price: 70 },
                { id: "6e1f138e-2c30-4fb8-b9a6-3c217bec718e", img: "011x.png", name: "หมูแดงย่าง (เตาถ่าน) จานละ", price: 100 },
                { id: "a8a75b11-2268-49a1-be33-e020ace180a0", img: "012x.png", name: "หมูกรอบฮ่องกง จานละ", price: 100 },
                { id: "f4aa8eb7-2f5e-4bf6-8743-7042bb2ea142", img: "013.png", name: "คอหมูย่าง จานละ", price: 100 },
            ],
        },
        {
            category: "ข้าวมันไก่/สเต็ก",
            tag_cate: "0000000003",
            items: [
                { id: "2307519c-01bf-4073-ba90-eb8a4a649fc3", img: "004x.png", name: "ข้าวมันไก่สิงคโปร์", price: 50 },
                { id: "b70dc794-04cf-4f49-96f1-8151dc7d50d3", img: "014x.png", name: "ข้าวมันไก่ทอดหาดใหญ่", price: 50 },
                { id: "981353a4-0f16-4f17-b915-4451e126cc84", img: "015x.png", name: "ข้าวมันไก่เทอริยากิ", price: 50 },
                { id: "a170af50-0428-42e7-b62f-510a0845539f", img: "placeholder.png", name: "ข้าวมันสองเซียน", price: 60 },
                { id: "d97fc866-71d0-4a57-a408-85cfe1e43d4e", img: "placeholder.png", name: "ข้าวมันสามสหาย", price: 70 },
                { id: "253321c5-71f0-4d01-b743-035efa9105bb", img: "placeholder.png", name: "ไก่ทอด (ชิ้นเล็ก)", price: 80 },
                { id: "2fbf84be-3e39-4262-b675-c7026426e108", img: "placeholder.png", name: "ไก่ทอด (ชิ้นใหญ่)", price: 100 },
                { id: "90ca1f06-e1e2-4c3d-81d4-fe53e89239f4", img: "placeholder.png", name: "สเต็กหมูชีส", price: 45 },
                { id: "b8495787-1f12-4cba-898a-d15a1559b10a", img: "placeholder.png", name: "ข้าวมันนุ่มอัญชัน", price: 15 },
            ],
        },
        {
            category: "ของทานเล่น",
            tag_cate: "0000000004",
            items: [
                { id: "263d5f5c-fbe9-4f6d-aa62-a9f99b88ed43", img: "placeholder.png", name: "ลูกชิ้นลวกจิ้ม", price: 45 },
                { id: "0a80e0bd-8c6c-4f67-9a82-ae72e36ae99c", img: "placeholder.png", name: "โจ๊กหมูต้มยำ", price: 70 },
                { id: "94bfa143-46cc-4eb9-885e-222ae29ec00a", img: "placeholder.png", name: "กุ้งแช่น้ำปลา", price: 45 },
                { id: "b675a816-3aec-4fc5-af96-5567ddd32852", img: "placeholder.png", name: "เกี๊ยวทอด", price: 50 },
                { id: "22d33862-3fd6-4ebd-aa68-c6b351c811bb", img: "placeholder.png", name: "หมูสะเต๊ะ", price: 30 },
                { id: "6f3f03a8-5ac7-4529-8322-f5bb0a10470b", img: "placeholder.png", name: "ไส้กรอกแดงปิ้ง", price: 30 },
            ],
        },
    ],
    specialInfo: [
        "แนะนำ/พิเศษ/สั่งข้าวกล่อง 098-126-5999 / 089-514-2994",
        "พิเศษ / เกาเหลา +20 บาท",
    ],
};

function getMenuData(){
    try {
        const menuData = []
        dataFoundation.menu.forEach(menuItem => {
            menuItem.items.forEach(item => menuData.push(item))
        })
        return menuData
    } catch (error) {
        console.log('getMenuData error: ', error);
    }
}