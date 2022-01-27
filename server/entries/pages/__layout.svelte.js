import { n as noop, a as safe_not_equal, c as create_ssr_component, b as add_attribute, e as escape, d as null_to_empty, f as subscribe, v as validate_component } from "../../chunks/index-b48134eb.js";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "web3modal";
import "ethers";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const navMenu = writable(false);
const parseNumber = parseFloat;
function joinCss(obj, separator = ";") {
  let texts;
  if (Array.isArray(obj)) {
    texts = obj.filter((text) => text);
  } else {
    texts = [];
    for (const prop in obj) {
      if (obj[prop]) {
        texts.push(`${prop}:${obj[prop]}`);
      }
    }
  }
  return texts.join(separator);
}
function getStyles(style, size, pull, fw) {
  let float;
  let width;
  const height = "1em";
  let lineHeight;
  let fontSize;
  let textAlign;
  let verticalAlign = "-.125em";
  const overflow = "visible";
  if (fw) {
    textAlign = "center";
    width = "1.25em";
  }
  if (pull) {
    float = pull;
  }
  if (size) {
    if (size == "lg") {
      fontSize = "1.33333em";
      lineHeight = ".75em";
      verticalAlign = "-.225em";
    } else if (size == "xs") {
      fontSize = ".75em";
    } else if (size == "sm") {
      fontSize = ".875em";
    } else {
      fontSize = size.replace("x", "em");
    }
  }
  return joinCss([
    joinCss({
      float,
      width,
      height,
      "line-height": lineHeight,
      "font-size": fontSize,
      "text-align": textAlign,
      "vertical-align": verticalAlign,
      "transform-origin": "center",
      overflow
    }),
    style
  ]);
}
function getTransform(scale, translateX, translateY, rotate, flip, translateTimes = 1, translateUnit = "", rotateUnit = "") {
  let flipX = 1;
  let flipY = 1;
  if (flip) {
    if (flip == "horizontal") {
      flipX = -1;
    } else if (flip == "vertical") {
      flipY = -1;
    } else {
      flipX = flipY = -1;
    }
  }
  return joinCss([
    `translate(${parseNumber(translateX) * translateTimes}${translateUnit},${parseNumber(translateY) * translateTimes}${translateUnit})`,
    `scale(${flipX * parseNumber(scale)},${flipY * parseNumber(scale)})`,
    rotate && `rotate(${rotate}${rotateUnit})`
  ], " ");
}
var fa_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".spin.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 2s 0s infinite linear}.pulse.svelte-1cj2gr0{animation:svelte-1cj2gr0-spin 1s infinite steps(8)}@keyframes svelte-1cj2gr0-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
  map: null
};
const Fa = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: clazz = "" } = $$props;
  let { id = "" } = $$props;
  let { style = "" } = $$props;
  let { icon } = $$props;
  let { size = "" } = $$props;
  let { color = "" } = $$props;
  let { fw = false } = $$props;
  let { pull = "" } = $$props;
  let { scale = 1 } = $$props;
  let { translateX = 0 } = $$props;
  let { translateY = 0 } = $$props;
  let { rotate = "" } = $$props;
  let { flip = false } = $$props;
  let { spin = false } = $$props;
  let { pulse = false } = $$props;
  let { primaryColor = "" } = $$props;
  let { secondaryColor = "" } = $$props;
  let { primaryOpacity = 1 } = $$props;
  let { secondaryOpacity = 0.4 } = $$props;
  let { swapOpacity = false } = $$props;
  let i;
  let c;
  let s;
  let transform;
  if ($$props.class === void 0 && $$bindings.class && clazz !== void 0)
    $$bindings.class(clazz);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.fw === void 0 && $$bindings.fw && fw !== void 0)
    $$bindings.fw(fw);
  if ($$props.pull === void 0 && $$bindings.pull && pull !== void 0)
    $$bindings.pull(pull);
  if ($$props.scale === void 0 && $$bindings.scale && scale !== void 0)
    $$bindings.scale(scale);
  if ($$props.translateX === void 0 && $$bindings.translateX && translateX !== void 0)
    $$bindings.translateX(translateX);
  if ($$props.translateY === void 0 && $$bindings.translateY && translateY !== void 0)
    $$bindings.translateY(translateY);
  if ($$props.rotate === void 0 && $$bindings.rotate && rotate !== void 0)
    $$bindings.rotate(rotate);
  if ($$props.flip === void 0 && $$bindings.flip && flip !== void 0)
    $$bindings.flip(flip);
  if ($$props.spin === void 0 && $$bindings.spin && spin !== void 0)
    $$bindings.spin(spin);
  if ($$props.pulse === void 0 && $$bindings.pulse && pulse !== void 0)
    $$bindings.pulse(pulse);
  if ($$props.primaryColor === void 0 && $$bindings.primaryColor && primaryColor !== void 0)
    $$bindings.primaryColor(primaryColor);
  if ($$props.secondaryColor === void 0 && $$bindings.secondaryColor && secondaryColor !== void 0)
    $$bindings.secondaryColor(secondaryColor);
  if ($$props.primaryOpacity === void 0 && $$bindings.primaryOpacity && primaryOpacity !== void 0)
    $$bindings.primaryOpacity(primaryOpacity);
  if ($$props.secondaryOpacity === void 0 && $$bindings.secondaryOpacity && secondaryOpacity !== void 0)
    $$bindings.secondaryOpacity(secondaryOpacity);
  if ($$props.swapOpacity === void 0 && $$bindings.swapOpacity && swapOpacity !== void 0)
    $$bindings.swapOpacity(swapOpacity);
  $$result.css.add(css$4);
  i = icon && icon.icon || [0, 0, "", [], ""];
  c = joinCss([clazz, "svelte-fa", spin && "spin", pulse && "pulse"], " ");
  s = getStyles(style, size, pull, fw);
  transform = getTransform(scale, translateX, translateY, rotate, flip, 512);
  return `${i[4] ? `<svg${add_attribute("id", id, 0)} class="${escape(null_to_empty(c)) + " svelte-1cj2gr0"}"${add_attribute("style", s, 0)}${add_attribute("viewBox", `0 0 ${i[0]} ${i[1]}`, 0)} aria-hidden="${"true"}" role="${"img"}" xmlns="${"http://www.w3.org/2000/svg"}"><g${add_attribute("transform", `translate(${i[0] / 2} ${i[1] / 2})`, 0)}${add_attribute("transform-origin", `${i[0] / 4} 0`, 0)}><g${add_attribute("transform", transform, 0)}>${typeof i[4] == "string" ? `<path${add_attribute("d", i[4], 0)}${add_attribute("fill", color || primaryColor || "currentColor", 0)}${add_attribute("transform", `translate(${i[0] / -2} ${i[1] / -2})`, 0)}></path>` : `<path${add_attribute("d", i[4][0], 0)}${add_attribute("fill", secondaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? primaryOpacity : secondaryOpacity, 0)}${add_attribute("transform", `translate(${i[0] / -2} ${i[1] / -2})`, 0)}></path>
          <path${add_attribute("d", i[4][1], 0)}${add_attribute("fill", primaryColor || color || "currentColor", 0)}${add_attribute("fill-opacity", swapOpacity != false ? secondaryOpacity : primaryOpacity, 0)}${add_attribute("transform", `translate(${i[0] / -2} ${i[1] / -2})`, 0)}></path>`}</g></g></svg>` : ``}`;
});
const instance = writable();
const signer = writable();
const myAddress = writable("");
const chainId = writable(137);
const isConnect = writable(false);
const Connect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $isConnect, $$unsubscribe_isConnect;
  let $$unsubscribe_chainId;
  let $$unsubscribe_myAddress;
  let $$unsubscribe_instance;
  let $$unsubscribe_signer;
  $$unsubscribe_isConnect = subscribe(isConnect, (value) => $isConnect = value);
  $$unsubscribe_chainId = subscribe(chainId, (value) => value);
  $$unsubscribe_myAddress = subscribe(myAddress, (value) => value);
  $$unsubscribe_instance = subscribe(instance, (value) => value);
  $$unsubscribe_signer = subscribe(signer, (value) => value);
  let data;
  data = data;
  $$unsubscribe_isConnect();
  $$unsubscribe_chainId();
  $$unsubscribe_myAddress();
  $$unsubscribe_instance();
  $$unsubscribe_signer();
  return `${$isConnect === true ? `<div>${escape(data)}</div>` : `<div>Wallet Connect</div>`}`;
});
var Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "header.svelte-aw85dk{display:flex;justify-content:space-between;background-color:#848CCF;padding:20px;box-sizing:border-box;position:fixed;top:0;left:0;right:0}.logo-wrap.svelte-aw85dk{font-size:1.7rem;font-weight:bold;color:#E3DAE7}.menu-wrap.svelte-aw85dk{display:flex;width:200px;justify-content:space-between}.nav-icon.svelte-aw85dk{cursor:pointer;height:100%;font-size:1.7rem}.wallet-btn.svelte-aw85dk{background-color:#E3DAE7;color:#848CCF;padding:5px 20px 5px 20px;display:flex;justify-content:center;align-items:center;box-sizing:border-box;border-radius:5px;box-shadow:2px 4px 4px rgba(0, 0, 0, 0.25);cursor:pointer;font-weight:bold}.wallet-btn.svelte-aw85dk:active{background-color:#E3DAE7;color:#848CCF;padding:5px 20px 5px 20px;display:flex;justify-content:center;align-items:center;box-sizing:border-box;border-radius:5px;box-shadow:inset 2px 2px rgba(0, 0, 0, 0.25);cursor:pointer;font-weight:bold}.modal.svelte-aw85dk{position:absolute;top:0;left:0;width:100px;height:100px;background-color:antiquewhite}@media screen and (max-width: 768px){.menu-wrap.svelte-aw85dk{display:flex;width:auto;justify-content:space-between}.wallet-btn.svelte-aw85dk{display:none}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_navMenu;
  let $chainId, $$unsubscribe_chainId;
  $$unsubscribe_navMenu = subscribe(navMenu, (value) => value);
  $$unsubscribe_chainId = subscribe(chainId, (value) => $chainId = value);
  $$result.css.add(css$3);
  $$unsubscribe_navMenu();
  $$unsubscribe_chainId();
  return `<header class="${"svelte-aw85dk"}"><div class="${"logo-wrap svelte-aw85dk"}"><div>MPMP</div></div>
  <div class="${"menu-wrap svelte-aw85dk"}"><div class="${"wallet-btn svelte-aw85dk"}">${validate_component(Connect, "Connect").$$render($$result, {}, {}, {})}</div>
    <div class="${"nav-icon svelte-aw85dk"}">${validate_component(Fa, "Fa").$$render($$result, { icon: faBars, color: "#E3DAE7" }, {}, {})}</div></div></header>

${$chainId !== 137 ? `<div class="${"modal svelte-aw85dk"}">please chainge</div>` : ``}`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "footer.svelte-1ikeeje{background-color:#B2B6DD;height:20vh}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<footer class="${"svelte-1ikeeje"}"><div class="${"content-wrap"}">Footer</div>
</footer>`;
});
var Navigation_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "nav.svelte-mxb7dg{position:fixed;top:0;right:0;height:100%;padding:10px;width:15rem;z-index:2;background-color:#848CCF}.back.svelte-mxb7dg{position:fixed;top:0;left:0;background-color:#000000;opacity:0.4;width:100vw;height:100vh;z-index:1}.menu.svelte-mxb7dg{display:flex;justify-content:start;margin:15px;padding:15px;font-size:1.2rem;cursor:pointer;font-weight:bold;color:#E3DAE7}.close.svelte-mxb7dg{display:flex;justify-content:end}.close-btn.svelte-mxb7dg{font-size:1.7rem;display:flex;padding:10px;cursor:pointer}.wallet-btn.svelte-mxb7dg{display:none}@media screen and (max-width: 768px){.wallet-btn.svelte-mxb7dg{display:flex;background-color:#E3DAE7;color:#848CCF;padding:5px 20px 5px 20px;justify-content:center;align-items:center;box-sizing:border-box;border-radius:5px;box-shadow:2px 4px 4px rgba(0, 0, 0, 0.25);cursor:pointer;font-weight:bold}.wallet-btn.svelte-mxb7dg:active{background-color:#E3DAE7;color:#848CCF;padding:5px 20px 5px 20px;display:flex;justify-content:center;align-items:center;box-sizing:border-box;border-radius:5px;box-shadow:inset 2px 2px rgba(0, 0, 0, 0.25);cursor:pointer;font-weight:bold}.btn-wrap.svelte-mxb7dg{display:flex;justify-content:center}.close.svelte-mxb7dg{display:flex;justify-content:end}.close-btn.svelte-mxb7dg{font-size:1.7rem;display:flex;padding:10px;cursor:pointer}}",
  map: null
};
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $navMenu, $$unsubscribe_navMenu;
  $$unsubscribe_navMenu = subscribe(navMenu, (value) => $navMenu = value);
  $$result.css.add(css$1);
  $$unsubscribe_navMenu();
  return `${$navMenu ? `<nav class="${"svelte-mxb7dg"}"><div class="${"close svelte-mxb7dg"}"><div class="${"close-btn svelte-mxb7dg"}">${validate_component(Fa, "Fa").$$render($$result, { icon: faTimes, color: "#E3DAE7" }, {}, {})}</div></div>
    <div class="${"btn-wrap svelte-mxb7dg"}"><div class="${"wallet-btn svelte-mxb7dg"}">${validate_component(Connect, "Connect").$$render($$result, {}, {}, {})}</div></div>
    <div class="${"menu svelte-mxb7dg"}">Clone V3</div>
    <div class="${"menu svelte-mxb7dg"}">Clone Parts</div>
    <div class="${"menu svelte-mxb7dg"}">Swap</div></nav>
  <div class="${"back svelte-mxb7dg"}"></div>` : ``}`;
});
var globalcss = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1adshqw.svelte-1adshqw{background-color:#E3DAE7;margin:0px auto;height:80vh}main.svelte-1adshqw .wrap.svelte-1adshqw{max-width:1280px;background-color:#E3DAE7;max-width:1280px;margin:0px auto;padding:80px 20px 10px 20px}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

${validate_component(Navigation, "Nav").$$render($$result, {}, {}, {})}

<main class="${"svelte-1adshqw"}"><div class="${"wrap svelte-1adshqw"}">${slots.default ? slots.default({}) : ``}</div></main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
