// import Matches from '../../static/Matches.json'
import Match from '../../models/Match';
import connectDb from '../../utils/connectDb'

connectDb();

export default async (req, res) => {
   const Matches = await Match.find();
   res.status(200).json(Matches);
}