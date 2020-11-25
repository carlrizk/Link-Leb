export class Request {
    static readonly Nil: Request = {
        id: '-',
        firstName: 'Placeholder',
        lastName: 'Request',
    };

    id: string;
    firstName: string;
    lastName: string;
}
