import React from 'react'

function Ceo() {
  return (
    <section className='bg-section ceo'>
      <div className='container'>
        <div className='img-ceo img img-border col-sm-6'>
          <img src='/img/foto-sushi-6anudmpILw4-unsplash 1.png'></img>
        </div>
        <div className='txt-ceo text col-sm-6'>
          <h2 className='heading'>CEO</h2>
          <div className='txt'>
            <p>“Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.”</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Ceo