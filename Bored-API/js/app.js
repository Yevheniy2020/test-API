async function getResourses(url) {

    const text = document.querySelector('.text');

    try {
        await fetch(url)
            .then(res => res.json())
            .then(data => text.textContent = data.activity);
    } catch (error) {
        console.log(error);
    }
}

document.querySelector('.btn').addEventListener('click', () => {
    getResourses('https://www.boredapi.com/api/activity/');
});