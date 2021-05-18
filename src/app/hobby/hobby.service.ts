import {MyHobby} from "./hobby"
export class HobbyService{

  strangeHobby: MyHobby={

    title: "Экстремальная глажка белья",
    description: "Англичанин Фил Шоу обожал гладить белье, что само по себе является довольно редким увлечением (особенно для мужчины). Но еще больше он обожал горы. В один прекрасный день друзья звали Фила покорять вершины, а дома его дожидалась огромная стопка свежевыстиранных вещей. Шоу было сложно сделать выбор, и он решил совместить приятное с приятным. Житель Восточного Мидленда отправился лазать по скалам, прихватив с собой гладильную доску и утюг. Как ни странно, путешествие дало начало модному нынче тренду. Поклонники экстремальной глажки утюжат белье на горных вершинах, байдарках, оживленных трассах и в дремучих лесах.",
    mainPicture: "/assets/images/main_picture.jpg",
    portraitOfFamousPerson: "/assets/images/famous.jpg"
  }

  getHobby():MyHobby{

    return this.strangeHobby;
  }

  editHobby(t:string, d:string, mainP:string, portrait:string){

    this.strangeHobby.title=t;
    this.strangeHobby.description=d;
    this.strangeHobby.mainPicture=mainP;
    this.strangeHobby.portraitOfFamousPerson=portrait;
  }
}
