import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

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

    async sair() {
      const alert = await this.alertController.create({
        header: 'Alerta!',
        message: 'Opção em desenvolvimento!',
        buttons: ['OK'],
      });
      await alert.present();
      console.log('Saindo..');
      this.gerenciadorDeRotas.navigateByUrl('login');
  }

}
