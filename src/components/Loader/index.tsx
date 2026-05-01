import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to { transform: rotate(360deg); }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  gap: 16px;
`

const Spinner = styled.div`
  width: 48px;
  height: 48px;
  border: 4px solid rgba(230, 103, 103, 0.2);
  border-top-color: #E66767;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`

const Text = styled.p`
  color: #E66767;
  font-size: 16px;
  font-weight: 300;
`

const Loader = () => (
  <Wrapper>
    <Spinner />
    <Text>Carregando...</Text>
  </Wrapper>
)

export default Loader
