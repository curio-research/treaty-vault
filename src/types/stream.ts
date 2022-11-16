export enum StreamEvents {
  ComponentValueSet = 'ComponentValueSet',
  ComponentValueRemoved = 'ComponentValueRemoved',
  EntityRemoved = 'EntityRemoved',
}

export interface StreamPacket {
  eventKey: StreamEvents;
  data: any;
}
