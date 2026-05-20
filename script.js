document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Pricing Toggle Logic
    const toggleSwitch = document.querySelector('.toggle-switch');
    const pricingToggle = document.querySelector('.pricing-toggle');
    const amounts = document.querySelectorAll('.amount');
    
    // Store original monthly prices
    const monthlyPrices = Array.from(amounts).map(el => parseInt(el.textContent));
    
    toggleSwitch.addEventListener('click', () => {
        pricingToggle.classList.toggle('annual');
        
        const isAnnual = pricingToggle.classList.contains('annual');
        
        // Update spans for active class
        const spans = pricingToggle.querySelectorAll('span:not(.discount-badge)');
        spans[0].classList.toggle('active', !isAnnual);
        spans[1].classList.toggle('active', isAnnual);
        
        // Animate price change
        amounts.forEach((amountEl, index) => {
            amountEl.style.opacity = '0';
            
            setTimeout(() => {
                if (isAnnual) {
                    // 20% discount for annual, displayed as monthly cost
                    const annualMonthlyCost = Math.floor(monthlyPrices[index] * 0.8);
                    amountEl.textContent = annualMonthlyCost;
                } else {
                    amountEl.textContent = monthlyPrices[index];
                }
                amountEl.style.opacity = '1';
                amountEl.style.transition = 'opacity 0.3s ease';
            }, 300);
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#' || !targetId.startsWith('#')) return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
