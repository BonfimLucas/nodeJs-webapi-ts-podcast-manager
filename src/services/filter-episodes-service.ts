import { repositoryPodcast } from "../repository/podcasts-repository"
import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise<PodcastTransferModel> => {

    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    };

    const queryString = podcastName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);
    
    responseFormat.statusCode = data.length !== 0 ? StatusCode.Ok : StatusCode.NoContent
    
    responseFormat.body = data

    return responseFormat;
};