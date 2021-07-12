import Match from '../../models/Match';

export default async (req, res) => {
    switch(req.method) {
        case "GET":
            await handleGetRequest(req, res);
            break;
        case "POST":
            await handlePostRequest(req, res);
            break;
        case "PATCH":
            await handlePatchRequest(req, res);
            break;
        case "DELETE":
            await handleDeleteRequest(req, res);
            break;
        default:
            res.status(405).send(`Method ${req.method} not allowed`);
            break;
    }
}

async function handlePostRequest(req, res){
    const{wrestler, opponent, result, pointsFor, pointsAgainst, takedowns, escapes, NF2, NF3, NF4, fall} = req.body;
    try{
        const match = await new Match({
            wrestler, 
            opponent,
            result,
            pointsFor,
            pointsAgainst,
            takedowns,
            escapes,
            NF2,
            NF3,
            NF4,
            fall
        }).save();

        return res.status(201).json(match);
    } catch(error){
        console.error(error);
        res.status(500).send("Server error in creating Match");
    }
}

async function handlePatchRequest(req, res) {
    const{_id, wrestler, opponent, result, pointsFor, pointsAgainst, takedowns, escapes, NF2, NF3, NF4, fall} = req.body;
    console.log(_id);
    const match = await Match.findByIdAndUpdate({_id}, req.body);
    return res.status(200).json(match);
}

async function handleGetRequest(req, res) {
    const {_id} = req.query;
    const match = await Match.findOne({_id });
    res.status(200).json(match);
}

async function handleDeleteRequest(req, res) {
    const {_id} = req.query;
    await Match.findOneAndDelete({_id });
    res.status(204).json({});
}