import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AzureFaceApiDataService } from './azure-face-api-data.service';

describe('AzureFaceApiDataService', () => {
  let service: AzureFaceApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AzureFaceApiDataService);

  })
    ;

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
