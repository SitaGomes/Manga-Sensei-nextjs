import { NextApiRequest, NextApiResponse } from "next"
import api from "services/api"

export default async function mostPopular(req: NextApiRequest, res: NextApiResponse) {

    const {data} = await api.get("/manga", {
        params: {
            "order[followedCount]": "desc",
            "includes[]": "cover_art"
        }
    })

    res.status(200).json({ 
        response: data
    })

}
