document.querySelector("#search-box"),document.querySelector(".country-list"),document.querySelector(".country-info");fetch("https://restcountries.com/v3.1/all").then((o=>{if(console.log(o),!o.ok)throw new Error(o.status);return o.json()})).then((o=>console.log(o))).catch((o=>console.log(o)));
//# sourceMappingURL=index.0ffd0587.js.map
