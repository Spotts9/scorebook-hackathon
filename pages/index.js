import React from 'react'
import axios from 'axios'

import MatchList from '../components/Index/MatchList';
import baseUrl from '../utils/baseUrl';


function Home({matches}) {
    return <MatchList matches={matches} />;
}

async function getMatches(){
  const url = `${baseUrl}/api/matches`;
  const response = await axios.get(url);
  console.log(response.data);
}

Home.getInitialProps = async ()=>{
  //fetch data on server
  // return response data as an object
  const url = `${baseUrl}/api/matches`;
  const response = await axios.get(url);
  return {matches: response.data};
  //note:  this object will be merged with existing props
}
export default Home;
