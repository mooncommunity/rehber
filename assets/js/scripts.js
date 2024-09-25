let URL;
if (window.location.hostname === "localhost") {
    URL = "http://localhost";
} else {
    URL = window.location.href;
}

document.addEventListener('DOMContentLoaded', function () {
    const menuItems = [
        { id: 'homehome', text: 'Anasayfa', href: `${URL}/index.html`, icon: 'fas fa-home' },
        { type: 'category', text: 'DarkRP', icon: 'fa-solid fa-gun' },
        { id: 'darkrpnedir', text: 'DarkRP Nedir?', href: `${URL}/darkrp.html`, icon: 'fa-solid fa-gun' },
        { id: 'darkrpkurallar', text: 'Oyun Kuralları', href: 'https://moonrp.com/oyunkurallari', icon: 'fas fa-book' },
        {
            id: 'darkrpwelcome',
            text: 'DarkRP Başlarken',
            href: `${URL}/darkrp-baslarken.html`,
            icon: 'fa-regular fa-hand',
            dropdown: [
                { id: 'darkrpchromium', text: 'Chromium Nedir? Nasıl Chromium Geçerim?', href: `${URL}/darkrp-baslarken/chromium.html`, icon: 'fa-brands fa-chrome' },
                { id: 'darkrpiletisim', text: 'Sohbet ve İletişim', href: `${URL}/darkrp-baslarken.html#chat`, icon: 'fas fa-comments' },
                { id: 'darkrpphonee', text: 'Telefon Kullanımı', href: `${URL}/darkrp-baslarken.html#phone`, icon: 'fas fa-phone' },
                { id: 'darkrpfamily', text: 'Aile Paylaşımı ile sunucuya nasıl katılırım?', href: `${URL}/darkrp-baslarken/sss.html#ailepaylasimi`, icon: 'fas fa-users' },
                { id: 'darkrpgeforce', text: 'GeForce Now ile sunucuya nasıl katılırım?', href: `${URL}/darkrp-baslarken/sss.html#geforcenow`, icon: 'fas fa-cloud' },
                { id: 'darkrplinux', text: 'Linux distrosu kullanıyorum nasıl sunucuya katılabilirim?', href: `${URL}/darkrp-baslarken/linux.html`, icon: 'fa-brands fa-linux' },
                { id: 'darkrpsss', text: 'Sıkça Sorulan Sorular', href: `${URL}/darkrp-baslarken/sss.html`, icon: 'fas fa-question' }
            ]
        },
        {
            id: 'darkrpjob',
            text: 'DarkRP Kariyer',
            href: `${URL}/darkrp-kariyer.html`,
            icon: 'fa-solid fa-user-graduate',
            dropdown: [
                { id: 'darkrplegal', text: 'Devlet Çalışanı', href: `${URL}/darkrp-kariyer/legal.html`, icon: 'fa-solid fa-walkie-talkie' },
                { id: 'darkrpesnaf', text: 'Esnaf ve Siviller', href: `${URL}/darkrp-kariyer/esnaf.html`, icon: 'fa-solid fa-scale-balanced' },
                { id: 'darkrpillegal', text: 'Yasadışı Organizasyonlar', href: `${URL}/darkrp-kariyer/illegal.html`, icon: 'fa-solid fa-user-tie' },
            ]
        },
        { type: 'category', text: 'Konu Dışı', icon: 'fa-solid fa-person-circle-question' },
        { id: 'discordid', text: 'Discord ID nasıl öğrenebilirim?', href: `${URL}/discordid.html`, icon: 'fa-brands fa-discord' },
        { type: 'category', text: 'Faydalı Bağlantılar', icon: 'fa-solid fa-arrow-up-right-from-square' },
        { id: 'mg', text: 'MoonGaming', href: 'https://moonrp.com', icon: 'fa-solid fa-moon' },
        { id: 'mgdiscord', text: 'MoonGaming - Discord', href: 'https://discord.gg/moongaming', icon: 'fa-brands fa-discord' },
        { id: 'mgmarket', text: 'MoonGaming - Market', href: 'https://moonrp.com/market', icon: 'fa-solid fa-shop' },
        { id: 'mgshopier', text: 'MoonGaming - Shopier', href: 'https://www.shopier.com/ShowProductNew/storefront.php?shop=MoonGamingTR', icon: 'fa-solid fa-cart-shopping' },
        { id: 'steamidfinder', text: 'Steam ID Bulucu', href: 'https://www.steamidfinder.com/', icon: 'fa-regular fa-id-card' },
    ];

    const leftMenu = document.getElementById('left-menu');
    const topMenu = document.getElementById('top-menu');
    const rightMenu = document.getElementById('right-menu');
    const currentUrl = window.location.href;

    menuItems.forEach(item => {
        const mobileID = `${item.id}-mobile`;

        if (item.type === 'category') {
            const categoryItem = document.createElement('li');
            categoryItem.classList.add('category-item', 'nav-link');
            categoryItem.innerHTML = `<span><i class="${item.icon}"></i> ${item.text}</span>`;
            leftMenu.appendChild(categoryItem);
            topMenu.appendChild(categoryItem.cloneNode(true));
        } else {
            const menuItem = document.createElement('li');
            menuItem.classList.add('nav-item');

            const menuItemContainer = document.createElement('div');
            menuItemContainer.classList.add('nav-link-container', 'd-flex', 'justify-content-between', 'align-items-center');

            const linkElement = document.createElement('a');
            linkElement.classList.add('nav-link');
            linkElement.setAttribute('id', item.id);
            linkElement.setAttribute('href', item.href);
            linkElement.innerHTML = `<i class="${item.icon}"></i> ${item.text}`;
            menuItemContainer.appendChild(linkElement);

            if (item.dropdown) {
                const wrapperDiv = document.createElement('div');
                wrapperDiv.classList.add('dropdown-wrapper');

                wrapperDiv.appendChild(menuItemContainer);
                menuItem.appendChild(wrapperDiv);
                leftMenu.appendChild(menuItem);

                const dropdownDiv = document.createElement('div');
                dropdownDiv.classList.add('item-container');
                dropdownDiv.setAttribute('id', `${item.id}-dropdown`);

                item.dropdown.forEach(sub => {
                    const dropdownItem = document.createElement('div');
                    dropdownItem.classList.add('dropdown-item-container');
                    dropdownItem.innerHTML = `
                        <a class="nav-link" href="${sub.href}">
                            <i class="${sub.icon}"></i> ${sub.text}
                        </a>`;
                    dropdownDiv.appendChild(dropdownItem);
                });

                const dropdownBtn = document.createElement('button');
                dropdownBtn.classList.add('dropdown-toggle-btn', 'btn');
                dropdownBtn.setAttribute('aria-expanded', 'false');
                dropdownBtn.innerHTML = `<i class="fas fa-chevron-down"></i>`;

                menuItemContainer.appendChild(dropdownBtn);
                wrapperDiv.appendChild(dropdownDiv);

                dropdownBtn.addEventListener('click', function () {
                    const isVisible = dropdownDiv.classList.toggle('show');
                    dropdownBtn.setAttribute('aria-expanded', isVisible);
                });

                const clonedMenuItem = menuItem.cloneNode(true);
                const mobileDropdownDiv = clonedMenuItem.querySelector('.item-container');
                mobileDropdownDiv.setAttribute('id', `${item.id}-mobile-dropdown`);
                topMenu.appendChild(clonedMenuItem);

                const mobileDropdownBtn = clonedMenuItem.querySelector('.dropdown-toggle-btn');
                mobileDropdownBtn.addEventListener('click', function () {
                    const isVisible = mobileDropdownDiv.classList.toggle('show');
                    mobileDropdownBtn.setAttribute('aria-expanded', isVisible);
                });
            } else {
                menuItem.appendChild(menuItemContainer);
                leftMenu.appendChild(menuItem);

                const clonedMenuItem = menuItem.cloneNode(true);
                const clonedMenuItemContainer = clonedMenuItem.querySelector('.nav-link-container');
                clonedMenuItemContainer.classList.remove('align-items-center');
                clonedMenuItem.querySelector('a').setAttribute('id', mobileID);
                topMenu.appendChild(clonedMenuItem);
            }
        }
    });

    const contentHeaders = document.querySelectorAll('.content h1, .content h2, .content h3, .content h4, .content h5');

    contentHeaders.forEach(header => {
        const id = header.id;
        const text = header.textContent;

        if (id.length !== 0) {
            const rightMenuItem = document.createElement('li');
            rightMenuItem.classList.add('nav-item');

            let sizeClass;
            switch (header.tagName) {
                case 'H1':
                    sizeClass = 'size-1';
                    break;
                case 'H2':
                    sizeClass = 'size-2';
                    break;
                case 'H3':
                    sizeClass = 'size-3';
                    break;
                case 'H4':
                    sizeClass = 'size-4';
                    break;
                case 'H5':
                    sizeClass = 'size-5';
                    break;
                default:
                    sizeClass = '';
                    break;
            }

            rightMenuItem.innerHTML = `<a class="nav-link ${sizeClass}" href="#${id}">${text}</a>`;
            rightMenu.appendChild(rightMenuItem);
        }
    });

    function updateActiveClass() {
        const currentUrl = window.location.href.split('#')[0]; // Hash hariç URL
        const links = rightMenu.querySelectorAll('.nav-link');
        const allMenuLinks = document.querySelectorAll('#top-menu .nav-link, #left-menu .nav-link');

        links.forEach(link => link.classList.remove('active'));
        allMenuLinks.forEach(link => link.classList.remove('active'));

        allMenuLinks.forEach(link => {
            if (link.getAttribute('href') === currentUrl) {
                link.classList.add('active');

                const parentItem = link.closest('.dropdown-wrapper');
                if (parentItem) {
                    const dropdownDiv = parentItem.querySelector('.item-container');
                    if (dropdownDiv) {
                        dropdownDiv.classList.add('show');
                    }
                }
            }
        });

        links.forEach(link => {
            const targetId = link.getAttribute('href').substring(1); // '#' işaretini kaldır
            const targetElement = document.getElementById(targetId);

            if (targetElement && currentUrl + '#' + targetId === window.location.href) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('hashchange', updateActiveClass);
    updateActiveClass();
});
