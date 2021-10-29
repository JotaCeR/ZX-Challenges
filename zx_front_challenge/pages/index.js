import Head from 'next/head';
import StyledTitle from '../styles/header/StyledTitle';
import StyledHeader from '../styles/header/StyledHeader';
import StyledBody from '../styles/StyledBody';
import StyledSkeleton from '../styles/skeleton/StyledSkeleton';
import StyledNavBar from '../styles/skeleton/StyledNav';
import Deck from '../components/Deck';


export default function Home() {
  return (
    <StyledBody>
      <Head>
        <title>Siempre en Casa</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <StyledHeader>
        <StyledTitle>Siempre en Casa</StyledTitle>
      </StyledHeader>
      <StyledSkeleton>
        <StyledNavBar />
        <Deck />
      </StyledSkeleton>
    </StyledBody>
  )
}
