import React from 'react'
import MeetupList from '@/components/meetups/MeetupList'
import { useEffect } from 'react'
import { useState } from 'react'
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
  },
  {
    id:'3',
    title:'A Third meetup',
    image:'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
   address:'Some address w2,656 some city',
   description:'This is the Third meetup'
  }
]
export default function HomePage(props) {
  const [meetup,setMeetup]=useState([]);
  useEffect(()=>{
    setMeetup(DUMMY_MEETUP);
  },[])
  return (
    <div>
      <MeetupList meetups={props.meetup}></MeetupList>
    </div>
  )
  
}
export async function getStaticProps(){
  return{
    props:{
      meetup:DUMMY_MEETUP
    } 
  }
   
}