"use client";

import { create } from "zustand";

type SceneState = {
  hoveredNodeId: string | null;
  transitioningNodeId: string | null;
  setHoveredNodeId: (nodeId: string | null) => void;
  setTransitioningNodeId: (nodeId: string | null) => void;
};

export const useSceneStore = create<SceneState>((set) => ({
  hoveredNodeId: null,
  transitioningNodeId: null,
  setHoveredNodeId: (nodeId) => set({ hoveredNodeId: nodeId }),
  setTransitioningNodeId: (nodeId) => set({ transitioningNodeId: nodeId }),
}));
