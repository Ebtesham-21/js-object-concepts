const student = {
    id: 101,
    money: 5000,
    name: 'rj kibria',
    major: 'mathematics',
    isRich: false,
    subjects: ['english', 'economics', 'math 101', 'calculus'],
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function() {
        console.log(this.name, 'taking exam');
    },
    treatDey: function(expanse, bokis) {
        this.money = this.money - expanse - bokis;
        return this.money;
    }
}

student.takeExam();
const remaining1 = student.treatDey(900, 100);
const remaining2 = student.treatDey(500, 50);
console.log(remaining2);