//! CSS
import { ReactElement } from 'react';
import styles from './Thanks.module.css';

//!Icons
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from "react-icons/bs";

//!Interfaces
interface IEmojiData {
  unsatisfied: ReactElement,
  neutral: ReactElement,
  satisfied: ReactElement,
  very_satisfied: ReactElement
}

interface IThanksProp {
  data: {
    name: string,
    review: string,
    comment: string
  }
}

const emojoData: IEmojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />
};

function Thanks({ data }: IThanksProp) {
  return (
    <div className={styles['thanks_container']}>
      <h2>Falta pouco...</h2>
      <p>A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para a sia próxima compra.</p>
      <p>Para concluir sua avaliação, clique no botão de Enviar, logo abaixo.</p>
      <h3>Aqui está o resumo da sua avaliação:</h3>
      <h3>{data.name}</h3>
      <p className={styles['review_data']}>
        <span>Satisfação com o produto:</span>
        {emojoData[data.review as keyof typeof emojoData]}
      </p>
      <p className={styles["review_data"]}>
        <span>Comentário:</span> {data.comment}
      </p>
    </div>
  )
}

export default Thanks