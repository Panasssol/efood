import styled from 'styled-components'

const TagContainer = styled.span`
  display: inline-block;
  background-color: #E66767;
  color: #FFF8F2;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 8px;
  margin-right: 8px;
  border-radius: 4px;
  text-transform: capitalize;
`

type TagProps = {
  children: React.ReactNode
}

const Tag = ({ children }: TagProps) => <TagContainer>{children}</TagContainer>

export default Tag
