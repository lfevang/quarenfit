import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaInserirComponent } from './pessoa-inserir.component';

describe('PessoaInserirComponent', () => {
  let component: PessoaInserirComponent;
  let fixture: ComponentFixture<PessoaInserirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PessoaInserirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaInserirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
