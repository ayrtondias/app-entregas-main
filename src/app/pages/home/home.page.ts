import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private gerenciadorDeRotas: Router,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Opção em desenvolvimento!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  sair(){
    /*
    Executa toda a lógica de sair, apagando dados do usuário, etc...
    Navega para a página de login
    */
    console.log('Saindo..');
    this.gerenciadorDeRotas.navigateByUrl('login');
  }

}
