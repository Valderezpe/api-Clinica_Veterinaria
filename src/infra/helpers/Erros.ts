export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "NotFoundError";
  }
}

export class BadRequesError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BadRequesError";
  }
}

export class BussinesError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BussinesError";
  }
}

export class UnauthorizedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnauthorizedError";
  }
}

export class UnprocessableEntityError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnprocessableEntityError";
  }
}
