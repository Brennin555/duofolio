import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { first, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {

  constructor(
    private auth: AngularFireAuth,
    private fireStore: AngularFirestore,
    private router: Router,
    private firestore: AngularFirestore,
  ) { }

  ngOnInit() {
    this.firestore.collection('testes').add({ teste: 'conexão' })
      .then(() => console.log('Conexão com Firestore bem-sucedida.'))
      .catch((error) => console.error('Erro na conexão com Firestore:', error));
  }

  // emailVerification() {
  //   return this.auth.currentUser.then((uid) => uid?.sendEmailVerification())
  //     .then(() => { });
  // }

  public saveDetails(data: any) {
    return this.fireStore.collection('usuarios').doc(data.uid).set(data);
  }

  public saveNoticia(data: any) {
    if (!data || typeof data !== 'object') {
      return Promise.reject(new Error('Dados inválidos para salvar a notícia.'));
    }
    return this.fireStore.collection('noticias').add(data);
  }

  public getNoticias() {
    return this.fireStore.collection('noticias').snapshotChanges().pipe(
      map((noticias) => {
        return noticias.map((noticia) => {
          const id = noticia.payload.doc.id;
          const data = noticia.payload.doc.data();
          return { id, ...(typeof data === 'object' ? data : {}) };
        });
      })
    );
  }


  // public async signUp(data: User, senha: string): Promise<any> {
  //   try {
  //     const userCredential = await this.auth.createUserWithEmailAndPassword(
  //       data.email,
  //       senha
  //     );

  //     this.emailVerification();
  //     const uid = userCredential?.user?.uid;

  //     await this.saveDetails({
  //       ...data,
  //       uid: uid,
  //       dataCriacao: userCredential?.user?.metadata.creationTime,
  //     });

  //     await this.savePontuacao(data.codigo, data.cidade, data.nascimento);
  //     this.router.navigate(['/cadastro-finalizado']);
  //   } catch (error) {
  //     console.log(String(error))
  //   }
  // }
}
