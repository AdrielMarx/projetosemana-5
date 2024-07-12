import { Alert, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import '../components/styles/Forms.css';

function Cadastro() {
  const {register, handleSubmit, formState: {errors}} = useForm()

  function cadastrar(data) {

  }

  return (
    <main className="login-content">
      <h1>Cadasatre-se hoje para adotar e apadrinhar</h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <div>
        <label htmlFor="nome">Seu nome completo</label>
        <input type="text"
        id="nome"
        className="form-control"
        placeholder="Ex: José Almir"
        {...register('nome', {required: 'Este campo é obrigatório'})} />
        {errors.nome && <Alert key={'secondary'} variant="secondary">{errors.nome.message}</Alert>}
      </div>
      <div>
        <label htmlFor="email">Informe seu email</label>
        <input type="email"
        id="email"
        className="form-control"
        placeholder="gatopoles@exemplo.com"
        {...register('email', {required: 'Email inválido'})} />
        {errors.email && <Alert key={'secondary'} variant="secondary">{errors.email.message}</Alert>}
      </div>
      </form>
      
    </main>
  )
}

export default Cadastro