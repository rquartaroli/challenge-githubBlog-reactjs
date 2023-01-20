
import { useCallback, useEffect, useState } from "react";
import { NavLink, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'
import { FaGithub, FaCalendarDay, FaComment, FaShareSquare, FaAngleLeft } from "react-icons/fa";

import api from "../../services/api";
import { Header } from '../../components/Header';
import { GitHubIssuePost } from '../../DTOs/gitHubApiDTOs';

import * as S from './styles';

export function Post() {
  const [issuePost, setIssuePost] = useState<GitHubIssuePost>({} as GitHubIssuePost)
  const [loadingPage, SetLoadingPage] = useState(false);
  const { id } = useParams();

  const loadIssuePost = useCallback(async (idPost: string) => {
    const response = await api.get(`https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${idPost}`)
                      .then((res) =>  res.data);

    const dateCreatedAt = new Date(response.created_at)
    const dateNow = new Date()
    const dateInDays =  dateNow.getTime() - dateCreatedAt.getTime()

    const diffDate = Math.floor(dateInDays / (1000 * 60 * 60 * 24));

    const newIssuePost = {
      html_url: response.html_url,
      title: response.title,
      login: response.user.login,
      comments: response.comments,
      created_at: diffDate.toString(),
      body: response.body,
    } as GitHubIssuePost

    setIssuePost(newIssuePost)
    SetLoadingPage(true)
    
  }, [issuePost]);

  useEffect(() => {
    if(id) {
      loadIssuePost(id)
    }
  }, [])

  if(!loadingPage) {
    return (
      <S.Container>
        <Header />
      </S.Container>
    )
  }

  return (
    <S.Container>
      <Header />
      <S.Content>
        <S.ContainerProfile>

          <S.ColumnsProfileContainer>
            <div>
              <S.RowProfileName>
                <NavLink to="/">
                  <FaAngleLeft />
                  <span>VOLTAR</span>
                </NavLink>
                <a href={issuePost.html_url} target="_blank">
                  <span>VER NO GITHUB</span>
                  <FaShareSquare />
                </a>
              </S.RowProfileName>
              <S.RowProfileName>
                <strong>{issuePost.title}</strong>
              </S.RowProfileName>

            </div>

            <div>
              <S.RowInfoTagsProfile>
                <S.InfoTagsProfile>
                  <FaGithub />
                  <span>{issuePost.login}</span>
                </S.InfoTagsProfile>
                <S.InfoTagsProfile>
                  <FaCalendarDay />
                  <span>Há 
                    {Number(issuePost.created_at) <= 1 
                      ? ' '+issuePost.created_at+' dia' 
                      : ' '+issuePost.created_at+' dias'
                    }
                  </span>
                </S.InfoTagsProfile>
                <S.InfoTagsProfile>
                  <FaComment />
                  <span>
                    {Number(issuePost.comments) <= 1 
                      ? issuePost.comments+' comentário' 
                      : issuePost.comments+' comentários'
                    }
                  </span>
                </S.InfoTagsProfile>
              
              </S.RowInfoTagsProfile>
            </div>
          </S.ColumnsProfileContainer>
        </S.ContainerProfile>

        <S.WrapperPost>
          <S.WrapperContent>
            <article>
              <ReactMarkdown children={issuePost.body} />
            </article>
        </S.WrapperContent>
        </S.WrapperPost>
      </S.Content>
    </S.Container>
  )
}