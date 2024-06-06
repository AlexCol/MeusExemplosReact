//CSS
import styles from './ReviewForm.module.css';

//Emojis
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from 'react-icons/bs';

interface IReviewForm {
  data: {
    review: string,
    comment: string
  },
  updateFieldHandler: (key: string, value: string) => void
}

function ReviewForm({ data, updateFieldHandler }: IReviewForm) {
  return (

    <div className={styles.review_form}>
      <div className={`${styles.form_control} ${styles.score_container} ${"form-control"} ${"score-container"} `}>
        <label className={styles.radio_container}>
          <input type="radio" value="unsatisfied" name="review" required />
          <BsFillEmojiFrownFill className={styles['red']} />
          <p>Insatisfeito</p>
        </label>
        <label className={styles.radio_container}>
          <input type="radio" value="neutral" name="review" required />
          <BsFillEmojiNeutralFill className={styles['yellow']} />
          <p>Poderia ser melhor</p>
        </label>
        <label className={styles.radio_container}>
          <input type="radio" value="satisfied " name="review" required />
          <BsFillEmojiSmileFill className={styles['green']} />
          <p>Muito satisfeito</p>
        </label>
        <label className={styles.radio_container}>
          <input type="radio" value="very_satisfied" name="review" required />
          <BsFillEmojiHeartEyesFill className={styles['blue']} />
          <p>Muito satisfeito</p>
        </label>
      </div>
    </div>
  )
}

export default ReviewForm