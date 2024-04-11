const coll2Arr = (coll) => {
    return Array.prototype.slice.call(coll, 0);
}
const noConnection = () => {
    alert("Please Check Your Internet Connection. Try Installing the app.");
};

let btns = document.querySelectorAll(".cont2");
arr = coll2Arr(btns);
arr = arr.concat(coll2Arr(document.querySelectorAll(".cont1")));
arr = arr.concat(coll2Arr(document.querySelectorAll(".nav-option")));
arr = arr.concat(coll2Arr(document.querySelectorAll(".upgrade")));
arr = arr.concat(coll2Arr(document.querySelectorAll(".profile")));
arr = arr.concat(coll2Arr(document.querySelectorAll(".cards")));
arr = arr.concat(coll2Arr(document.querySelectorAll(".settingIcon")));



for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("click", noConnection);
};