import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { MembersService } from './members.service';

describe('MembersService', () => {
  let service: MembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
