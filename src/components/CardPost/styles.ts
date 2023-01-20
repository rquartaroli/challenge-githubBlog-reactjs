import styled, { css } from 'styled-components'

export const Container = styled.button`
  ${({ theme }) => css`
    height: 16.25rem;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: ${theme.colors.postColor};
    border-radius: 10px;
    overflow: hidden;
    border: 2px solid transparent;

    &:hover {
      border-color: ${theme.colors.labelColor};
    }
  `}
`

export const RowTitle = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.25rem;

    strong {
      width: 80%;
      font-family: ${theme.fonts.nunito};
      font-size: 1.25rem;
      font-weight: 700;
      color: ${theme.colors.titleColor};
      text-align: start;
    }

    span {
      width: 20%;
      font-family: ${theme.fonts.nunito};
      font-size: 0.875rem;
      font-weight: 400;
      color: ${theme.colors.spanColor};
    }
  `}
`

export const WrapperContent = styled.div`
  ${({ theme }) => css`
    display: flex;

    article {
      font-family: ${theme.fonts.nunito};
      font-size: 1rem;
      font-weight: 400;
      color: ${theme.colors.textColor};
      line-height: 1.625rem;
      text-align: start;
    }
  `}
`
