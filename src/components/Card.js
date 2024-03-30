import React from 'react'

export const Card = (props) => {
  let imageUrl = props.src
  let id = props.id

  const showDescription = (id) => {
    let descriptionId = document.getElementById(id)
    let paragraphs = document.getElementsByClassName('show-js')

    for (const paragraph of paragraphs) {
      paragraph.classList.remove('show-js')
      paragraph.classList.add('hide-js')
    }

    descriptionId.classList.add('show-js')
  }

  return (
    <div>
      <div className='card' onClick={e => showDescription(id)}>
        <div>
          <img src={imageUrl} className='card-image' />
        </div>
        <div className='card-text'>
          <h5>{id}</h5>
          Lorem ipsum dolor sit amet consectetur adipiscing elit feugiat, tortor libero id netus imperdiet maecenas natoque.
        </div>
      </div>
    </div>
  )
}
