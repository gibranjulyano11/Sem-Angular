import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Igifts } from 'src/app/interfaces/igifts';
import { GiftsService } from 'src/app/services/gifts.service';

@Component({
  selector: 'app-gifts-gallery',
  templateUrl: './gifts-gallery.component.html',
  styleUrls: ['./gifts-gallery.component.css']
})
export class GiftsGalleryComponent implements OnInit {
  regex: string = '(http(s?):)|([/|.|w|s])*.(?:jpg|gif|png)';
  myForm: FormGroup = this.fb.group({
    gifts: [, [Validators.required, Validators.pattern(this.regex)]],
  });

  giftsList: Igifts[] = [];

  constructor(private readonly fb: FormBuilder, private readonly giftService: GiftsService) { }

  ngOnInit(): void {
    this.giftService.getGifts().subscribe((data: any) => {
      console.log(data);
      this.giftsList = [...this.giftsList, ...data];
    });
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      console.log('Algo salió mal! Existe un error en el formulario');
      return;
    }
    const giftsAux: Igifts = {
      url: this.myForm.value.gif,
      author_id: 2002,
    };

    console.log(giftsAux);

    this.giftService.createGifts(giftsAux).subscribe(
      (data) => {
        this.myForm.reset();
        console.log(data);
      },
      (error) => {
        console.log(error.message);
      }
    );
  }

  deleteGifts(gifts: Igifts) {
    this.giftService.deleteGifts(gifts).subscribe(
      (data: any) => {
        console.log(data);
        this.giftsList = this.giftsList.filter((gifts) => gifts.id !== data.id);
      },
      (error) => {
        alert('Algo salió mal! El Gift no pudo ser eliminado');
      }
    );
  }

  campoValido(campo: string) {
    return (
      this.myForm.controls[campo].errors &&
      this.myForm.controls[campo].touched 
    );
  }

}
