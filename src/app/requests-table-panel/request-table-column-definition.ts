import { Request } from '../common/models/request.model';
import { DynamicComponentInput } from '../dynamic-component/dynamic-component';

export interface RequestTableColumnDefinition {
    name: string;
    cellComponent: (request: Request) => DynamicComponentInput;
}
