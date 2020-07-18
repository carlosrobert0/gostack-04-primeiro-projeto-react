import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt='Github Explorer'/>
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder='Digite o nome do repositório'/>
        <button type='submit'>Pesquisar</button>
      </Form>

      <Repositories>
        <a href='test'>
          <img
            src='https://avatars2.githubusercontent.com/u/45858897?s=460&u=8dfeb7430dc4d8ac2b6cff7e0975a81dcd3dd397&v=4'
            alt='Carlos Roberto'
          />
          <div>
            <strong>carloscamacho</strong>
            <p>multinacional conect</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href='test'>
          <img
            src='https://avatars2.githubusercontent.com/u/45858897?s=460&u=8dfeb7430dc4d8ac2b6cff7e0975a81dcd3dd397&v=4'
            alt='Carlos Roberto'
          />
          <div>
            <strong>carloscamacho</strong>
            <p>multinacional conect</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href='test'>
          <img
            src='https://avatars2.githubusercontent.com/u/45858897?s=460&u=8dfeb7430dc4d8ac2b6cff7e0975a81dcd3dd397&v=4'
            alt='Carlos Roberto'
          />
          <div>
            <strong>carloscamacho</strong>
            <p>multinacional conect</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard;
