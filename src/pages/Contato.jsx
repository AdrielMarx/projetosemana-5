import { useForm } from 'react-hook-form'
import '../components/styles/Contato.css'
import { Alert, Button } from 'react-bootstrap'

function Contato() {
  const {register, handleSubmit, formState: {errors}} = useForm()

  return (
    <main className='contato'>
      <h1>Entre em contato conosco</h1>
      <form className='formulario' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Seu nome</label>
          <input type="text"
          id='nome'
          className='form-control'
          placeholder='Ex: José Almir'
          {...register('nome', {required: 'Este campo é obrigatório'})} />
          {errors.email && <Alert key={'secondary'} variant='secondary'>{errors.email.message}</Alert>}
        </div>
        <div>
          <label htmlFor="email">Email de contato</label>
          <input type="email"
          id='email'
          className='form-control'
          placeholder='email@exemplo.com'
          {...register('email', {required: 'Este campo é obrigatório'})} />
          {errors.email && <Alert key={'secondary'} variant='secondary'>{errors.email.message}</Alert>}
        </div>
        <div>
          <label htmlFor="feedback">Deixe um feedback</label>
          <input type="textarea" 
          id='feedback'
          className='form-control'
          placeholder='Ex: Muitos gatinhos fofos!'
          {...register('feedback', {required: 'Este campo é obrigatório'})} />
          {errors.feedback && <Alert key={'secondary'} variant='secondary'>{errors.feedback.message}</Alert>}
        </div>
        <Button type='submite' variant='success' className='mt-2 w-100'>Entrar em contato</Button>
      </form>
    </main>
  )
}

export default Contato