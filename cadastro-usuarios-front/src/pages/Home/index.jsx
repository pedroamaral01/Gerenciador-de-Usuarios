import { useRef } from "react"
import { useNavigate} from "react-router-dom"
import api from "../../services/api"

import {
  Container,
  ContainerInputs,
  Form,
  Input,
  InputLabel
} from "./styles"

import TopBackground from "../../components/TopBackground"
import DefaultButton from "../../components/DefaultButton"
import DefaulTitle from "../../components/DefaultTitle"

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    const data = await api.post('/usuarios', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value
    })

    navigate('/lista-de-usuarios')
  }



  return (
    <Container>

      <TopBackground />

      <Form>
        <DefaulTitle> Cadastrar Usuário</DefaulTitle>

        <ContainerInputs>

          <div>
            <InputLabel>
              Nome <span> *</span>
            </InputLabel>
            <Input type="text" placeholder="Nome de usuário" ref={inputName} />
          </div>

          <div>
            <InputLabel>
              Idade <span> *</span>
            </InputLabel>
            <Input type="number" placeholder="Idade de usuário" ref={inputAge} />
          </div>

        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail <span> *</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do usuário" ref={inputEmail} />
        </div>

        <DefaultButton type='button' onClick={registerNewUser} theme="primary">
          Cadastrar Usuário
        </DefaultButton>

        <DefaultButton type='button' onClick={() => navigate('/lista-de-usuarios')} theme="secondary">
          Ver lista de Usuários
        </DefaultButton>

      </Form>
    </Container>
  )
}

export default Home
