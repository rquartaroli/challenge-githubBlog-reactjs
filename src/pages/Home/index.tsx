
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaGithub, FaBuilding, FaUserFriends, FaShareSquare } from "react-icons/fa";

import { CardPost } from "../../components/CardPost";
import { Header } from '../../components/Header'
import { GitHubIssuesRepository, GitHubProfileDTO } from "../../DTOs/gitHubApiDTOs";
import api from "../../services/api";
import * as S from './styles'

export function Home() {
  const [profileUser, setProfileUser] = useState<GitHubProfileDTO>({} as GitHubProfileDTO);
  const [issuesPosts, setIssuesPosts] = useState<GitHubIssuesRepository>({} as GitHubIssuesRepository);
  const [loadingPage, SetLoadingPage] = useState(false);
  const navigate = useNavigate();

  const loadProfileUser = useCallback(async () => {
    const response = await api.get('/users/rquartaroli').then((res) =>  res.data) as GitHubProfileDTO;

    const userLogged = {
      login: response.login,
      avatar_url: response.avatar_url,
      bio: response.bio,
      html_url: response.html_url,
      name: response.name,
      company: response.company,
      followers: response.followers,
    } as GitHubProfileDTO

    setProfileUser(userLogged)
    
  }, []);

  const loadIssuesRepositorie = useCallback(async (query: string) => {
    const response = await api.get(`/search/issues?q=${query}repo:rocketseat-education/reactjs-github-blog-challenge`)
                      .then((res) =>  res.data) as GitHubIssuesRepository;

    const arrayItems = response.items.map((item) => {

      const dateCreatedAt = new Date(item.created_at)
      const dateNow = new Date()
      const dateInDays =  dateNow.getTime() - dateCreatedAt.getTime()

      const diffDate = Math.floor(dateInDays / (1000 * 60 * 60 * 24));

      return {
        id: item.id,
        number: item.number,
        title: item.title,
        created_at: diffDate.toString(),
        body: item.body,
      }
    })  

    const issuesPost = {
      total_count: response.total_count,
      items: arrayItems,
    } as GitHubIssuesRepository

    setIssuesPosts(issuesPost)
    SetLoadingPage(true)
    
  }, [issuesPosts]);

  function handleOpenPost(idPost: number) {
    navigate(`/post/${idPost}`)
  }

  useEffect(() => {
    loadProfileUser();
    loadIssuesRepositorie("");
  }, []);

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
        <S.AvatarProfile src={profileUser.avatar_url} alt="" />

        <S.ColumnsProfileContainer>
          <div>
            <S.RowProfileName>
              <strong>{profileUser.name}</strong>
              <a href={profileUser.html_url} target="_blank">
                <span>GITHUB</span>
                <FaShareSquare />
              </a>
            </S.RowProfileName>

            <article>
              {profileUser.bio}
            </article>
          </div>

          <div>
            <S.RowInfoTagsProfile>
              <S.InfoTagsProfile>
                <FaGithub />
                <span>{profileUser.login}</span>
              </S.InfoTagsProfile>
              <S.InfoTagsProfile>
                <FaBuilding />
                <span>{profileUser.company}</span>
              </S.InfoTagsProfile>
              <S.InfoTagsProfile>
                <FaUserFriends />
                <span>{profileUser.followers} seguidores</span>
              </S.InfoTagsProfile>
            
            </S.RowInfoTagsProfile>
          </div>
        </S.ColumnsProfileContainer>
      </S.ContainerProfile>

      <S.WrapperInput>
        <S.RowTitleInput>
          <label htmlFor="">Publicações</label>
          <span>{issuesPosts.total_count} publicações</span>
        </S.RowTitleInput>

        <S.InputField 
          type="text" 
          placeholder="Buscar conteúdo"
          onBlur={(event) => loadIssuesRepositorie(event.target.value)}
        />
      </S.WrapperInput>

      <S.WrapperPosts>
        {
          issuesPosts
          &&
          issuesPosts.items.map((issue) => 
            <CardPost
              key={issue.id}
              createdAt={issue.created_at}
              titleCard={issue.title}
              descriptionCard={issue.body}
              onClick={() => handleOpenPost(issue.number)}
            />
        )}
      </S.WrapperPosts>
      
    </S.Content>
  </S.Container>
  )
}