type AllType = {
  name: string;
  position: number;
  color: string;
  weight: string;
};

function compare<T extends keyof AllType>(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

export default compare;
