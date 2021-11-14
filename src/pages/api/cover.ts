import { NextApiRequest, NextApiResponse } from "next"
import api from "services/api"

async function bannerArt (req: NextApiRequest, res: NextApiResponse) {

    try {
        
        const {data} = await api.get("cover")
    
        res.status(200).json({
            response: data
        })
    } catch(err) {
        res.status(500).json({errorCode: err})
    }
}

export default bannerArt