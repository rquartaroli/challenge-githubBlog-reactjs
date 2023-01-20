import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
`

export const ContainerProfile = styled.div`
  ${({theme}) => css`{
    width: 54rem;
    height: 13.25rem;
    display: flex;
    justify-content: center;
    padding: 2rem;
    position: absolute;
    top: 13rem;

    background-color: ${theme.colors.profileColor};
    border-radius: 10px;
  }
  `}
`

export const AvatarProfile = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`

export const ColumnsProfileContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 2rem;

    article {
      font-family: ${theme.fonts.nunito};
      font-size: 1rem;
      font-weight: 400;
      color: ${theme.colors.textColor};
      margin-bottom: 1.5rem;
    }
  `}
`

export const RowProfileName = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;

    strong {
      font-family: ${theme.fonts.nunito};
      font-size: 1.5rem;
      font-weight: 700;
      color: ${theme.colors.titleColor};
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: ${theme.fonts.nunito};
      font-size: 0.75rem;
      font-weight: 700;
      color: ${theme.colors.blue};
      text-transform: uppercase;
      border-top: 0;
      border-right: 0;
      border-left: 0;
      border-bottom: 1px;
      border-style: solid;
      border-color: transparent;

      &:hover {
        border-color: ${theme.colors.blue};
      }

      span {
        margin-right: 0.5rem;
      }
    }
  `}
`

export const RowInfoTagsProfile = styled.div`
  display: flex;
  align-items: center;
`

export const InfoTagsProfile = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-right: 1.5rem;

    svg {
      width: 1rem;
      height: 1rem;
      color: ${theme.colors.labelColor};
      margin-right: 0.5rem;
    }

    span {
      font-family: ${theme.fonts.nunito};
      font-size: 1rem;
      font-weight: 400;
      color: ${theme.colors.subtitleColor};
    }
  `}
`

export const WrapperInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12rem;
`

export const RowTitleInput = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.75rem;

    label {
      font-family: ${theme.fonts.nunito};
      font-size: 1.125rem;
      font-weight: 700;
      color: ${theme.colors.subtitleColor};
    }

    span {
      font-family: ${theme.fonts.nunito};
      font-size: 0.875rem;
      font-weight: 400;
      color: ${theme.colors.spanColor};
    }
  `}
`

export const InputField = styled.input`
  ${({ theme }) => css`
    padding: 0.75rem 1rem;
    color: ${theme.colors.textColor};
    background-color: ${theme.colors.inputColor};
    border-radius: 6px;
    border: 1px solid ${theme.colors.borderColor};

    ::placeholder {
      color: ${theme.colors.labelColor};
    }
  `}
`

export const WrapperPosts = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`
