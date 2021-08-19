import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from "src/app/models/producto";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  productoForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _route: Router,
    private toastr: ToastrService
  ) { 
    this.productoForm = this._fb.group({
      nombre: ['', Validators.required],
      categoria: ['', Validators.required],
      presentacion: ['', Validators.required],
      precio: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){

   const PRODUCTO: Producto = {
    nombre: this.productoForm.get('nombre')?.value,
    presentacion: this.productoForm.get('presentacion')?.value,
    categoria: this.productoForm.get('categoria')?.value,
    precio: this.productoForm.get('precio')?.value
   }

   this.toastr.success('Maquillaje agregado correctamente!', 'Nuevo maquillaje!');
   console.log(PRODUCTO);
   this._route.navigate(['/producto/list'])
    
  }

}
