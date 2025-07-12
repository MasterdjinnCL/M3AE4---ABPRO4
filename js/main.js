document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.header__menu-toggle');
    const mobileNav = document.querySelector('.header__nav-mobile');
    
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', function() {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            
            mobileNav.classList.toggle('active');
            
            menuToggle.classList.toggle('active');
        });
        
        const mobileNavLinks = mobileNav.querySelectorAll('.header__nav-link');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });
        
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !mobileNav.contains(e.target)) {
                mobileNav.classList.remove('active');
                menuToggle.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    const demoButton = document.querySelector('.btn[onclick="startBoxModelDemo()"]');
    if (demoButton) {
        demoButton.removeAttribute('onclick');
        demoButton.addEventListener('click', startBoxModelDemo);
    }
    
    const infoButton = document.querySelector('.btn[onclick="scrollToInfo()"]');
    if (infoButton) {
        infoButton.removeAttribute('onclick');
        infoButton.addEventListener('click', scrollToInfo);
    }
});

function startBoxModelDemo() {
    const demoElement = document.querySelector('.box-model-demo');
    if (demoElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = demoElement.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            highlightBoxModelParts();
        }, 800);
    }
}

function scrollToInfo() {
    const infoSection = document.querySelector('.content__info');
    if (infoSection) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = infoSection.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        setTimeout(() => {
            highlightInfoList();
        }, 800);
    }
}

function highlightBoxModelParts() {
    const element = document.querySelector('.box-model-demo__element');
    const labels = document.querySelectorAll('.box-model-demo__label');
    
    if (!element) return;
    
    const parts = ['margin', 'border', 'padding', 'content'];
    let currentIndex = 0;
    
    function highlightNext() {
        element.className = 'box-model-demo__element';
        labels.forEach(label => label.classList.remove('active'));
        
        if (currentIndex < parts.length) {
            const currentPart = parts[currentIndex];
            element.classList.add(`highlight-${currentPart}`);
            
            const currentLabel = document.querySelector(`.box-model-demo__label--${currentPart}`);
            if (currentLabel) {
                currentLabel.classList.add('active');
            }
            
            showNotification(`Destacando: ${getPartName(currentPart)}`);
            
            currentIndex++;
            setTimeout(highlightNext, 2000);
        } else {
            setTimeout(() => {
                element.className = 'box-model-demo__element';
                labels.forEach(label => label.classList.remove('active'));
            }, 2000);
        }
    }
    
    highlightNext();
}

function highlightInfoList() {
    const infoList = document.querySelector('.content__list');
    if (infoList) {
        infoList.classList.add('highlight-info');
        
        setTimeout(() => {
            infoList.classList.remove('highlight-info');
        }, 3000);
    }
}

function getPartName(part) {
    const names = {
        'content': 'Contenido',
        'padding': 'Padding (Relleno)',
        'border': 'Border (Borde)',
        'margin': 'Margin (Margen)'
    };
    return names[part] || part;
}

function showNotification(message) {
    const existingNotification = document.querySelector('.highlight-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = 'highlight-notification';
    notification.innerHTML = `
        <i class="fas fa-info-circle"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 2000);
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '-50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.hero, .content, .contact, .box-model-demo');
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const mobileNav = document.querySelector('.header__nav-mobile');
        const menuToggle = document.querySelector('.header__menu-toggle');
        
        if (mobileNav && mobileNav.classList.contains('active')) {
            mobileNav.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
        
        const notification = document.querySelector('.highlight-notification');
        if (notification) {
            notification.classList.add('fade-out');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }
    }
    
    if (e.key === 'Enter' && e.target.classList.contains('btn')) {
        e.target.click();
    }
});

window.addEventListener('resize', function() {
    const mobileNav = document.querySelector('.header__nav-mobile');
    const menuToggle = document.querySelector('.header__menu-toggle');
    
    if (window.innerWidth > 576 && mobileNav && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});
