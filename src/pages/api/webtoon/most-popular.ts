import { NextApiRequest, NextApiResponse } from "next"
import api from "services/api"


async function mostPopular(req: NextApiRequest, res: NextApiResponse) {

    const {data} = await api.get("/manga", {
        params: {
            "order[followedCount]": "desc",
            "includes[]": "cover_art",
            "includedTags[]": "e197df38-d0e7-43b5-9b09-2842d0c326dd",
        }
    })

    res.status(200).json({ 
        response: data
    })

}

export default mostPopular