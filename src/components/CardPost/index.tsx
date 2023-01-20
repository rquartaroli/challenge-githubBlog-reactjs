import * as S from './styles';

type CardPostProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  titleCard: string,
  createdAt: string,
  descriptionCard: string,
}

export function CardPost({ titleCard, createdAt, descriptionCard, ...rest }: CardPostProps) {
  return (
    <S.Container {...rest}>
      <S.RowTitle>
        <strong>{titleCard}</strong>
        <span>Há {Number(createdAt) <= 1 ? createdAt+' dia' : createdAt+' dias'}</span>
      </S.RowTitle>
      <S.WrapperContent>
        <article>
          {descriptionCard.length > 181 ? descriptionCard.substring(0, 181) + "..." : descriptionCard}
        </article>
      </S.WrapperContent>
    </S.Container>
  )
}