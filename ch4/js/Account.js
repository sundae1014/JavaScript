// 클래스 정의
class Account{
    constructor(bank,id,name,balance){
        this.bank = bank;
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
        
    deposit(money){
        this.balance += money;
        }
        
    withdraw(money){
        this.balance -= money
    }
        
    show(){
        document.writeln('<p>');
        document.writeln('은행 : '+this.bank+'<br>');
        document.writeln('계좌 : '+this.id+'<br>');
        document.writeln('이름 : '+this.name+'<br>');
        document.writeln('잔액 : '+this.balance+'<br>');
        document.writeln('</p>');
    }
}