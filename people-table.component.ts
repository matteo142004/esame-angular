import { Component } from '@angular/core';

@Component({
  selector: 'app-people-table',
  template: `
    <h2>Lista di Persone</h2>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Cognome</th>
          <th>Età</th>
          <th>Email</th>
          <th>Codice Fiscale</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let person of people">
          <td>{{ person.nome }}</td>
          <td>{{ person.cognome }}</td>
          <td>{{ person.eta }}</td>
          <td>{{ person.email }}</td>
          <td>{{ person.codiceFiscale }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [
    `
      table {
        width: 100%;
        border-collapse: collapse;
      }
      th, td {
        border: 1px solid black;
        padding: 8px;
        text-align: left;
      }
      th {
        background-color: #f2f2f2;
      }
    `
  ]
})
export class PeopleTableComponent {
  people = [
    { nome: 'Mario', cognome: 'Rossi', eta: 30, email: 'mario.rossi@example.com', codiceFiscale: 'RSSMRA30A01H501Z' },
    { nome: 'Luigi', cognome: 'Verdi', eta: 25, email: 'luigi.verdi@example.com', codiceFiscale: 'VRDLGU25A01H501Z' },
    { nome: 'Anna', cognome: 'Bianchi', eta: 28, email: 'anna.bianchi@example.com', codiceFiscale: 'BNCNNN28A01H501Z' },
    { nome: 'Carla', cognome: 'Neri', eta: 35, email: 'carla.neri@example.com', codiceFiscale: 'NRICRL35A01H501Z' },
    { nome: 'Paolo', cognome: 'Blu', eta: 40, email: 'paolo.blu@example.com', codiceFiscale: 'BLUPPL40A01H501Z' },
    { nome: 'Gina', cognome: 'Gialli', eta: 33, email: 'gina.gialli@example.com', codiceFiscale: 'GLIGNN33A01H501Z' },
    { nome: 'Franco', cognome: 'Azzurri', eta: 27, email: 'franco.azzurri@example.com', codiceFiscale: 'AZZFRN27A01H501Z' },
    { nome: 'Laura', cognome: 'Rosa', eta: 22, email: 'laura.rosa@example.com', codiceFiscale: 'RSALRA22A01H501Z' },
    { nome: 'Sara', cognome: 'Grigi', eta: 29, email: 'sara.grigi@example.com', codiceFiscale: 'GRGSRR29A01H501Z' },
    { nome: 'Giovanni', cognome: 'Marrone', eta: 37, email: 'giovanni.marrone@example.com', codiceFiscale: 'MRNGNN37A01H501Z' },
  ];
}
