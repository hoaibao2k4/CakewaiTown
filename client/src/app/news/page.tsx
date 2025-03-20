import dynamic from "next/dynamic";

const Newsfeed = dynamic(() => import ("~/components/Newsfeed_tsx"));
export default function ListNewsFeed(){
  return(
    <div>
      <Newsfeed/>
    </div>
  )
}