import React from 'react'
import style from '../../style/infobox.module.css'

function InfoBox({title, cases, total}) {
    return (
        <div className={style.infobox__container}>
          <h3>{title}</h3>
          <h1>{cases}</h1>
          <p>{total}:Total</p>
        </div>
    )
}

export default InfoBox
