import axios from 'axios';
import React from 'react';
import baseUrl from '../utils/baseUrl';
import catchErrors from '../utils/catchErrors';
import {Form, Input, TextArea, Button, Image, Message, Header, Icon, Radio, Dropdown} from 'semantic-ui-react';

const INITIAL_MATCH={
  wrestler:"",
  opponent:"",
  result:"",
  pointsFor:0,
  pointsAgainst:0,
  takedowns: 0,
  escapes: 0,
  NF2: 0,
  NF3: 0,
  NF4: 0,
  fall: false,
  time: "0:00"
}

const resultOptions = [
  { key: 'W', value: 'W', text: 'Win' },
  { key: 'L', value: 'L', text: 'Loss' },
]

function CreateMatch() {
  const [match, setMatch] = React.useState({INITIAL_MATCH});
  const[success, setSuccess] = React.useState(false);
  const[loading, setLoading] = React.useState(false);
  const[error, setError] = React.useState("");

  function handleChange(event){
    const {name, value} = event.target;
    setMatch(prevState => ({...prevState, [name]: value}));
  };

  async function handleSubmit(event){
  try{
   event.preventDefault();
   setLoading(true);
   console.log("This is the match :" + match);
   const {wrestler, opponent, result, pointsFor, pointsAgainst, takedowns, escapes, NF2, NF3, NF4, fall} = match;
   console.log("Value of Result:  " + result);
   const payload = {wrestler, opponent, result, pointsFor, pointsAgainst, takedowns, escapes, NF2, NF3, NF4, fall};
   const url = `${baseUrl}/api/match`
   const response = await axios.post(url, payload);

   console.log({response});
   setMatch(INITIAL_MATCH);
   setSuccess(true);
  } catch(error){
    catchErrors(error, setError);
  } finally{
    setLoading(false);
  }

  };

  return (
    <>
      <Header as="h2" block>
        <Icon name="add" color="orange"/>
        Create New Match
      </Header>
      <Form loading={loading} error={Boolean(error)} success={success} onSubmit={handleSubmit}>
        <Message
          error
          header="Oops!"
          content={error}
        />
        <Message success
          icon="check"
          header="Success!"
          content="Your match has been posted"
        />
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="wrestler"
            label="Wrestler"
            placeholder="Wrestler Name"
            value={match.wrestler}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            name="opponent"
            label="Opponent"
            placeholder="Opponent Name"
            value={match.opponent}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            name="result"
            label="Result"
            placeholder='W or L'
            value={match.result}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="pointsFor"
            label="Points For"
            placeholder="0"
            min="0"
            step="1"
            type="number"
            value={match.pointsFor}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            name="pointsAgainst"
            label="Points Against"
            placeholder="0"
            min="0"
            step="1"
            type="number"
            value={match.pointsAgainst}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            name="takedowns"
            label="Number of Takedowns"
            placeholder="0"
            min="0"
            step="1"
            type="number"
            value={match.takedowns}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            name="escapes"
            label="Number of Escapes"
            placeholder="0"
            min="0"
            step="1"
            type="number"
            value={match.escapes}
            onChange={handleChange}
          />
          </Form.Group>
          <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="NF2"
            label="Number of 2PT Near Fall"
            placeholder="0"
            min="0"
            step="1"
            type="number"
            value={match.NF2}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            name="NF3"
            label="Number of 3PT Near Fall"
            placeholder="0"
            min="0"
            step="1"
            type="number"
            value={match.NF3}
            onChange={handleChange}
          />
          <Form.Field
            control={Input}
            name="NF4"
            label="Number of 4PT Near Fall"
            placeholder="0"
            min="0"
            step="1"
            type="number"
            value={match.NF4}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Field
            control={Radio}
            toggle
            name="fall"
            label="Fall"
            value={match.fall}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Field
          control={Button}
          color="blue"
          icon="pencil alternate"
          content="Submit"
          type="submit"
        />
      </Form>
    </>
  )
}

export default CreateMatch;
