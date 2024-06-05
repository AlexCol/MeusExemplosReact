//? CSS
import './App.css'

//? Icons
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';


//? Components
import Thanks from './components/Thanks';
import UserForm from './components/UserForm';
import ReviewForm from './components/ReviewForm';
import Steps from './components/Steps';

//? Hooks
import { useForm } from './hooks/useForm';
import { useState } from 'react';

interface IFormFields {
  name: string,
  email: string,
  review: string,
  comment: string
}

const formFields: IFormFields = {
  name: "",
  email: "",
  review: "",
  comment: ""
}

function App() {
  const [data, setData] = useState(formFields);

  const updateFieldHandler = (key: string, value: string) => {
    setData((prev) => {
      return { ...prev, [key]: value }
    });
  }

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm />,
    <Thanks />
  ];
  const { changeStep, currentComponent, currentStep } = useForm(formComponents);


  return (
    <div className='app'>
      <div className="header">
        <h2>Deise sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra. Utilize o formulário abaixo para avaliar o produto.
        </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="actions">
            {/* necessario aqui o tipo ser button, senão ele pega o padrão, que é submit */}
            <button type='button' onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
            <button type='submit'>
              <span>Avançar</span>
              <GrFormNext />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
