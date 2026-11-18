// Fortune Aggregates and Sands — Materials Catalog Data
// ALL values are DRAFT, general trade knowledge, no test numbers.

import { UseId } from "./uses";

export interface Material {
  slug: string;
  name: string;
  size: string;
  type: string;
  uses: UseId[];
  description: string;
  features: string[];
  image: string; // PLACEHOLDER
  icon: "Layers" | "Building2" | "BrickWall" | "LayoutGrid" | "Route";
}

export const materials: Material[] = [
  {
    slug: "40mm-blue-metal",
    name: "40mm blue metal",
    size: "40mm",
    type: "Coarse aggregate",
    uses: ["foundation"],
    description: "Large crushed stone for heavy, bulky concrete.",
    features: [
      "Angular crushed shape for strong interlock",
      "Suited to mass and plain concrete",
      "Graded, with no clay or dust coating", // CONFIRM
    ],
    image: "/images/materials/jagged-granite-aggregate-40mm.png", // Jagged Granite Aggregate Close-Up
    icon: "Layers",
  },
  {
    slug: "20mm-blue-metal",
    name: "20mm blue metal",
    size: "20mm",
    type: "Coarse aggregate",
    uses: ["slab-rcc"],
    description: "The everyday structural grade for reinforced concrete.",
    features: [
      "Angular crushed shape for strong interlock",
      "Fits between reinforcement bars",
      "Consistent grading, load after load",
    ],
    image: "/images/materials/jagged-granite-gravel-20mm.png", // Jagged Granite Gravel Texture
    icon: "Building2",
  },
  {
    slug: "12mm-aggregate",
    name: "12mm aggregate",
    size: "12mm",
    type: "Coarse aggregate",
    uses: ["slab-rcc", "roads"],
    description: "A finer coarse grade for thin sections and fine finishes.",
    features: [
      "Suited to thin slabs, lintels and precast",
      "Smoother, tighter concrete finish",
      "Graded and screened in-house",
    ],
    image: "/images/materials/angular-granite-gravel-12mm.png", // Angular Granite Gravel Texture
    icon: "Building2",
  },
  {
    slug: "6mm-chips",
    name: "6mm chips",
    size: "6mm",
    type: "Fine chips",
    uses: ["blocks-paving", "roads"],
    description: "Small chips for blocks, flooring and surfacing.",
    features: [
      "Uniform small size",
      "Suited to paver and hollow blocks",
      "Clean and screened",
    ],
    image: "/images/materials/detailed-gray-gravel-6mm.png", // Detailed Gray Gravel Texture
    icon: "LayoutGrid",
  },
  {
    slug: "stone-dust",
    name: "Stone dust",
    size: "0 to 4mm",
    type: "Crusher fines",
    uses: ["blocks-paving"],
    description: "Fine crushed fines for blocks, bedding and filling.",
    features: [
      "Good for block making",
      "Compacts well for paver bedding",
      "Suited to levelling and filling",
    ],
    image: "/images/materials/coarse-gray-aggregate-stone-dust.png", // Coarse Gray Aggregate Texture
    icon: "LayoutGrid",
  },
  {
    slug: "manufactured-sand",
    name: "Manufactured sand",
    size: "0 to 4.75mm",
    type: "Fine aggregate",
    uses: ["masonry-plaster", "slab-rcc"],
    description: "Washed, graded sand made from crushed rock.",
    features: [
      "Washed and graded",
      "Consistent supply, not tied to river sand",
      "Suited to concrete and masonry",
    ],
    image: "/images/materials/macro-crushed-aggregate-msand.png", // Macro Texture of Crushed Aggregate
    icon: "BrickWall",
  },
  {
    slug: "plastering-sand",
    name: "Plastering sand",
    size: "fine",
    type: "Fine aggregate",
    uses: ["masonry-plaster"],
    description: "A finer grade for smooth plaster finishes.",
    features: [
      "Fine, even grading",
      "Smooth, workable mix",
      "Suited to internal and external plaster", // CONFIRM it is stocked
    ],
    image: "/images/materials/fine-beige-sand-plastering.png", // Fine Beige Sand Texture
    icon: "BrickWall",
  },
  {
    slug: "gsb",
    name: "GSB",
    size: "graded mix",
    type: "Sub-base",
    uses: ["roads", "foundation"],
    description: "Graded sub-base for roads and ground preparation.",
    features: [
      "Graded mix of stone and fines",
      "Compacts to a firm base",
      "Suited to roads and slab sub-bases", // CONFIRM
    ],
    image: "/images/materials/crushed-granite-gravel-gsb.png", // Crushed Granite Gravel Texture
    icon: "Route",
  },
];
