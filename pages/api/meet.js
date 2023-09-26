import React from 'react'
import { MongoClient } from 'mongodb';
 export default async function meet(req,res) {
 if(req.method=='POST'){
    const data=req.body;
    
    const client=await MongoClient.connect('mongodb+srv://priyabanait91:0cJ79iInJejO14v5@meet-up-db.dloetcx.mongodb.net/?retryWrites=true&w=majority');
    const db=client.db();
    const meetupCollection=db.collection('meetup');
    const result=await meetupCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({message:'meetup inserted!'})
 }
}
