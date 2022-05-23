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
    <Flex
      wrap="wrap"
      mt="20"
      justify="center"
      maxW="1000px"
      w="fit-content"
      mx="auto"
    >
      <Box mr={{ base: "2", md: "5" }} mb={{ base: "2", md: "5" }}>
        <TwitterTweetEmbed tweetId={"1494378905893220352"} />
      </Box>
      <Box mr={{ base: "2", md: "5" }} mb={{ base: "2", md: "5" }}>
        <TwitterTweetEmbed tweetId={"1495081007489630208"} />
      </Box>
      <Box mr={{ base: "2", md: "5" }} mb={{ base: "2", md: "5" }}>
        <TwitterTweetEmbed
          options={{
            conversation: "none",
          }}
          tweetId={"1477877141589135361"}
        />
      </Box>
      <Box mr={{ base: "2", md: "5" }} mb={{ base: "2", md: "5" }}>
        <TwitterTweetEmbed
          options={{
            conversation: "none",
          }}
          tweetId={"1517443830009630720"}
        />
      </Box>
      <Box mr={{ base: "2", md: "5" }} mb={{ base: "2", md: "5" }}>
        <TwitterTweetEmbed
          options={{
            conversation: "none",
          }}
          tweetId={"1514256480932818947"}
        />
      </Box>
      <Box mr={{ base: "2", md: "5" }} mb={{ base: "2", md: "5" }}>
        <TwitterTweetEmbed
          options={{
            conversation: "none",
          }}
          tweetId={"1463024383203577860"}
        />
      </Box>
      <Box mr={{ base: "2", md: "5" }} mb={{ base: "2", md: "5" }}>
        <TwitterTweetEmbed
          options={{
            conversation: "none",
          }}
          tweetId={"1462614747245805577"}
        />
      </Box>
      <Box mr={{ base: "2", md: "5" }} mb={{ base: "2", md: "5" }}>
        <TwitterTweetEmbed
          options={{
            conversation: "none",
          }}
          tweetId={"1479822382822944770"}
        />
      </Box>
      <Box mr={{ base: "2", md: "5" }} mb={{ base: "2", md: "5" }}>
        <TwitterTweetEmbed
          options={{
            conversation: "none",
          }}
          tweetId={"1483293647764598785"}
        />
      </Box>
      {/* <Box mr={{ base: "2", md: "5" }} mb={{ base: "2", md: "5" }}>
        <TwitterTweetEmbed
          options={{
            conversation: "none",
          }}
          tweetId={"1498257942537072640"}
        />
      </Box>
      <Box mr={{ base: "2", md: "5" }} mb={{ base: "2", md: "5" }}>
        <TwitterTweetEmbed
          options={{
            conversation: "none",
          }}
          tweetId={"1517521222518460416"}
        />
      </Box>
      <Box mr={{ base: "2", md: "5" }} mb={{ base: "2", md: "5" }}>
        <TwitterTweetEmbed
          options={{
            conversation: "none",
          }}
          tweetId={"1506703549740175362"}
        />
      </Box> */}
    </Flex>
  );
}
