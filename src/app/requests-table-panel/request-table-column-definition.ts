import { Request } from '../common/models/request.model';

export interface RequestTableColumnDefinition {
    name: string;
    evaluation: (request: Request) => string;
}
