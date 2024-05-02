import { Appointment } from "./appointment";

export interface User {
  userId: number;
  fullName: string;
  username: string;
  password: string;
  address: string;
  email: string;
  phone: string;
  isAdmin: boolean;
  // appointments: Appointment[]; // one to many relationship embedding
}
