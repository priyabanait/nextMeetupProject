import React from 'react'
import MeetupList from '@/components/meetups/MeetupList'
import { useEffect } from 'react'
import { MongoClient } from 'mongodb'
import { useState } from 'react'

import Head from 'next/head'
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
    <Head>
    <title>React meetups</title>
    <meta name='description' content='Brows a huge list of highly active react meetups!'></meta>
    </Head>
      <MeetupList meetups={props.meetup}></MeetupList>
      
    </div>
  )
  
}
export async function getStaticProps(){

  const client=await MongoClient.connect('mongodb+srv://priyabanait91:0cJ79iInJejO14v5@meet-up-db.dloetcx.mongodb.net/?retryWrites=true&w=majority');
  const db=client.db();
  const meetupCollection=db.collection('meetup');
  const meetups= await meetupCollection.find().toArray();
   client.close();
  return{
    props:{
      meetup:meetups.map(meetup=>({
        title:meetup.title,
        address:meetup.address,
        image:meetup.image,
        id:meetup._id.toString()
      }))
    } 
  }
   
}