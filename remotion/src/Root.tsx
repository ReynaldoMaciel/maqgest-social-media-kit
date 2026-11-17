import { Composition } from "remotion";
import { Post02Reels, POST02_DURATION } from "./post02/Post02Reels";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="Post02Reels"
        component={Post02Reels}
        durationInFrames={POST02_DURATION}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
