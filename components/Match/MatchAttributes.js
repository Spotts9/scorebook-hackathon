import React from 'react';
import {Header, Button, Modal, Dimmer, ModalHeader, Form, Input, Message, Image, Icon, Radio} from 'semantic-ui-react';
import axios from 'axios';
import baseUrl from '../../utils/baseUrl';
import catchErrors from '../../utils/catchErrors';
import {useRouter} from 'next/router';

function MatchAttributes({wrestler, opponent, result, takedowns, escapes, pointsFor, pointsAgainst, NF2, NF3, NF4, fall, time, _id}) {
  const INITIAL_MATCH={
    wrestler:wrestler,
    opponent:opponent,
    result:result,
    pointsFor:pointsFor,
    pointsAgainst:pointsAgainst,
    takedowns: takedowns,
    escapes: escapes,
    NF2: NF2,
    NF3: NF3,
    NF4: NF4,
    fall: fall,
    time: "0:00"
  }
  const [modal, setModal] = React.useState(false);
  const [match, setMatch] = React.useState(INITIAL_MATCH);
  const[success, setSuccess] = React.useState(false);
  const[loading, setLoading] = React.useState(false);
  const[error, setError] = React.useState("");
  const router = useRouter();
  
  async function handleDelete(){
    const url = `${baseUrl}/api/match`;
    const payload = { params: {_id }};
    await axios.delete(url, payload);
    router.push('/');
  }

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
   const payload = {_id, wrestler, opponent, result, pointsFor, pointsAgainst, takedowns, escapes, NF2, NF3, NF4, fall};
   const url = `${baseUrl}/api/match`
   const response = await axios.patch(url, payload);

   console.log({response});
   setMatch(INITIAL_MATCH);
   setSuccess(true);
  } catch(error){
    catchErrors(error, setError);
  } finally{
    setLoading(false);
  }

  };

  return <>
    <Header as="h3">Match Details:</Header>
    <Form loading={loading} error={Boolean(error)} success={success} onSubmit={handleSubmit}>
        <Message
          error
          header="Oops!"
          content={error}
        />
        <Message success
          icon="check"
          header="Success!"
          content="Your match has been updated"
        />
        <Form.Group widths="equal">
          <Form.Field
            control={Input}
            name="wrestler"
            label="Wrestler"
            placeholder="Wrestler Name"
            value={match.wrestler}
            disabled
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
        <Form.Group>
        <Form.Field
          control={Button}
          color="orange"
          icon="pencil alternate"
          content="Update"
          type="submit"
        />
        <Form.Field
          control={Button}
          color="red"
          icon="trash alternate outline"
          content="Delete Match"
          onClick={()=> setModal(true)}
        />
        </Form.Group>
      </Form>

    <Modal open={modal} dimmer="blurring">
      <Modal.Header>Confirm Delete</Modal.Header>
      <Modal.Content>
        <p>Are you sure you want to delete this Match?</p>
      </Modal.Content>
      <Modal.Actions>
        <Button 
        onClick={() => setModal(false)}
        content="Cancel"/>
        <Button 
          negative
          icon="trash"
          labelPosition="right"
          content="Delete"
          onClick={handleDelete}
        />
      </Modal.Actions>

    </Modal>
  </>;
}

export default MatchAttributes;
