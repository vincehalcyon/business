import ParentBlock from "@/components/page/ParentBlock";
import { props } from "@/lib/props/page";
export const getStaticProps = props;
export default function Homepage({ page, blocks }) {
  return ('');
  // return <ParentBlock page={page} blocks={blocks} />;
}
// import HomeBanner from "@/components/blocks/HomeBanner";
// import HomeServices from "@/components/blocks/HomeServices";
// import HomeWelcome from "@/components/blocks/HomeWelcome";
// import HomeWhatsnew from "@/components/blocks/HomeWhatsnew";
// import HomeWhyus from "@/components/blocks/HomeWhyus";
// import TestComponent1 from "@/components/blocks/TestComponent1";
// import TestComponent2 from "@/components/blocks/TestComponent2";

// export default function Homepage() {
//   return (
//     <>
//       <HomeBanner />
//       <HomeWelcome />
//       <HomeServices />
//       <HomeWhyus />
//       <HomeWhatsnew />
//     </>
//   );
// }