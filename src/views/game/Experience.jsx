import { OrbitControls } from "@react-three/drei";
import { Physics, Debug } from "@react-three/rapier";
import { Levels } from "./Levels.jsx";
import Lights from "./Lights.jsx";
import Player from "./Player.jsx";
import useGame from "../../stores/useGame.jsx";
import Effects from "./Effects.jsx";

export default function Experience() {
  const blocksCount = useGame((state) => state.blocksCount);
  const blocksSeed = useGame((state) => state.blocksSeed);

  console.log("blocksCount", blocksCount);
  console.log("blocksSeed", blocksSeed);
  return (
    <>
      <color args={["#bdedfc"]} attach="background" />
      <OrbitControls makeDefault />
      <Physics>
        {/*<Debug />*/}
        <Lights />
        <Levels count={blocksCount} seed={blocksSeed} />
        <Player />
      </Physics>
      {/* <Effects /> */}
    </>
  );
}
