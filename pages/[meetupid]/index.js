import React from 'react'
import { MongoClient,ObjectId } from 'mongodb'
export default function index(props) {
  return (
    <div>
     <img src='https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg' alt=''></img>
     <h1>{props.meetupData.title}</h1>
     <address>{props.meetupData.address}</address>
     <p>{props.meetupData.description}</p>
    </div>
  )
}
export async function getStaticPaths() {
  const client = await MongoClient.connect('mongodb+srv://priyabanait91:0cJ79iInJejO14v5@meet-up-db.dloetcx.mongodb.net/?retryWrites=true&w=majority');
  const db = client.db();
  const meetupCollection = db.collection('meetup');
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
  client.close();
  
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupid: meetup._id.toString() }, // Make sure the parameter name matches your dynamic route file name.
    })),
  };
}
export async function getStaticProps(context) {
  const meetupId = new ObjectId(context.params.meetupId);
  const client = await MongoClient.connect('mongodb+srv://priyabanait91:0cJ79iInJejO14v5@meet-up-db.dloetcx.mongodb.net/?retryWrites=true&w=majority');
  const db = client.db();
  const meetupCollection = db.collection('meetup');
  const meetups = await meetupCollection.findOne({ _id: meetupId });
  client.close();
  if (!meetups) {
    return {
      notFound: true, // Return a 404 page or handle the "not found" case appropriately.
    };
  }

  return {
    props: {
      meetupData: {
        id: meetups._id.toString(),
        title: meetups.title,
        image: meetups.image,
        description: meetups.description,
        address: meetups.address,
      },
    },
  };
}






