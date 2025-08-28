(() => {
  "use strict";

  const META = {
    className: "fw-05b-test",
    name: "FW - Sticky ATC in PDPs - 05B",
    debug: 0,
    testName: "FW - Sticky ATC in PDPs - 05",
    testVersion: "0.0.1",
  };

  const waitForElement = (selector) => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }
      const observer = new MutationObserver((mutations) => {
        if (document.querySelector(selector)) {
          resolve(document.querySelector(selector));
          observer.disconnect();
        }
      });
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    });
  };

  
  const takeMoney = (str = "") => {
    const m = String(str).match(/([^0-9.,]+)?\s*([\d.,]+)/);
    if (!m) return { cur: "", val: NaN };
    return {
      cur: (m[1] || "").trim(),
      val: parseFloat(m[2].replace(/,/g, "")),
    };
  };

 
  const makeBar = (title, imgSrc, priceHTML, deliveryHTML, shippingHTML) => {
    const wrap = document.createElement("div");
    wrap.className = "ps-sticky";
    wrap.innerHTML = `
      <div class="ps-sticky__inner page-width">
        <div class="ps-left">
          <div class="ps-thumb"><img src="${imgSrc || ""}" alt="${
      title || ""
    }"></div>
          <div class="ps-info">
            <h3 class="ps-title">${title || ""}</h3>
            <div class="ps-price">${priceHTML || ""}</div>
          </div>
        </div>
        <div class="ps-right">
          <div class="ps-delivery">${deliveryHTML || ""}</div>
          <button type="button" class="ps-atc">ADD TO CART</button>
          <div class="ps-ship">${shippingHTML || ""}</div>
        </div>
      </div>
    `;
    document.body.appendChild(wrap);
    return wrap;
  };

  
  const buildPriceRow = () => {
    const saleBox = document.querySelector(".price__sale");
    let wasTxt,
      nowTxt,
      cur = "£",
      save = "0.00";

    if (saleBox && saleBox.offsetParent !== null) {
      wasTxt =
        document
          .querySelector(".price__sale .price-item--regular")
          ?.textContent.trim() || "";
      nowTxt =
        document
          .querySelector(".price__sale .price-item--sale")
          ?.textContent.trim() || "";
      const was = takeMoney(wasTxt);
      const now = takeMoney(nowTxt);
      cur = was.cur || now.cur || "£";
      if (!isNaN(was.val) && !isNaN(now.val) && was.val > now.val) {
        save = (was.val - now.val).toFixed(2);
      }
      return `
        <span class="ps-now">${nowTxt}</span>
        <span class="ps-was">(${wasTxt})</span>
        <span class="ps-save">SAVE <span class="ps-save-val">${cur}${save}</span></span>
      `;
    }

    const regTxt =
      document
        .querySelector(".price__regular .price-item--regular")
        ?.textContent.trim() || "";
    return `
      <span class="ps-now">${regTxt}</span>
    `;
  };

  const mirrorDelivery = (container) => {
    const src = document.querySelector("#delivery-banner");
    const tgt = container.querySelector(".ps-delivery");
    if (!src || !tgt) return;
    const push = () => (tgt.innerHTML = src.innerHTML);
    push();
    const mo = new MutationObserver(push);
    mo.observe(src, { childList: true, subtree: true, attributes: true });
  };

  const watchATCVisibility = (bar) => {
    const target = document.querySelector(
      '[id*="ProductSubmitButton-template"]'
    );
    if (!target) return;

    const toggle = (visible) => {
      bar.style.display = visible ? "none" : "block";
    
      document.body.style.paddingBottom = visible
        ? "0px"
        : `${bar.offsetHeight}px`;
    
      const kl = document.querySelector('[class*="kl-teaser"]');
      if (kl) kl.style.bottom = visible ? "0px" : `${bar.offsetHeight}px`;
      const up = document.querySelector("scroll-to-top-button");
      if (up) up.style.bottom = visible ? "" : `${bar.offsetHeight + 25}px`;
    };

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => entries.forEach((e) => toggle(e.isIntersecting)),
        { threshold: 0 }
      );
      io.observe(target);
    } else {
      const onScroll = () => {
        const r = target.getBoundingClientRect();
        const inView =
          r.top >= 0 &&
          r.bottom <=
            (window.innerHeight || document.documentElement.clientHeight);
        toggle(inView);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
  };

  const refreshCTA = (bar) => {
    const btn = bar.querySelector(".ps-atc");
    if (!btn) return;
    if (window.matchMedia("(max-width: 749.98px)").matches) {
      const html = buildPriceRow();
      const div = document.createElement("div");
      div.innerHTML = html;
      const now = div.querySelector(".ps-now")?.textContent || "";
      const was = div.querySelector(".ps-was")?.textContent || "";
      const save = div.querySelector(".ps-save")?.textContent || "";
      btn.innerHTML = `<span class="ps-cta-strong">Add to cart – ${now}</span> <span class="ps-cta-light">${was}</span> <span class="ps-cta-save">${save}</span>`;
    } else {
      btn.textContent = "ADD TO CART";
    }
  };

  const hookATC = (bar) => {
    const btn = bar.querySelector(".ps-atc");
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector('[id*="ProductSubmitButton-template"]')?.click();
    });
  };

  const boot = () => {
    if (document.body.classList.contains(META.className)) return;
    document.body.classList.add(META.className);

    waitForElement('[id*="ProductInfo-template"]').then(() => {
      waitForElement(".product__title .b-main-title").then(() => {
        const title =
          document
            .querySelector(".product__title .b-main-title")
            ?.textContent.trim() || "";
        const img =
          document.querySelector(".product__media img")?.getAttribute("src") ||
          "";
        const priceRow = buildPriceRow();
        const delivery =
          document.querySelector("#delivery-banner")?.innerHTML || "";
        const shipping =
          document.querySelectorAll(".features-row .feature-item")[0]
            ?.innerHTML || "";

        const bar = makeBar(title, img, priceRow, delivery, shipping);

        mirrorDelivery(bar);
        watchATCVisibility(bar);
        refreshCTA(bar);
        hookATC(bar);

        window.addEventListener("resize", () => refreshCTA(bar));
      });
    });
  };


  const arm = () => {
    const top = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (max > 0 && (top / max) * 100 >= 10) {
      boot();
      window.removeEventListener("scroll", arm);
    }
  };
  window.addEventListener("scroll", arm, { passive: true });
})();
