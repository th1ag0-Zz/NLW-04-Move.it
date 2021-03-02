// Fazer modificações ainda

import Head from 'next/head'
import {GetServerSideProps} from 'next'

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { UserGithubLogin } from '../components/UserGithubLogin';

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (

    <UserGithubLogin />

    // <ChallengesProvider
    //   level={props.level}
    //   currentExperience={props.currentExperience}
    //   challengesCompleted={props.challengesCompleted}
    // >
    //   <div className={styles.container}>

    //     <Head>
    //       <title>Início | move.it</title>
    //     </Head>

    //     <ExperienceBar />

    //     <CountdownProvider>
    //       <section>
    //         <div className="">
    //           <Profile />
    //           <CompletedChallenges />
    //           <Countdown />
    //         </div>

    //         <div>
    //           <ChallengeBox />
    //         </div>
    //       </section>
    //     </CountdownProvider>
        
    //   </div>
    // </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level ?? 1),
      currentExperience: Number(currentExperience ?? 0),
      challengesCompleted: Number(challengesCompleted ?? 0)
    }
  }
}