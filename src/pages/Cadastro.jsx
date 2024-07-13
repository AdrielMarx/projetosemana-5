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
        <label htmlFor="email">Seu melhor Email</label>
        <input type="email"
        id="email"
        className="form-control"
        placeholder="gatopoles@exemplo.com"
        {...register('email', {required: 'Email inválido'})} />
        {errors.email && <Alert key={'secondary'} variant="secondary">{errors.email.message}</Alert>}
      </div>
      <div>
        <label htmlFor="dataNascimento">Data de nascimento</label>
        <input type="date"
        id="dataNascimento"
        className="form-control"
        {...register('dataNascimento', {required: 'Selecione uma data'})} />
        {errors.dataNascimento && <Alert key={'secondary'} variant="secondary">{errors.dataNascimento.message}</Alert>}
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
      <Button type="submit" variant="success" className="mt-2 w-100">Criar conta</Button>
      </form>
      
    </main>
  )
}

export default Cadastro