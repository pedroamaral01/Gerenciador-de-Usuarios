import api from '../../services/api'
import TopBackground from '../../components/TopBackground'
import DefaultButton from '../../components/DefaultButton'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container, ContainerUsers, CardUsers, TrashIcon, AvatarUser } from './styles'

import Trash from '../../assets/trash.svg'
import DefaultTitle from '../../components/DefaultTitle'

function ListUsers() {

    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect(() => {

        async function listAllUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data)
        }
        listAllUsers()
    }, [])

        async function deleteUser(idUser) {
            await api.delete(`/usuarios/${idUser}`)
            const updatedUsers = users.filter (user => user.id !== idUser)

            setUsers(updatedUsers)
            
        }

    return (
        <div>
            <Container>
                <TopBackground />

                <DefaultTitle style={{ marginTop: '30px' }}>Listagem de Usuários</DefaultTitle>

                <ContainerUsers>
                    {users.map((user) => (
                        <CardUsers key={user.id}>
                            <AvatarUser src= {`https://avatar.iran.liara.run/public?username=${user.id}` }/>
                            <div>
                                <h2>{user.name}</h2>
                                <p>{user.email}</p>
                                <p>{user.age}</p>
                            </div>

                            <TrashIcon src = {Trash} alt='icone-lixo' onClick={() => deleteUser(user.id)}/>
                            
                        </CardUsers>
                    ))}
                </ContainerUsers>

                <DefaultButton type='button' onClick={() => navigate('/')} theme="primary">
                    Voltar
                </DefaultButton>
            </Container>
        </div>
    )
}

export default ListUsers