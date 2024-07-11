import { g as getContext, c as create_ssr_component, a as subscribe, b as add_attribute, v as validate_component } from "../../chunks/index-38cedc01.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var logo = "/_app/assets/logo-ed7b051a.svg";
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "header.svelte-mdoqhn.svelte-mdoqhn{display:flex;justify-content:space-between;width:100%}nav.svelte-mdoqhn.svelte-mdoqhn,.corner.svelte-mdoqhn.svelte-mdoqhn{position:fixed;bottom:0;z-index:1000}nav.svelte-mdoqhn.svelte-mdoqhn{width:100%}.corner.svelte-mdoqhn.svelte-mdoqhn{height:3em}.corner.svelte-mdoqhn img.svelte-mdoqhn{margin:0 10px}.corner.svelte-mdoqhn a.svelte-mdoqhn{display:flex;align-items:center;justify-content:center;width:100%;height:100%;color:#edf0f8;font-size:medium;text-shadow:1px 1px 6px rgba(0, 0, 0, 0.7)}.corner.svelte-mdoqhn img.svelte-mdoqhn{width:2em;height:2em;object-fit:contain}nav.svelte-mdoqhn.svelte-mdoqhn{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-mdoqhn.svelte-mdoqhn{width:2em;height:3em;display:block;transform:rotate(180deg)}path.svelte-mdoqhn.svelte-mdoqhn{fill:var(--background)}ul.svelte-mdoqhn.svelte-mdoqhn{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-mdoqhn.svelte-mdoqhn{position:relative;height:100%}li.active.svelte-mdoqhn.svelte-mdoqhn::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-mdoqhn a.svelte-mdoqhn{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-mdoqhn.svelte-mdoqhn:hover{color:var(--accent-color)}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<header class="${"svelte-mdoqhn"}"><div class="${"corner svelte-mdoqhn"}"><a href="${"https://linkedin.com/in/qcmarcel"}" class="${"svelte-mdoqhn"}"><img${add_attribute("src", logo, 0)} alt="${"SvelteKit"}" class="${"svelte-mdoqhn"}">
			<span>Desarrollador de coraz\xF3n</span></a></div>

	<nav class="${"svelte-mdoqhn"}"><svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-mdoqhn"}"><path d="${"M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"}" class="${"svelte-mdoqhn"}"></path></svg>
		<ul class="${"svelte-mdoqhn"}"><li class="${["svelte-mdoqhn", $page.url.pathname === "/" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-mdoqhn"}">About me</a></li>
			<li class="${["svelte-mdoqhn", $page.url.pathname === "/projects" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/projects"}" class="${"svelte-mdoqhn"}">My Projects</a></li>
			<li class="${["svelte-mdoqhn", $page.url.pathname === "/contact" ? "active" : ""].join(" ").trim()}"><a sveltekit:prefetch href="${"/contact"}" class="${"svelte-mdoqhn"}">Contact</a></li></ul>
		<svg viewBox="${"0 0 2 3"}" aria-hidden="${"true"}" class="${"svelte-mdoqhn"}"><path d="${"M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"}" class="${"svelte-mdoqhn"}"></path></svg></nav>

	<div class="${"corner svelte-mdoqhn"}"></div>
</header>`;
});
var app = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1izrdc8{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}@media(min-width: 480px){}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>M\xE1rcel Quintero | Desarrollador de coraz\xF3n.</title>`, ""}<meta name="${"description"}" content="${"Soy M\xE1rcel Quintero. J\xF3ven emprendedor con la motivaci\xF3n y el compromiso de dise\xF1ar aplicaciones multiplataforma para el beneficio de sectores de innovaci\xF3n"}" data-svelte="svelte-1w1fpc">`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<main class="${"svelte-1izrdc8"}">${slots.default ? slots.default({}) : ``}</main>

`;
});
export { _layout as default };
