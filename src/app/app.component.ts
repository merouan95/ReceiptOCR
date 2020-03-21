import { Component } from '@angular/core';
import { createWorker } from 'tesseract.js';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo test du OCR';
  ocrResult = 'Intérprétation de l image va s afficher en quelque moment, veuillez attendre...';
  montant= [];
  date= [];
   show:boolean = false;
   buttonName:any = 'Show';
   selectedFile: File;
  constructor(private spinner: NgxSpinnerService) {
     
  }

  //fct dial spinner
  /* showSpinner() {
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
    }, 8000);
  }  */

  //OCR
  async doOCR(hihi) {
    const worker = createWorker({
      logger: m => console.log(m),
    });
    this.spinner.show();
    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');
    const { data: { text } } = await worker.recognize(hihi);
    this.ocrResult = text;
    var d= text.match(/([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})/g);
    var m=text.match(/[0-9]+(\.|,)+([0-9]+)*/g) ;
    this.date = d;
    this.montant = m;
    //console.log("le montant",/1.55/i.exec(text));
    console.log("hhahah",d);
    //console.log(text);
    // [0-9]+(\.|,)+([0-9]+)*
    //console.log("la date est :",/([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})/g.exec(text));
    console.log("la date est : ",text.match(/([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})/g) );
    //console.log("le montant match ",text.match(/\d[\d\,\.]+/g) );
    console.log("le montant est : ",text.match(/[0-9]+(\.|,)+([0-9]+)*/g) );
    this.spinner.hide();
    await worker.terminate();
  }
   
  //afficher et cacher
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";
  }
  //importation de l'image
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  //lancement de l'interprétion
  onUpload() {
    //affichage de message d'attente
    
    this.show = !this.show;

    
    if(this.show)  
      this.buttonName = "Hide";
    else
      this.buttonName = "Show";

      //lancement du snipper
     // this.showSpinner();
      //lancement de l'OCR
    this.doOCR(this.selectedFile);
  }
}

