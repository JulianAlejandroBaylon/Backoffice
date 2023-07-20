import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {
  @ViewChild('fileInput', { static: false })
  fileInput!: ElementRef;

  openFileExplorer() {
    // Simular un clic en el elemento de entrada de archivo
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    // Obtener los archivos seleccionados
    const files: FileList = event.target.files;

    // Hacer algo con los archivos seleccionados
    // Por ejemplo, puedes acceder a la información de los archivos utilizando files[0], files[1], etc.
    console.log(files);
  }
}
