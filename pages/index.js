import React from 'react'
import MeetupList from '@/components/meetups/MeetupList'
const DUMMY_MEETUP=[
  {
    id:'1',
    title:'A First meetup',
    image:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
   address:'Some address 53,1123 some city',
   description:'This is the first meetup'
  },
  {
    id:'2',
    title:'A Second meetup',
    image:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
   address:'Some address w2,656 some city',
   description:'This is the second meetup'
  }
]
export default function HomePage() {

  return (
    <div>
      <MeetupList meetups={DUMMY_MEETUP}></MeetupList>
    </div>
  )
}
