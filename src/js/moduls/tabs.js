const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);

    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }


    function showTabContent(i = 0) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const t = e.target;
        if (t &&
            (t.classList.contains(tabSelector.replace(/\./, "")) ||
                t.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (t == item || t.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

};

export default tabs;