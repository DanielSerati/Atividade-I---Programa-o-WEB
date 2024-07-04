export interface VendaItem {
    estoquePaesID: number;
    quantidade: number;
  }
  
  export interface VendaPaes {
    idVenda: number;
    cpf: string;
    itens: VendaItem[];
    total: number;
  }  