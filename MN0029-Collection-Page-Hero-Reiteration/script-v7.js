(() => {
    'use strict';
    const testInfo = {
        className: 'mn-29-test-v7',
        debug: 0,
        testName: 'MN0029 | Collection Page - Hero Reiteration',
        testVersion: '0.0.7',
        pagePath: window.location.pathname,
        pageURL: window.location.href,
        imgBaseURL: ''
    };

    const waitForElement = (selector) => {
        return new Promise((resolve) => {
            if (document.querySelector(selector)) {
                return resolve(document.querySelector(selector));
            } else {
                window.DOMContentLoaded = () => {
                    return reject(document.querySelector(selector), "Target element not found.");
                };
            }
            const observer = new MutationObserver((mutations) => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });
            observer.observe(document.documentElement, {
                childList: true,
                subtree: true
            });
        });
    };

    const subContent = `<p class="hero-subhead">Beginner-friendly models, expert setup, and a free masterclass from Benny McCarthy included</p>
    <div class="hero-bullet">Trusted since 1979 <span>•</span> 8,000+ reviews <span>•</span> 30-day home trial</div>`;

    const loadTest = () => {
        const bodyEle = document.body;
        if (bodyEle.classList.contains(testInfo.className)) { return }
        bodyEle.classList.add(testInfo.className);
        waitForElement('.cat-banner-content .classyunicodedone').then((heroTitle) => {
            heroTitle.innerHTML = 'Start Your Irish Accordion Journey the Right Way';
            heroTitle.insertAdjacentHTML('afterend', subContent);
        });
    };

    waitForElement('body').then((el) => {
        loadTest();
    });
})();