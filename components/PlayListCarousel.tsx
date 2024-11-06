import { Playlist } from "@/app/types";

interface PlayListCarouselProps {
    title: string;
    subtitle?: string;
    Thumnail?: React.ReactNode;
    playlistArray?: Playlist[];
}

const PlayListCarousel: React.FC<PlayListCarouselProps> = ({
    title,
    subtitle,
    Thumnail,
    playlistArray,}) => {
  return (
    <div>
        {title}
        {subtitle}
        {Thumnail}
        {JSON.stringify(playlistArray)}
    </div>
  )
}

export default PlayListCarousel