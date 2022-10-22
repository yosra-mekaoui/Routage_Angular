import { Component, OnInit ,Input,Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
invoice:any;
invoiceid:any;

@Input() list!:any;
@Input() montantRemise!:any;
ob!: any;
bool!:boolean;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
this.bool=false;
    this.route.queryParams
    
    .subscribe(params => {
       
this.ob=params;
       
   console.log(this.ob)
    }
  );
}
navigate(){
  this.router.navigate(['invoice'])
}
  }

 
