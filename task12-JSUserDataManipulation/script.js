let categories = document.getElementById('select');

async function getCategories() {
    
    let categoriesUrl = 'https://api.publicapis.org/categories';

    let response = await fetch(categoriesUrl).catch(err => alert(err));
    let result = await response.json();

    for(let category of result.categories){
        let categoryOption = document.createElement('option');
        categoryOption.value = category;
        categoryOption.innerHTML = category
        categories.appendChild(categoryOption)
    }
    categories.addEventListener('click', async() => {

        let categoryUrl = `https://api.publicapis.org/entries?category=${categories.value}`;
        let titleSelect = document.getElementById('title');

        titleSelect.innerHTML = '';

        let titleResponse = await fetch(categoryUrl).catch(error => alert(error));
        let titleResult = await titleResponse.json();

        for (let title of titleResult.entries) {
            let titleOption = document.createElement('option');
            titleOption.value = title.API;
            titleOption.innerText = title.API;
            titleSelect.appendChild(titleOption);
        }
    });
}

getCategories()