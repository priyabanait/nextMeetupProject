import React from 'react'
import NewMeetupForm from '@/components/meetups/NewMeetupForm'
export default function newMeetup() {
  function meetupHandler(meetupData){
console.log(meetupData);
  }
  return (
    <div>
     <NewMeetupForm onAddMeetup={meetupHandler}></NewMeetupForm>
    </div>
  )
}

