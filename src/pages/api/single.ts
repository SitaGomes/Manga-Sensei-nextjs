import { NextApiRequest, NextApiResponse } from "next"
import api from "services/api"


async function single(req: NextApiRequest, res: NextApiResponse) {

    const {mangaID} = req.body

    if (req.method === "POST") {
        
        try {

            const {data: response} = await api.get("/manga", {
                params: {
                    "ids[]": `${mangaID}`,
                    "includes[]": "cover_art"
                }
            })
            //@ts-ignore
            const {data} = response
        
            res.status(200).send(data)


        } catch (error) {
            res.send(error)
        }

    } else {
        res.status(405).end("Method not valid")
    }

}

export default single