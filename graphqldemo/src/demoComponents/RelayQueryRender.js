import React from "react"
import { createFragmentContainer, graphql, QueryRenderer } from "react-relay"
import environment from "./lib/createRelayEnvironment"
import ArtistHeader from "./ArtistHeader"

// Below you can usually use one query renderer per page
// and it represents the root of a query
export default function ArtistRenderer({artistID}) {
  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query QueryRenderersArtistQuery($artistID: String!) {
          # The root field for the query
          artist(id: $artistID) {
            # A reference to your fragment container
            ...ArtistHeader_artist
          }
        }
      `}
      variables={{artistID}}
      render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>;
        } else if (props) {
          return <ArtistHeader artist={props.artist} />;
        }
        return <div>Loading</div>;
      }}
    />
  );
}
  