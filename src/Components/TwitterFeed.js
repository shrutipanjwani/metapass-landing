import { Flex, Box } from "@chakra-ui/react";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

export default function TwitterFeed() {
  return (
    <Flex wrap="wrap" justify="center" maxW="1000px" w="fit-content" mx="auto">
      <Box mr="5" mb="5">
        <TwitterTweetEmbed tweetId={"1494378905893220352"} />
      </Box>
      <Box mr="5" mb="5">
        <TwitterTweetEmbed tweetId={"1495081007489630208"} />
      </Box>
    </Flex>
  );
}
