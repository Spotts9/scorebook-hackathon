import axios from 'axios';
import MatchSummary from '../components/Match/MatchSummary';
import MatchAttributes from '../components/Match/MatchAttributes';
import baseUrl from '../utils/baseUrl';

function Match( {match }) {
  return (<>
    <MatchSummary {...match} />
    <MatchAttributes {...match} />
  </>
  )
}

Match.getInitialProps = async ({query: {_id}}) =>{
  //fetch data on server
  // return response data as an object
  const url = `${baseUrl}/api/match`;
  const payload = {params: {_id}};
  const response = await axios.get(url, payload);
  return {match: response.data};
  //note:  this object will be merged with existing props
};
export default Match;
