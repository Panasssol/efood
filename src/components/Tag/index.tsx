import styled from 'styled-components'

const TagContainer = styled.span`
  display: inline-block;
  background-color: #E66767;
  color: #FFEBD9;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  padding: 6px 10px;
`

type TagProps = {
  children: React.ReactNode
}

const Tag = ({ children }: TagProps) => <TagContainer>{children}</TagContainer>

export default Tag