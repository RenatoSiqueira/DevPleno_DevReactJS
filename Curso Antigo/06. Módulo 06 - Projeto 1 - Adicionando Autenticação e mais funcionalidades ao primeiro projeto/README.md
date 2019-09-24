# DevReactJS

### Módulo 06 - Projeto 1: adicionando Autenticação e mais funcionalidades ao primeiro projeto
#### Projeto Comentários
- Novas funcionalidades ao primeiro Projeto: Autenticação e relacionados, Criação de nova conta e melhorias no layout com bootstrap.


### Anotações Importantes:
```
  [09:26] - HandleChange Coringa
```


## firebase.js
```
import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const config = {
    apiKey: "key",
    authDomain: "url",
    databaseURL: "url",
    projectId: "id",
    storageBucket: "bucket",
    messagingSenderId: "key"
  }
firebase.initializeApp(config)

export const database = firebase.database()
export const auth = firebase.auth()
```