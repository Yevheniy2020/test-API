
async function getImgCat(url) {

    const img = document.querySelector('.image');

    try {
        await fetch(url)
            .then(res => res.json())
            .then(data => img.src = data[0].url);
    } catch (error) {
        console.log(error);
    }

}

document.querySelector('.btn').addEventListener('click', () => {

    getImgCat('https://api.thecatapi.com/v1/images/search');
});