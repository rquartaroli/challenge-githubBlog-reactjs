import styled, { css } from 'styled-components';

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
    margin-bottom: 1.25rem;

    & + div {
      margin-bottom: 0.5rem;
    }

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
        margin-left: 0.5rem;
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
      color: ${theme.colors.spanColor};
    }
  `}
`

export const WrapperPost = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;
  padding: 2.5rem 2rem;
`

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    display: flex;

    article {
      width: 100%;
      font-family: ${theme.fonts.nunito};
      font-size: 1rem;
      font-weight: 400;
      color: ${theme.colors.textColor};
      line-height: 1.625rem;

      a {
        color: ${theme.colors.blue};
        border-top: 0;
        border-right: 0;
        border-left: 0;
        border-bottom: 1px;
        border-style: solid;
        border-color: transparent;

        &:hover {
          border-color: ${theme.colors.blue};
        }
      }

      p {
        margin-bottom: 1rem;
        img {
          width: 100%;
        }
      }

      h2, h3 {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
    }
  `}
`
  