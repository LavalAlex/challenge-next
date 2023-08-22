export interface TicketHistory {
  actionId: number;
  area: string;
  counter: number;
  createdBy: string;
  createdDate: string;
  dateAction: string;
  id: number;
  message: string;
  number: number;
  origin: string;
  thread: number;
  ticketId: number;
  type: string;
  updateDate: string;
}

interface ActionTicket {
  actionId: number;
  area: string;
  assigned: string;
  cloused: boolean;
  createdBy: string;
  createdDate: string;
  dateTicket: string;
  email: string;
  failure: string;
  histories: TicketHistory[];
  id: number;
  priority: string;
  ticketId: number;
  todo: string;
  updateDate: string;
}

export default ActionTicket;
