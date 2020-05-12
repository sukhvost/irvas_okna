const forms = () => {
    const form = document.querySelectorAll('form');
    const input = document.querySelectorAll('input');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    const postData = async(url, data) => {
        document.querySelector('.status').innerHTML = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.append(statusMessage);

            const formData = new FormData(item);

            console.log(formData);
        });
    });
};

export default forms;