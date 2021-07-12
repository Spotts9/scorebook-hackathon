import {Card} from 'semantic-ui-react';

function MatchList({matches}) {
  function mapMatchesToItems(matches){

    return matches.map(match => ({
      header: match.wrestler,
      meta: match.result,
      description: `Match against ${match.opponent}`,
      color: 'blue',
      fluid: true,
      childKey: match._id,
      href: `/match?_id=${match._id}`
    }))
  }

  return <Card.Group itemsPerRow="3" centered stackable items={mapMatchesToItems(matches)}/>;
}

export default MatchList;
