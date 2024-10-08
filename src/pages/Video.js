import { useDispatch, useSelector } from "react-redux";
import VideoPlayer from "../components/description/Player";
import VideoDescription from "../components/description/VideoDescription";
import RelatedVideoList from "../components/list/RelatedVideoList";
import { useEffect } from "react";
import { fetchVideo } from "../features/video/videoSlice";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";

export default function Video() {
  const dispatch = useDispatch();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.video
  );
  const { videoId } = useParams();

  useEffect(() => {
    dispatch(fetchVideo(videoId));
  }, [dispatch, videoId]);

  const { id, tags, link, title } = video || {};

  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isLoading && !isError && !video?.id) {
    content = <div className="col-span-12">{error}</div>;
  }

  if (!isLoading && !isError && video?.id) {
    content = (
      <div class="col-span-full w-full space-y-8 lg:col-span-2">
        <VideoPlayer link={link} title={title} />
        <VideoDescription video={video} />
      </div>
    );
  }

  return (
    <section class="pt-6 pb-20">
      <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div class="grid grid-cols-3 gap-2 lg:gap-8">
          {content}

          <RelatedVideoList currentVideoId={id} tags={tags} />
        </div>
      </div>
    </section>
  );
}
