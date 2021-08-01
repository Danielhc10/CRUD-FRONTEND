import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productoForm: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) { 
    this.productoForm = this._fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      presentacion: ['', Validators.required],
      precio: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.productoForm);
    
  }

}
