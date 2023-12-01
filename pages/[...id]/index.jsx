import NewsDetailPage from "@/components/page/NewsDetailPage";
import ParentBlock from "@/components/page/ParentBlock";
import ServicesDetailPage from "@/components/page/ServicesDetailPage";
import { paths, props } from "@/lib/props/page";
export const getStaticPaths = paths;
export const getStaticProps = props;

export default function DynamicPage({ page, blocks }) {

  if (page?.route_url.includes("news") && page?.type === "contentEntries") {
    return <NewsDetailPage page={page} />;
  } else if (page?.route_url.includes("services") && page?.type === "contentEntries")  {
    return <ServicesDetailPage page={page} />;
  } else {
    return <ParentBlock page={page} blocks={blocks} />;
  }
  
}
