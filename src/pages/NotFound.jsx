import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../components/styles/NotFound.css'

function NotFound() {
  
  return (
      <main className="notfound">
        <img src="https://img.freepik.com/fotos-premium/tem-um-gato-olhando-para-uma-lupa-generativa-ai_958138-18694.jpg?w=740" alt="Ilustração de um gato segurando uma lupa." />
        <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Erro 404.</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Esta página não está disponível. Sentimos muito por isso</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success"><a href="/">Voltar para home</a></Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
      </main>
  )
}

export default NotFound