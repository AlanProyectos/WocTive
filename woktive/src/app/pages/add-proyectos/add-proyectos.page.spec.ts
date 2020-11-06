import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddProyectosPage } from './add-proyectos.page';

describe('AddProyectosPage', () => {
  let component: AddProyectosPage;
  let fixture: ComponentFixture<AddProyectosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProyectosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProyectosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
