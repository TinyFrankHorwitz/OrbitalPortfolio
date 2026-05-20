import type { CSSProperties } from "react";
import { orbitNodes } from "@/data/orbitNodes";

export function CssOrbitFallback() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center" aria-hidden="true">
      <div className="css-orbit-system">
        <div className="css-core" />
        {orbitNodes.map((node, index) => (
          <div
            key={node.id}
            className={`css-orbit css-orbit-${index + 1}`}
            style={{ "--node-color": node.color } as CSSProperties}
          >
            <div className="css-orbit-node" />
          </div>
        ))}
      </div>
    </div>
  );
}
