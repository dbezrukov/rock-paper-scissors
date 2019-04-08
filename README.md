## Камень, ножницы, бумага

DApp игра Камень, ножницы, бумага.<br>
Контракт написан на языке Solidity.<br>
Контракт скопилирован и задеплоен в блокчеин с использованием фреймворка Truffle (solc, web3).<br>
Фронтенд игры реализован средствами библиотеки Drizzle, входящей в Truffle.<br>
В основе веб приложения лежит React/Redux Store, синхронизированный с контрактом через web3 провайдера.<br>

### Процесс игры
Игра предназначена для двух участников.<br>
Каждый участник открывает игру в своем браузере.<br>
Игроки договариаваются кто их них Игрок А, а кто Б, и начинают ходить по очереди.<br>
Ход первого игрока запоминается в блокчейне, после хода второго игрока выводится результат.<br><br>
Данная игра может быть усовершенствована шифрованием ставки первого игрока.<br>

### Установка окружения

```
npm install truffle -g
npm install ganache-cli -g
```

### Запуск тектового блокчейна Ganache

```
ganache-cli --host 0.0.0.0
```

### Компиляция и деплой контракта

```
truffle compile
truffle migrate
```

### Запуск фронтенда игры

```
cd app
npm install
npm start
```

Игра доступна по адресу http://78.46.181.188:3000/.
