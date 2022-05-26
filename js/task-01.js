const categoryListRef = document.querySelector('#categories');
const categoryItemRef = categoryListRef.children;

console.log(`Number of categories: ${categoryItemRef.length}`);

for(const item of categoryItemRef){
    const categoryName = ((item.querySelector('h2')).textContent);
    const elementsNumber = (((item.querySelector('ul')).children).length)
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsNumber}`)
}
