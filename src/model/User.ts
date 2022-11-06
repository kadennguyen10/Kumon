export class User {
  userId?: number | undefined;
  userName: string | undefined;
  dateTime: string | undefined;
  constructor(id: number, name: string, dateTime: string) {
    this.userId = id;
    this.userName = name;
    this.dateTime = dateTime;
  }
}
