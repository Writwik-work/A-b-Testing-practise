(() => {
    'use strict';
    const testInfo = {
        className: 'mn-29-test-v6',
        debug: 0,
        testName: 'MN0029 | Collection Page - Hero Reiteration',
        testVersion: '0.0.6',
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

    const subContent = `<p class="hero-subhead">Crafted and tuned in Dublin</p>`;

    const loadTest = () => {
        const bodyEle = document.body;
        if (bodyEle.classList.contains(testInfo.className)) { return }
        bodyEle.classList.add(testInfo.className);
        waitForElement('.cat-banner-content .classyunicodedone').then((heroTitle) => {
            heroTitle.innerHTML = 'Hand-Finished Irish Accordions by Musicians, for Musicians';
            heroTitle.insertAdjacentHTML('afterend', subContent);
        });
    };

    waitForElement('body').then((el) => {
        loadTest();
    });
})();