import { memo } from "react";

export const SceneLights = memo(function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.42} color="#9db8ff" />
      <pointLight position={[0, 0.6, 2.2]} intensity={3.4} color="#63f2ff" distance={7} />
      <pointLight position={[-4, 2.2, -3]} intensity={1.6} color="#ff6ba8" distance={9} />
      <pointLight position={[4, -1, -2.8]} intensity={1.2} color="#ffd36b" distance={8} />
    </>
  );
});
