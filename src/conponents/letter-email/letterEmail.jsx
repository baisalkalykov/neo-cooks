import React from 'react'
import boy from '../../asset-img/boy.png'
import './letterEmail.scss'

const LetterEmail = () => {
  return (
    <div className='letterEmail'>
     <img src={boy} alt="boy" className='letterEmail__img' />
     <div className="letterEmail__des">
        <p className='letterEmail__title'>Выслали письмо со ссылкой для <br /> завершения регистрации на <br /> example@gmail.com</p>
        <p className='letterEmail__p'>Если письмо не пришло, не <br /> спеши ждать совиную почту - <br /> лучше
         <span className='letterEmail__span'> проверь ящик “Спам”</span>  </p>
        <p className='letterEmail__svg'> (´｡• ω •｡`)</p>
           
     </div>
      
    </div>
  )
}

export default LetterEmail
