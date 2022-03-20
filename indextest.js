function addLi() {
        var stroka = prompt("Введите название строки:", "");//для ввода названия новой строки
        if (stroka){
                var ol = document.getElementById ("spisokst");//находим наш список
                var li = document.createElement("LI");//создаем новый элемент списка
                        ol.appendChild(li);//присваиваем нашему списку новый элемент
                var text = document.createTextNode(stroka);//создаем новый узел текст
                        li.appendChild(text);//присваиваем этот текст нашему новому пункту списка
        }
   }
   //пишем функцию удаления пунктов из списка
   function deleteLi() {
    var ol = document.getElementById ("spisokst");//находим наш список
    var lastLi = ol.lastChild;//заводим переменную и храним в ней последний элемент нашего списка
        //проверяем на наличие нашего элемента, исключая пробелы, табуляции и комментарии
        while (lastLi && lastLi.nodeType != 1){
           lastLi = lastLi.previousSibling;
        }
        if (lastLi){
            lastLi.parentNode.removeChild(lastLi);//удаляем пункт списка, 
                //если конечно в списке еще что-то осталось
          }
   }
