import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerifiedEmailPage } from './verified-email.page';

describe('VerifiedEmailPage', () => {
  let component: VerifiedEmailPage;
  let fixture: ComponentFixture<VerifiedEmailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifiedEmailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerifiedEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
