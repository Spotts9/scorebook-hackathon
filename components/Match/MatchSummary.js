import {Item} from 'semantic-ui-react';

function MatchSummary({wrestler, opponent, result, takedowns, escapes, pointsFor, pointsAgainst, NF2, NF3, NF4,_id, fall, time}) {
return (
  <Item.Group>
    <Item>
      <Item.Content>
        <Item.Header>{wrestler} VS  {opponent}</Item.Header>
      </Item.Content>
    </Item>
  </Item.Group>
  
)
}

export default MatchSummary;
