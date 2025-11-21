let pokemonRepository = (function () {
  let e = [];
  function t(e) {
    return fetch(e.detailsUrl)
      .then(function (e) {
        return e.json();
      })
      .then(function (t) {
        (e.imageUrl = t.sprites.front_default),
          (e.height = t.height),
          (e.types = t.types.map(function (e) {
            return e.type.name;
          }));
      })
      .catch(function (e) {
        console.error(e);
      });
  }
  function n() {
    return e;
  }
  function i(t) {
    e.push(t);
  }
  return {
    getAll: n,
    add: i,
    addListItem: function e(n) {
      let i = document.querySelector(".pokemon-list"),
        o = document.createElement("li");
      o.classList.add(
        "list-group-item",
        "d-felx",
        "justify-content-between",
        "align-items-center"
      );
      let r = document.createElement("button");
      (r.innerText = n.name),
        r.classList.add("btn", "btn-primary", "btn-sm"),
        r.setAttribute("data-toggle", "modal"),
        r.setAttribute("data-target", "#pokemonModal"),
        r.addEventListener("click", function () {
          (function e(n) {
            t(n).then(function () {
              var e;
              let t, i, o, r, a, l;
              (e = n),
                ((t = document.querySelector(".modal-body")).innerHTML = ""),
                ((i = document.createElement("h1")).innterText = e.name),
                (o = document.createElement("img")).classList.add("modal-img"),
                (o.src = e.imageUrl),
                (o.alt = `${e.name} image`),
                ((r =
                  document.createElement(
                    "p"
                  )).innerText = `height: ${e.height} m`),
                ((a =
                  document.createElement(
                    "p"
                  )).innerText = `weight: ${e.weight} kg`),
                ((l =
                  document.createElement(
                    "p"
                  )).innerText = `types: ${e.types.join(", ")}`),
                t.appendChild(i),
                t.appendChild(o),
                t.appendChild(r),
                t.appendChild(a),
                t.appendChild(l),
                console.log(n);
            });
          })(n);
        }),
        o.appendChild(r),
        i.appendChild(o);
    },
    loadList: function e() {
      return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150")
        .then(function (e) {
          return e.json();
        })
        .then(function (e) {
          e.results.forEach(function (e) {
            i({ name: e.name, detailsUrl: e.url });
          });
        })
        .catch(function (e) {
          console.error(e);
        });
    },
    loadDetails: t,
  };
})();
pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (e) {
    pokemonRepository.addListItem(e), console.log(e);
  });
});
