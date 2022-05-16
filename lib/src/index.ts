import { NextFunction, Request, Response } from 'express';
import { Route } from './interfaces/route';
import { docui } from './templates/docui';

export class Oncedoc {
  private apiRoutes: Route[] = [];
  private template = '';
  constructor(routes: Route[]) {
    this.apiRoutes = routes;
    this.template = docui;
    this.generateUiFromTemplate();
  }

  private generateUiFromTemplate() {
    let html = '';
    this.apiRoutes.forEach(route => {
      html += 
      `<div class="d-flex flex-column border rounded my-2 p-3 bg-light" style="cursor: pointer;" data-bs-toggle="modal" data-bs-target="#exampleModal">
        <div class="w-100 d-flex flex-row">
          <span class="${this.getMethodClass(route.method)} text-white px-3 py-2 rounded">${route.method}</span>
          <span class="my-auto ms-3">${route.path}</span>
        </div>
      </div>`
    });
    this.template = this.template.replace('###API_REGION###', html);
  }

  private getMethodClass(method?: string) {
    switch (method) {
      case 'GET':
        return 'bg-success';
      case 'POST':
      case 'PUT':
        return 'bg-warning';
      case 'DELETE':
        return 'bg-danger';
      default:
        return 'bg-light'
    }
  }

  serveOncedocUI = (req: Request, res: Response, next: NextFunction) => {
    res.send(this.template);
  }
}
