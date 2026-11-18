// Fortune Aggregates and Sands — Material Use Cases
// Filter categories for the interactive materials section.

export type UseId =
  | "all"
  | "foundation"
  | "slab-rcc"
  | "masonry-plaster"
  | "blocks-paving"
  | "roads";

export interface UseCase {
  id: UseId;
  label: string;
  icon: "Layers" | "Building2" | "BrickWall" | "LayoutGrid" | "Route";
}

export const useCases: UseCase[] = [
  { id: "all", label: "All", icon: "Layers" },
  { id: "foundation", label: "Foundation", icon: "Layers" },
  { id: "slab-rcc", label: "Slab & RCC", icon: "Building2" },
  { id: "masonry-plaster", label: "Masonry & plaster", icon: "BrickWall" },
  { id: "blocks-paving", label: "Blocks & paving", icon: "LayoutGrid" },
  { id: "roads", label: "Roads", icon: "Route" },
];
