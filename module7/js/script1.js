const categoriesJs = document.querySelector("#categories");


const k = categoriesJs.children;
console.log(` в списку є ${k.length} категорії`);
const array = document.querySelectorAll(".item");

for (let i = 0; i < array.length; i++) {

    const calculateFn = (item) => {
        const a = item.lastElementChild;
        const b = item.firstElementChild;
        return `Категорія: ${b.textContent}, Кількість елементів: ${a.children.length}`
        
    }
    console.log(calculateFn(array[i]));
}


// console.log(`Категорія: ${b.textContent}`);
//         console.log(`Кількість елементів: ${a.children.length}`);    