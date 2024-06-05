import { AiOutlineStar, AiOutlineUser } from 'react-icons/ai';
import styles from './Steps.module.css';
import { FiSend } from 'react-icons/fi';

interface IStepsProps {
  currentStep: number;
}

function Steps({ currentStep }: IStepsProps) {
  return (
    <div className={styles.steps}>
      <div className={`${styles.step} ${styles.active}`}>
        <AiOutlineUser />
        <p>Identificação</p>
      </div>
      <div className={`${styles.step} ${currentStep >= 1 ? styles.active : ''}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div className={`${styles.step} ${currentStep >= 2 ? styles.active : ''}`}>
        <FiSend />
        <p>Envio</p>
      </div>
    </div>
  )
}

export default Steps