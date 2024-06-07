//CSS
import styles from "./ReviewForm.module.css";

//Emojis
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from "react-icons/bs";

interface IReviewForm {
  data: {
    review: string;
    comment: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
}

function ReviewForm({ data, updateFieldHandler }: IReviewForm) {
  return (
    <div className={styles.review_form}>
      <div className={`${styles.form_control} ${styles.score_container} ${"form-control"} ${"score-container"} `}>
        <label className={styles.radio_container}>
          <input
            type="radio"
            value="unsatisfied"
            name="review"
            required
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiFrownFill className={styles["red"]} />
          <p>Insatisfeito</p>
        </label>
        <label className={styles.radio_container}>
          <input
            type="radio"
            value="neutral"
            name="review"
            required
            checked={data.review === "neutral"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill className={styles["yellow"]} />
          <p>Poderia ser melhor</p>
        </label>
        <label className={styles.radio_container}>
          <input
            type="radio"
            value="satisfied"
            name="review"
            required
            checked={data.review === "satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiSmileFill className={styles["green"]} />
          <p>Muito satisfeito</p>
        </label>
        <label className={styles.radio_container}>
          <input
            type="radio"
            value="very_satisfied"
            name="review"
            required
            checked={data.review === "very_satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill className={styles["blue"]} />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className={styles["form_control"]}>
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Conte como foi a sua experiência com o produto..."
          required
          value={data.comment || ""}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
}

export default ReviewForm;
