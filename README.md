# ReceiptOCR
**ReceiptOCR** est un projet Angular qui sert à scanner les tickets de notes de frais et permet non seulement de les convertir 
en texte en utilisant la technique d'OCR, mais aussi de récuperer spécifiquement la date/montant de chaque ticket fournis.  
pour tester le projet vous n'avez qu'à lancer les trois commandes suivantes:  

git clone https://github.com/merouan95/ReceiptOCR.git  
npm install  
ng serve  
puis d'ouvrir votre navigateur préféré et consulter: localhost:4200/  
vous pouvez tester le projet avec ces deux notes de frais présentes dans le lien suivant :   
https://i.ibb.co/pbxLG27/ndf.jpg  
https://i.ibb.co/b1sN4nQ/k.png   

**ReceiptOCR** is an Angular project that i built to scan ticket receipts and enable the user to convert these receipts to
a text using the OCR technique, then specifically retrieve the date / price tag of each ticket provided.
to test the project you just have to launch the following three commands:  
git clone https://github.com/merouan95/ReceiptOCR.git  
npm install  
ng serve  
localhost:4200/  
you can test the project with these two examples of ticket receipts in the following link:  
https://i.ibb.co/pbxLG27/ndf.jpg  
https://i.ibb.co/b1sN4nQ/k.png  
**Demo of the results of the first receipt:**  
![alt text](https://i.ibb.co/KFF1RZj/Capture1.png)  
**Demo of the results of the the second receipt:** _ if the receipt contains a lot of price values it will return all the values
found in a tab and it's up the the user the choose the most appropriate and accurate value of the receipt._
![alt text](https://i.ibb.co/zRWgNzr/Capture2.png)



