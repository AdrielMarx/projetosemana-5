import { Alert, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import '../components/styles/Forms.css';

function Login() {
  const {register, handleSubmit, formState: {errors}} = useForm()

  function logar(data) {

  }
  return (
    <main className="login-content">
      <h1>Faça seu login na Gatópoles</h1>
      <form onSubmit={handleSubmit(logar)}>
        <div>
          <label htmlFor="email">Seu melhor email</label>
          <input type="email"
          id="email"
          className="form-control"
          placeholder="email@exemplo.com"
          {...register('email', {required: 'O seu email é obrigatório'})}
          />
          {errors.email && <Alert key={'secondary'} variant='secondary'>{errors.email.message}</Alert>} 
        </div>
        <div>
          <label htmlFor="senha">Crie uma senha forte</label>
          <input type="password"
          id="senha"
          className="form-control"
          placeholder="Ex: 1234@Exempl0"
          {...register('senha', {required: 'A senha é obrigatória', minLength: {value: 6, message: 'Mínimo de 6 caracteres'}})} />
          {errors.senha && <Alert key={'secondary'} variant="secondary">{errors.senha.message}</Alert>}
        </div>
        <Button type="submit" variant="success" className="mt-2 w-100">Fazer login</Button>
      </form>
    </main>
  )
}

export default Login