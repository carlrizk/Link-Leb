import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Request } from '../models/request.model';
import { RequestDto, SubmitRequestDto } from '../../../../shared/dto/request.dto';
import { map, switchMap } from 'rxjs/operators';
import { NeedService } from './need.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private httpClient: HttpClient,
    private needService: NeedService
  ) { }

  submitRequest(request: SubmitRequestDto): Observable<void> {
    return this.httpClient.post<void>('api/requests/', request);
  }

  getRequests(): Observable<Request[]> {
    return this.needService.getNeedTypes().pipe(
      switchMap(_ => this.httpClient.get<RequestDto[]>('/api/requests/').pipe(
        map(dtos => dtos.map(dto => this.requestDto2Request(dto)))
      ))
    );
  }

  getRequest(id: string ): Observable<Request> {
    return this.needService.getNeedTypes().pipe(
      switchMap(_ => this.httpClient.get<RequestDto>('/api/requests/'+id).pipe(
        map(requestdtos => this.requestDto2Request(requestdtos))
      ))
    );
  
}

  requestDto2Request(dto: RequestDto): Request {
    return {
      id: dto.id,
      firstName: dto.firstName,
      lastName: dto.lastName,
      motherName: dto.motherName,
      fatherName: dto.fatherName,
      gender: dto.gender,
      dateOfBirth: dto.dateOfBirth,
      dateOfSubmit: new Date(dto.dateOfSubmit),
      telNumber: dto.telNumber,
      area: dto.area,
      needs: dto.needs.map(need => this.needService.needDto2Need(need))
    };
  }

}
