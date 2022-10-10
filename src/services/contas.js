import { api } from '@/services/config';

export default{

  listar(url){

    return api.get(url)
  },

  cadastrar(conta){

    return api.post("/contas", conta)
  },

  atualizar(conta){
    return api.put('/contas', conta)
  },

  excluir(conta){
    return api.delete('/contas/' + conta)
  }

}