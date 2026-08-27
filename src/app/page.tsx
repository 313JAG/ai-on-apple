import { ClaudeHome } from "@/components/claude-home";
import { DesignComparison } from "@/components/design-comparison";
import { OpenAIHome } from "@/components/openai-home";

export const revalidate = 1800;

type HomeProps = {
  searchParams: Promise<{ design?: string | string[] }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const initialDesign = params.design === "claude" ? "claude" : "openai";

  return (
    <DesignComparison
      initialDesign={initialDesign}
      openAI={<OpenAIHome />}
      claude={<ClaudeHome />}
    />
  );
}
