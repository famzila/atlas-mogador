import React, { useState } from 'react';

export default function Country(props) {
  //   const selectedCurrency = props.activeCurrency;
  //   const selectedCountry = props.activeCountry;
  const countries = [
    {
      name: 'France',
      key: 'fr',
      img: 'assets/img/header/fr.png',
      class: 'dropdown-item',
    },
    {
      name: 'United State',
      key: 'us',
      img: 'assets/img/header/us.png',
      class: 'dropdown-item',
    },
    {
      name: 'Morocco',
      key: 'ma',
      img: 'assets/img/header/ma.png',
      class: 'dropdown-item',
    },
  ];
  const currencies = [
    { name: 'EUR', key: 'eur', class: 'dropdown-item' },
    { name: 'Dollar', key: 'dollar', class: 'dropdown-item' },
    { name: 'Dirham', key: 'dirham', class: 'dropdown-item' },
  ];
  const [selectedCurrency, setSelectedCurrency] = useState('Euro');
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  return (
    <div className="col-xl-2 col-lg-2">
      <div className="d-inline p-2">
        <button
          data-toggle="dropdown"
          className="btn btn-link dropdown-toggle"
          type="button"
        >
          <span className="text-uppercase">{selectedCurrency}</span>
        </button>
        <ul
          className="dropdown-menu dropdown-languages lng-header"
          //   data-code="fr"
          //   data-code-url=""
          //   data-double-code="fr-FR"
        >
          {currencies.map((currency) => (
            <li
              className="dropdown-item"
              key={currency.key}
              onClick={() => setSelectedCurrency(currency.name)}
            >
              {currency.name}
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
            <img src={selectedCountry.img} alt={selectedCountry.name} />
          </span>
        </button>
        <ul
          className="dropdown-menu dropdown-languages lng-header"
          data-code="fr"
          data-code-url=""
          data-double-code="fr-FR"
        >
          {countries.map((country, index) => (
            <li className="dropdown-item" key={country.key}>
              <a href={country.link} className="pr-3">
                <img
                  src={country.img}
                  alt={country.name}
                  onClick={() => setSelectedCountry(countries[index])}
                />
              </a>
              {country.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
