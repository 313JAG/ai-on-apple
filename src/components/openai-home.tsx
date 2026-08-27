import { OpenAIV2Home } from "@/components/openai-v2/openai-v2-home";
import { getCommunityEvents } from "@/lib/luma/get-events";

export async function OpenAIHome() {
  const { events, error } = await getCommunityEvents();

  return <OpenAIV2Home events={events} error={error} />;
}
