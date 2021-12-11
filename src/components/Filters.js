import React from 'react'
import FilterCheckboxList from '../layouts/CheckboxList'

export default function Filters(props) {
  const propertyTitle = 'Type de propriété'
  const propertyTypeList = [
    { label: 'Maison Historique', checked: 'true' },
    { label: 'Riad', checked: 'true' },
    { label: 'Villa de luxe', checked: 'true' },
  ]

  const servicesTitle = 'Equipement & services'
  const servicesList = [
    { label: 'Piscine', checked: 'true' },
    { label: 'Personel de maison', checked: 'true' },
    { label: 'Plage à 15min', checked: 'true' },
    { label: 'Jardin', checked: 'true' },
    { label: 'Chef/Cuisinière', checked: 'true' },
    { label: 'Marriages/Fêtes', checked: 'true' },
  ]

  const roomsTitle = 'Nombre de chambre'
  const roomsList = [
    { label: '2+', checked: 'true' },
    { label: '3+', checked: 'true' },
    { label: '4+', checked: 'true' },
  ]

  const localisationTitle = 'Localisation'
  const localisationList = [
    { label: "En dehors d'Essaouirra", checked: 'true' },
    { label: 'Medina', checked: 'true' },
  ]

  const priceTitle = 'Price'

  return (
    <aside>
      <div className='filter_result_wrap'>
        <h3>Filter Result</h3>
        <FilterCheckboxList title={localisationTitle} list={localisationList} />
        <FilterCheckboxList title={propertyTitle} list={propertyTypeList} />
        <FilterCheckboxList title={servicesTitle} list={servicesList} />
        <FilterCheckboxList title={roomsTitle} list={roomsList} />
        <div className='filter_bordered'>
          <div className='filter_inner'>
            <div className='col-lg-12'>
              <div className='range_slider_wrap'>
                <span className='range'>{priceTitle}</span>
                <div id='slider-range'></div>
                <p>
                  <input
                    type='text'
                    id='amount'
                    readonly=''
                    style={
                      ({ border: '0' },
                      { color: '#7A838B' },
                      { fontWeight: '400' })
                    }
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='reset_btn text-center'>
        <button className='boxed-btn' type='submit'>
          Reset
        </button>
      </div>
    </aside>
  )
}
