import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddEquipoPage } from './add-equipo.page';

describe('AddEquipoPage', () => {
  let component: AddEquipoPage;
  let fixture: ComponentFixture<AddEquipoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEquipoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddEquipoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
