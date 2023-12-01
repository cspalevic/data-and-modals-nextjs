import request, { gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import { client } from "./client";

const PROD_SPACEX_GQL_URL = "https://spacex-production.up.railway.app/";

const TEST = gql`
    query {
        launches {
            id
        }
    }
`

const GET_LAUNCHES = gql`
    query getLaunches($limit: Int, $offset: Int) {
        launches(limit: $limit, offset: $offset) {
            id
            mission_name
            details
        }
    }

`

export async function getLaunches(offset: number = 0, limit: number = 5) {
    try {
        const { launches } = await client.fetchQuery({
            staleTime: 0,
            queryKey: ["launches", offset, limit],
            queryFn: async () => {
                console.log("in request");
                return request(PROD_SPACEX_GQL_URL, GET_LAUNCHES, {
                    offset,
                    limit
                })
            }
        });
        return launches;
    } catch(error) {
        console.log(error);
        return null;
    }
}