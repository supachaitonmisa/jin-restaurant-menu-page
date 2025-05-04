function initUserStorage(){
    try {
        const oldUserUuid = getUserUuid()
        const userUuid = oldUserUuid ? oldUserUuid : generateUUID()
        // const userUuid = generateUUID()
        localStorage.setItem("userUuid", userUuid);
        console.log('initUserStorage finish');
        return { message: "initUserStorage finish"}
    } catch (error) {
        console.log('initUserStorage error: ', error);
    }
}
function getUserUuid(){
    try {
        const result = localStorage.getItem("userUuid");
        console.log('getUserUuid finish');
        return result
    } catch (error) {
        console.log('getUserUuid error: ', error);
    }
}
function setLocalStorage(key, data){
    try {
        localStorage.setItem(key, data);
        console.log('setLocalStorage finish');
        return { message: "setLocalStorage finish"}
    } catch (error) {
        console.log('setLocalStorage error: ', error);
    }
}
function delLocalStorage(key){
    try {
        localStorage.removeItem(key);
        console.log('delLocalStorage finish');
        return { message: "delLocalStorage finish"}
    } catch (error) {
        console.log('delLocalStorage error: ', error);
    }
}
function getLocalStorage(key){
    try {
        const result = localStorage.getItem(key);
        console.log('getLocalStorage finish');
        return result
    } catch (error) {
        console.log('getLocalStorage error: ', error);
    }
}
