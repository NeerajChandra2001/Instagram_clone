import React, { useState } from 'react'
import './timeline.css'
import Suggestion from './Suggestion'
import Post from './Posts/Post'

function Timeline() {

  const [post, setPost] = useState([
    {
      user: "leomessi",
      postImage: "https://media.gettyimages.com/id/98289499/photo/lionel-messi-of-barcelona-celebrates-scoring-his-fourth-goal-during-the-uefa-champions-league.jpg?s=612x612&w=0&k=20&c=tUv0YLFds73BihKXNG73fHdPVYhU1LY1a-soYrndps4=",
      likes: 2000000000,
      timestamp: "1d"
    },
    {
      user: "cristiano",
      postImage: "https://media.gettyimages.com/id/624403080/photo/cristiano-ronaldo-of-real-madrid-celebrate-after-scoring-reals-3rd-goal-during-the-la-liga.jpg?s=612x612&w=0&k=20&c=sJq7nlwWnb9OEzl6Muo5I36CtE6tX2HJ4ApzM6XFwWE=",
      likes: 2000000000,
      timestamp: "2d"
    },
    {
      user: "neymar",
      postImage: "https://media.gettyimages.com/id/499044076/photo/neymar-of-fc-barcelona-celebrates-with-his-teammates-luis-suarez-and-lionel-messi-of-fc.jpg?s=612x612&w=0&k=20&c=toPMZYwmMcYeyg2FEGxF61Jro-PpNAQYcTjOsfyzNZg=",
      likes: 340000,
      timestamp: "12h"
    },
    {
      user: "beckam",
      postImage: "https://media.gettyimages.com/id/1118241/photo/david-beckham-of-manchester-united-takes-a-trademark-free-kick-during-the-fa-barclaycard.jpg?s=612x612&w=0&k=20&c=qMPMYHUMQSlObvcWeDx_jSvGr-iYleuLkcWPYdpfEfw=",
      likes: 5600000,
      timestamp: "2d"
    },
    {
      user: "haaland",
      postImage: "https://media.gettyimages.com/id/1419009107/photo/erling-haaland-of-manchester-city-celebrates-his-hat-trick-during-the-premier-league-match.jpg?s=612x612&w=0&k=20&c=DiTpPiT1hY0_1zpAbVCbYt3dYKX9aKWHvNi4ZN9hI08=",
      likes: 20000,
      timestamp: "12h"
    },
    {
      user: "pedri",
      postImage: "https://media.gettyimages.com/id/1234716397/photo/pedri-of-fc-barcelona-during-the-la-liga-santander-match-between-fc-barcelona-v-real-sociedad.jpg?s=612x612&w=0&k=20&c=15onjo_ILuKYOkwNcgOE8d2RixWB3iVN3Zsntkrv7GQ=",
      likes: 2550000,
      timestamp: "7h"
    },
    {
      user: "ronaldinho",
      postImage: "https://media.gettyimages.com/id/56331566/photo/lionel-messi-and-ronaldinho-of-barcelona-celebrate-after-beating-villarreal-2-0-during-the.jpg?s=612x612&w=0&k=20&c=cazN1fptGTyHdDRAow070cHZnQeeheqGoapUMPpRquk=",
      likes: 134000,
      timestamp: "2d"
    },
    {
      user: "gavi",
      postImage: "https://media.gettyimages.com/id/1443932021/photo/gavi-of-spain-scores-their-teams-fifth-goal-during-the-fifa-world-cup-qatar-2022-group-e.jpg?s=612x612&w=0&k=20&c=1ccg3EL5V4gtBfrorjnNbbotMdCJq0MmKm5658_DkUQ=",
      likes: 16200000,
      timestamp: "2d"
    },
  ])

  return (
    <div className='timeline'>
      <div className='timeline_left'>
        <div className='timeline_post'>
          {post.map((post) => (
            <Post user={post.user} postImage={post.postImage} likes={post.likes} timespamp={post.timestamp} />
          ))}
        </div>
      </div>
      <div className='timeline_right'>
        <Suggestion />
      </div>

    </div>
  )
}

export default Timeline
