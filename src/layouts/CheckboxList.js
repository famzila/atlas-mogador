import React from 'react'

export default function FilterCheckboxList(props) {
  return (
    <article>
      <div className='filter_bordered'>
        <h3 className='mt-20'>{props.title}</h3>
        <hr />
        <div className='filter_inner'>
          <div className='single-element-widget mt-30'>
            {props.list.map((elt, index) => {
              return (
                <div
                  key={index}
                  className='switch-wrap d-flex justify-content-between'
                >
                  <p>{elt.label}</p>
                  <div className='confirm-checkbox'>
                    <input
                      type='checkbox'
                      id={`confirm-checkbox-${index}`}
                      checked
                    />
                    <label for={`confirm-checkbox-${index}`}></label>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </article>
  )
}
