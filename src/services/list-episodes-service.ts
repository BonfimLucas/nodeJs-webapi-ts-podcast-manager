import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repositoryPodcast } from "../repository/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    }
    
    const data = await repositoryPodcast()


    responseFormat = {
        statusCode: responseFormat.statusCode = data.length !== 0 ? StatusCode.Ok : StatusCode.NoContent,
        body: responseFormat.body = data
    }

    return responseFormat;
}