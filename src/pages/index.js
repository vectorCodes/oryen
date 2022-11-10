import { Box, Text, Stack, SimpleGrid } from "@chakra-ui/react";
import ConnectCard from "../components/ConnectCard";
import FixedApyCard from "../components/FixedApyCard";
import Footer from "../components/Footer";
import LiquidityCard from "../components/LiquidityCard";
import MarketCard from "../components/MarketCard";
import QuestionCard from "../components/QuestionCard";
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Stack spacing={4}>
        <Text textColor={"brand.300"} fontWeight="semibold" fontSize={"lg"}>
          Dashboard
        </Text>
        <Box>
          <MarketCard />
        </Box>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
          <LiquidityCard title="Liquidity" percent="-0.33%" price="1.61M" />
          <LiquidityCard title="Treasury" percent="-0.33%" price="8.34M" />
        </SimpleGrid>
        <Box>
          <FixedApyCard
            label="Fixed APY"
            percent="102 483.58%"
            description="A simple Buy-Hold-Earn System."
          />
        </Box>
        <Box>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
            <QuestionCard />
            <ConnectCard />
          </SimpleGrid>
        </Box>
      </Stack>
    </MainLayout>
  );
}
