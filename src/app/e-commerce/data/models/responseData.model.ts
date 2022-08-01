export interface RespData {
  success: boolean;
  message: string;
  data: {
    email: string,
    firstName?: string,
    lastName?: string,
    password?: string,
    id?: string,
    token?: string,
    userName?: string,
  }
}
