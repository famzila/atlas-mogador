import React from 'react';

export default function Country() {
  const countries = [
    { name: 'France', key: 'fr', img: 'assets/img/header/fr.png' },
    { name: 'United State', key: 'us', img: 'assets/img/header/us.png' },
    { name: 'Morocco', key: 'ma', img: 'assets/img/header/ma.png' },
  ];
  const currencies = [
    { name: 'EUR', key: 'eur' },
    { name: 'Dollar', key: 'dollar' },
    { name: 'Dirham', key: 'dirham' },
  ];
  return (
    <div className="col-xl-2 col-lg-2">
      <div className="d-inline p-2">
        <button
          data-toggle="dropdown"
          className="btn btn-link dropdown-toggle"
          type="button"
        >
          <span class="text-uppercase">EUR</span>
        </button>
        <ul
          className="dropdown-menu dropdown-languages lng-header"
          data-code="fr"
          data-code-url=""
          data-double-code="fr-FR"
        >
          {currencies.map((currency) => (
            <li className="dropdown-item" key={currency.key}>
              <a href="/#">{currency.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="d-inline">
        <button
          data-toggle="dropdown"
          className="btn btn-link dropdown-toggle"
          type="button"
        >
          <span>
            <img src={countries[0].img} alt={countries[0].name} />
          </span>
        </button>
        <ul
          className="dropdown-menu dropdown-languages lng-header"
          data-code="fr"
          data-code-url=""
          data-double-code="fr-FR"
        >
          {countries.map((country) => (
            <li className="dropdown-item" key={country.key}>
              <a href={country.link} className="pr-3">
                <img src={country.img} alt={country.name} />
              </a>
              {country.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
