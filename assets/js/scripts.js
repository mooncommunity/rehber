// const PATH_URL = "";
// const URL = window.location.port && window.location.port !== "80" && window.location.port !== "443"
//     ? `${window.location.protocol}//${window.location.hostname}:${window.location.port}${PATH_URL}`
//     : `${window.location.protocol}//${window.location.hostname}${PATH_URL}`;
const URL = "https://moonrp.com/wiki";
const currentUrl = URL + window.location.pathname;

document.addEventListener('DOMContentLoaded', function () {
    const menuItems = [
        {id: 'homehome', text: 'Anasayfa', href: `${URL}/`, icon: 'fas fa-home'},
        {type: 'category', text: 'DarkRP', icon: 'fa-solid fa-gun'},
        {id: 'darkrpnedir', text: 'DarkRP Nedir?', href: `${URL}/darkrp`, icon: 'fa-solid fa-gun'},
        {
            id: 'darkrpkurallar',
            text: 'Oyun Kuralları',
            href: 'https://moonrp.com/oyunkurallari',
            icon: 'fas fa-book',
            target: '_blank'
        },
        {
            id: 'darkrpwelcome',
            text: 'DarkRP Başlarken',
            href: `${URL}/darkrp-baslarken`,
            icon: 'fa-regular fa-hand',
            dropdown: [
                {
                    id: 'darkrpchromium',
                    text: 'Chromium Nedir? Nasıl Chromium Geçerim?',
                    href: `${URL}/darkrp-baslarken/chromium`,
                    icon: 'fa-brands fa-chrome'
                },
                {
                    id: 'darkrpiletisim',
                    text: 'Sohbet ve İletişim',
                    href: `${URL}/darkrp-baslarken#chat`,
                    icon: 'fas fa-comments'
                },
                {
                    id: 'darkrpphonee',
                    text: 'Telefon Kullanımı',
                    href: `${URL}/darkrp-baslarken#phone`,
                    icon: 'fas fa-phone'
                },
                {
                    id: 'darkrpfamily',
                    text: 'Aile Paylaşımı ile sunucuya nasıl katılırım?',
                    href: `${URL}/darkrp-baslarken/sss#ailepaylasimi`,
                    icon: 'fas fa-users'
                },
                {
                    id: 'darkrpgeforce',
                    text: 'GeForce Now ile sunucuya nasıl katılırım?',
                    href: `${URL}/darkrp-baslarken/sss#geforcenow`,
                    icon: 'fas fa-cloud'
                },
                {
                    id: 'darkrplinux',
                    text: 'Linux distrosu kullanıyorum nasıl sunucuya katılabilirim?',
                    href: `${URL}/darkrp-baslarken/linux`,
                    icon: 'fa-brands fa-linux'
                },
                {
                    id: 'darkrpsss',
                    text: 'Sıkça Sorulan Sorular',
                    href: `${URL}/darkrp-baslarken/sss`,
                    icon: 'fas fa-question'
                }
            ]
        },
        {
            id: 'darkrpjob',
            text: 'DarkRP Kariyer',
            href: `${URL}/darkrp-kariyer`,
            icon: 'fa-solid fa-user-graduate',
            dropdown: [
                {
                    id: 'darkrplegal',
                    text: 'Devlet Çalışanı',
                    href: `${URL}/darkrp-kariyer/legal`,
                    icon: 'fa-solid fa-walkie-talkie'
                },
                {
                    id: 'darkrpesnaf',
                    text: 'Esnaf ve Siviller',
                    href: `${URL}/darkrp-kariyer/esnaf`,
                    icon: 'fa-solid fa-scale-balanced'
                },
                {
                    id: 'darkrpillegal',
                    text: 'Yasadışı Organizasyonlar',
                    href: `${URL}/darkrp-kariyer/illegal`,
                    icon: 'fa-solid fa-user-tie'
                },
            ]
        },

        {
            id: 'darkrpsss1',
            text: 'Sıkça Sorulan Sorular',
            href: `${URL}/darkrp-baslarken/sss`,
            icon: 'fas fa-question'
        },

        {type: 'category', text: 'Trouble in Terrorist Town', icon: 'fa-solid fa-user-secret'},
        {id: 'tttnedir', text: 'TTT Nedir?', href: `${URL}/ttt`, icon: 'fa-solid fa-user-secret'},
        {
            id: 'tttkurallar',
            text: 'Oyun Kuralları',
            href: `https://moonrp.com/tttkurallar`,
            icon: 'fa-solid fa-book-skull',
            target: '_blank'
        },

        {
            id: 'tttwelcome',
            text: 'TTT Başlarken',
            href: `${URL}/ttt-baslarken`,
            icon: 'fa-solid fa-graduation-cap',
            dropdown: [
                {
                    id: 'tttchromium',
                    text: 'Chromium Nedir? Nasıl Chromium Geçerim?',
                    href: `${URL}/ttt-baslarken/chromium`,
                    icon: 'fa-brands fa-chrome'
                },
                {
                    id: 'tttlinux',
                    text: 'Linux distrosu kullanıyorum nasıl sunucuya katılabilirim?',
                    href: `${URL}/ttt-baslarken/linux`,
                    icon: 'fa-brands fa-linux'
                },
                {
                    id: 'tttsss',
                    text: 'Sıkça Sorulan Sorular',
                    href: `${URL}/ttt-baslarken/sss`,
                    icon: 'fas fa-question'
                }
            ]
        },
        {
            id: 'tttsss1',
            text: 'Sıkça Sorulan Sorular',
            href: `${URL}/ttt-baslarken/sss`,
            icon: 'fas fa-question'
        },
        {type: 'category', text: 'Konu Dışı', icon: 'fa-solid fa-person-circle-question'},
        {
            id: 'discordid',
            text: 'Discord ID nasıl öğrenebilirim?',
            href: `${URL}/discordid`,
            icon: 'fa-brands fa-discord'
        },
        {
            id: 'gmodcontent',
            text: 'CS:S Content Nasıl İndiririm?',
            href: `${URL}/content`,
            icon: 'fa-solid fa-cubes'
        },
        {type: 'category', text: 'Faydalı Bağlantılar', icon: 'fa-solid fa-arrow-up-right-from-square'},
        {id: 'mg', text: 'MoonGaming', href: 'https://moonrp.com', icon: 'fa-solid fa-moon', target: '_blank'},
        {
            id: 'mgdiscord',
            text: 'MoonGaming - Discord',
            href: 'https://discord.gg/moongaming',
            icon: 'fa-brands fa-discord',
            target: '_blank'
        },
        {
            id: 'mgmarket',
            text: 'MoonGaming - Market',
            href: 'https://moonrp.com/market',
            icon: 'fa-solid fa-shop',
            target: '_blank'
        },
        {
            id: 'mgshopier',
            text: 'MoonGaming - Shopier',
            href: 'https://www.shopier.com/ShowProductNew/storefront.php?shop=MoonGamingTR',
            icon: 'fa-solid fa-cart-shopping',
            target: '_blank'
        },
        {
            id: 'steamidfinder',
            text: 'Steam ID Bulucu',
            href: 'https://www.steamidfinder.com/',
            icon: 'fa-regular fa-id-card',
            target: '_blank'
        },

    ];


    const leftMenu = document.getElementById('left-menu');
    const topMenu = document.getElementById('top-menu');
    const rightMenu = document.getElementById('right-menu');

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
            if (item.target) {
                linkElement.setAttribute('target', item.target);
            }
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
                    dropdownItem.setAttribute("id", `${sub.id}-d`)
                    dropdownItem.innerHTML = `
                        <a class="nav-link" id="${sub.id}" href="${sub.href}">
                            <i class="${sub.icon}"></i> ${sub.text}
                        </a>`;
                    dropdownDiv.appendChild(dropdownItem);
                });

                const dropdownBtn = document.createElement('button');
                dropdownBtn.classList.add('dropdown-toggle-btn', 'btn');
                dropdownBtn.setAttribute('aria-expanded', 'false');
                dropdownBtn.innerHTML = `<i class="fas fa-chevron-right"></i>`;

                menuItemContainer.appendChild(dropdownBtn);
                wrapperDiv.appendChild(dropdownDiv);

                dropdownBtn.addEventListener('click', function () {
                    const isVisible = dropdownDiv.classList.toggle('show');
                    dropdownBtn.setAttribute('aria-expanded', isVisible);
                    const icon = dropdownBtn.querySelector('i');

                    if (icon) {
                        if (isVisible) {
                            icon.classList.remove('fa-chevron-right');
                            icon.classList.add('fa-chevron-down');
                        } else {
                            icon.classList.remove('fa-chevron-down');
                            icon.classList.add('fa-chevron-right');
                        }
                    }
                });


                const clonedMenuItem = menuItem.cloneNode(true);
                const mobileDropdownDiv = clonedMenuItem.querySelector('.item-container');
                mobileDropdownDiv.setAttribute('id', `${item.id}-mobile-dropdown`);
                topMenu.appendChild(clonedMenuItem);

                const mobileDropdownBtn = clonedMenuItem.querySelector('.dropdown-toggle-btn');
                mobileDropdownBtn.addEventListener('click', function () {
                    const isVisible = mobileDropdownDiv.classList.toggle('show');
                    mobileDropdownBtn.setAttribute('aria-expanded', isVisible);
                    const icon = mobileDropdownBtn.querySelector('i');

                    if (icon) {
                        if (isVisible) {
                            icon.classList.remove('fa-chevron-right');
                            icon.classList.add('fa-chevron-down');
                        } else {
                            icon.classList.remove('fa-chevron-down');
                            icon.classList.add('fa-chevron-right');
                        }
                    }
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
    const toggleOffcanvasBtn = document.getElementById('toggle-offcanvas');
    const offcanvasElement = document.getElementById('offcanvasRight');
    const offcanvasRightMenu = document.getElementById('offcanvas-right-menu');

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

            const offcanvasMenuItem = document.createElement('li');
            offcanvasMenuItem.classList.add('nav-item');
            offcanvasMenuItem.innerHTML = `<a class="nav-link" href="#${id}">${text}</a>`;
            offcanvasRightMenu.appendChild(offcanvasMenuItem);
        }
    });
    if (offcanvasRightMenu.children.length === 0) {
        toggleOffcanvasBtn.classList.add("nullcontent");
    }
    toggleOffcanvasBtn.addEventListener('click', function () {
        const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
        offcanvas.show();
    });

    function updateActiveClass() {
        const links = document.querySelectorAll('#mobileBookmarks .nav-link, #right-menu .nav-link');
        const allMenuLinks = document.querySelectorAll('#top-menu .nav-link, #left-menu .nav-link');

        links.forEach(link => link.classList.remove('active'));
        allMenuLinks.forEach(link => link.classList.remove('active'));

        links.forEach(link => {
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement && window.location.hash === `#${targetId}`) {
                link.classList.add('active');
            }
        });

        allMenuLinks.forEach(link => {
            const currentUrl1 = currentUrl.slice(0, -1);
            if ((link.getAttribute('href') === currentUrl) || (link.getAttribute('href') === currentUrl1)) {
                link.classList.add('active');
                const parentItem = link.closest('.dropdown-wrapper');
                if (parentItem) {
                    const dropdownDiv = parentItem.querySelector('.item-container');
                    if (dropdownDiv) {
                        dropdownDiv.classList.add('show');
                        const dropdownBtn = parentItem.querySelector('.dropdown-toggle-btn');
                        if (dropdownBtn) {
                            const icon = dropdownBtn.querySelector('i');
                            if (icon) {
                                icon.classList.remove('fa-chevron-right');
                                icon.classList.add('fa-chevron-down');
                            }
                        }
                    }
                }
            }
        });
    }


    window.addEventListener('hashchange', updateActiveClass);
    updateActiveClass();

    var toggler = document.getElementsByClassName("caret");
    for (var i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.querySelector("i").classList.toggle("fa-chevron-right");
            this.querySelector("i").classList.toggle("fa-chevron-down");
        });
    }
});