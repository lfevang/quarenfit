import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestadorInserirComponent } from './prestador-inserir.component';

describe('PrestadorInserirComponent', () => {
  let component: PrestadorInserirComponent;
  let fixture: ComponentFixture<PrestadorInserirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestadorInserirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrestadorInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
