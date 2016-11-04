/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GestorTareasService } from './gestor-tareas.service';

describe('Service: GestorTareas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GestorTareasService]
    });
  });

  it('should ...', inject([GestorTareasService], (service: GestorTareasService) => {
    expect(service).toBeTruthy();
  }));
});
