import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTareasPage } from './add-tareas.page';

describe('AddTareasPage', () => {
  let component: AddTareasPage;
  let fixture: ComponentFixture<AddTareasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTareasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTareasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
