const { events } = require("./data.json");

/**
 * ? @comment: if you dont check for the http method, it will always return the json object no matter what request you make
 * ?           Therefore make sure you specify for the serverless functions what method you are expecting
 */
export default (req, res) => {
  if (req.method === "GET") {
    res.status(200).json(events);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not Allowed` });
  }
};
