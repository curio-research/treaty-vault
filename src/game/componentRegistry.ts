import { ComponentDataTypes, ComponentType } from '../types/ecs';

// ------------------------------
// list of components
// ------------------------------

export const Tag = 'Tag';
export const Position = 'Position';
export const Owner = 'Owner';

export const COMPONENT_SPECS: ComponentType[] = [
  { name: Tag, valueType: ComponentDataTypes.STRING },
  { name: Position, valueType: ComponentDataTypes.POSITION },
  { name: Owner, valueType: ComponentDataTypes.NUMBER },
];
