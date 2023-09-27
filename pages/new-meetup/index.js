import React from 'react';
import NewMeetupForm from '@/components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import Head from 'next/head';
export default function NewMeetup() {

  const router=useRouter();
  async function meetupHandler(meetupData) {
    try {
      const res = await fetch('/api/meet', {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        throw new Error('Meetup creation failed.');
      }

      const data = await res.json();
      console.log(data);
      router.push('/');
    } catch (error) {
      console.error(error);
      
    }
  }

  return (
    <div>
     <Head>
    <title>New meetup</title>
    <meta name='description' content='Add your own meetups!'></meta>
    </Head>
      <NewMeetupForm onAddMeetup={meetupHandler} />
    </div>
  );
}
