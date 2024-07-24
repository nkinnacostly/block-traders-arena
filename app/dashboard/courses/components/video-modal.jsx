import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { SubmitCourse } from "../services/courses-service";
// import { SubmitCourse } from "../services/courses-service";
import YouTube from "react-youtube";
import { getYouTubeVideoId } from "@/utils/get-youtube-url";
import { useState } from "react";

export function WatchVideo({ children, data, setInProgress, inProgress }) {
  const match = getYouTubeVideoId(data?.path);
  const { onSubmit, completed } = SubmitCourse();
  // console.log(match);
  // console.log(data);
  const [showButton, setShowButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  let videoCode;
  if (match) {
    videoCode = match;
  }
  const checkElapsedTime = (e) => {
    console.log(e.target.playerInfo.playerState);
    const duration = e.target.getDuration();
    const currentTime = e.target.getCurrentTime();
    if (currentTime / duration > 0.95) {
      setShowButton(true);
      console.log("Yoloooo");
    }
  };
  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  const handleExerciseComplete = async () => {
    await completed(inProgress);
  };
  const handleVideoReady = async () => {
    setInProgress({
      ...inProgress,
      course_id: data?.id,
    });
    await onSubmit(inProgress);
    setIsLoading(false);
  };
  // console.log(inProgress, "In progress");
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className=" ">
        <DialogHeader>
          <DialogTitle>{data?.name}</DialogTitle>
          <DialogDescription>{data?.duration}</DialogDescription>
        </DialogHeader>
        <Separator />
        {isLoading && <Skeleton className="h-4 w-full" />}
        <div className="w-full flex items-center justify-center">
          <YouTube
            videoId={videoCode}
            containerClassName="w-full"
            onStateChange={(e) => checkElapsedTime(e)}
            opts={opts}
            onReady={handleVideoReady}
          />
        </div>
        <Separator />

        {showButton && (
          <DialogFooter>
            <DialogClose asChild>
              <Button size="sm" variant="ghost" type="button">
                Cancel
              </Button>
            </DialogClose>
            <Button size="sm" onClick={handleExerciseComplete}>
              Save
            </Button>
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  );
}
