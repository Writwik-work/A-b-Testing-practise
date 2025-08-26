(() => {
    'use strict';
    const testInfo = {
        className: 'mn-29-test-v2',
        debug: 0,
        testName: 'MN0029 | Collection Page - Hero Reiteration',
        testVersion: '0.0.2',
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

    const subContent = `<p class="hero-subhead">Experience the tone and quality that professionals and enthusiasts trust</p>
    <div class="hero-bullet">Unmatched Quality <span>|</span> Raving Reviews <span>|</span> Expert Curation</div>`;

    const loadTest = () => {
        const bodyEle = document.body;
        if (bodyEle.classList.contains(testInfo.className)) { return }
        bodyEle.classList.add(testInfo.className);
        waitForElement('.cat-banner-content .classyunicodedone').then((heroTitle) => {
            heroTitle.innerHTML = '”The Only Accordion You’ll Ever Need.” — Michael R. Join';
            heroTitle.insertAdjacentHTML('afterend', subContent);
        });
    };

    waitForElement('body').then((el) => {
        loadTest();
    });
})();